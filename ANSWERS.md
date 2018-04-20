<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

* Middleware is software code that sits between other pieces of software, as in between the client and server. Sessions, as in express-sessions are a way to store identifying information of a user, for the purposes of authentication. bcrypt is a library we use to hash passwords, so that plaintext passwords are never stored in a database. JWT, JSON web tokens, is another way of providing information about a user for the purposes of authentication, similar to sessions, but different in that a token is assigned to the user for authentication.

2.  What does bcrypt do in order to prevent attacks?

* bcrypt hashes passwords. hashing a plain text password, and adding a salt to it, turns the plain text into a long, random string, which cannot be 'dehashed'. Hashing is a one way operation, and applying multiple rounds of hashing, which bcrypt can do, as well as slowing down the hashing operation, would require thousnands of years to crack via brute force/rainbow table attacks.

3.  What are the three parts of the JSON Web Token?

* header, payload, signature.
