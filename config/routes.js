require('dotenv').config();
const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig.js');
const jwt = require('jsonwebtoken');

const { authenticate } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

const generateToken = user => {
  const jwtPayload = {
    ...user,
    hello: 'FSW13',
    roles: ['admin', 'root'],
  };

  const jwtSecret = process.env.JWT_SECRET;

  const jwtOptions = {
    expiresIn: '5m',
  };

  return jwt.sign(jwtPayload, jwtSecret, jwtOptions);
};

function register(req, res) {
  // implement user registration
  const creds = req.body;

  const hash = bcrypt.hashSync(creds.password, 8);
  creds.password = hash;

  db('users')
    .insert(creds)
    .then(ids => {
      const id = ids[0];
      res.status(201).json({ newUserId: id });
    })
    .catch(err => {
      res.status(500).json({ err: err.message });
    });
}

function login(req, res) {
  // implement user login
  const creds = req.body;

  db('users')
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ welcome: user.username, token });
      } else {
        res.status(401).json({ message: `You are not authorized.` });
      }
    })
    .catch(err => {
      res.status(500).json({ err: err.message });
    });
}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
