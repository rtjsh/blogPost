Javascript is both scripting and programming language. As a web perspective, it is a scripting language.

client side--> browser. It is responsible for the behavior and interactivity of a web page like DOM manupulation, event handling and so on.
Environment: Browser (e.g., Chrome, Firefox, Safari)

server side--> can be connected to database.  Server-side JavaScript runs on a web server. It is responsible for handling requests from the client, processing data, and generating responses.
Environment: Server (e.g., Node.js runtime)
A web server is a system that delivers web pages to clients (usually web browsers) over the HTTP protocol. It handles requests from clients and responds with the requested resources, such as HTML documents, images, and other files.

package.json --> a file that describes our project

package-lock.json --> a file that describes the packages(npm) used in the project

library --> react

framework --> laravel, express, angular, vuejs

environment --> nodejs

Library vs framework
The framework calls the developer's code, whereas in a library, the developer calls the library's code.
For example, a library might be designed to handle user input, interact with a database, or perform data parsing. In contrast, frameworks are designed to provide a wide range of functionality and are often used to build complete applications.

Almost every nodejs project uses express js

versioning of packages are in semantic(semVer)
Example: major.minor.patch (1.2.3)

// Port Number--> 0 to 65535. Port numbers identify a particular application or service on a system. Same port number cannot be used. It is convinient to use the port numbers greater than 1000 as 0-1000 is used by the internal system

What Can Node.js Do?
--> Node.js can generate dynamic page content
--> Node.js can create, open, read, write, delete, and close files on the server
--> Node.js can collect form data
--> Node.js can add, delete, modify data in your database

Note:--> "node --watch program_name" to access the program written in node environment in the browser automatically
         "npm init" to make a json package

Mango DB :--- mongodb+srv://rajesh:<password>@cluster0.pkqxtu3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

ORM ODM
ORM (Object-Relational Mapping): A technique for mapping objects to database records to simplify database operations. Javascript/NodeJs :- Mongoose
OPM (Object-Process Methodology): A comprehensive methodology for modeling systems' functions, structures, and behaviors.

FOur cases of naming convention::--
1) camelCase --> Example: rajeshthapa --> rajeshThapa
2) snake_case --> Example: rajeshthapa --> rajesh_thapa
3) PascalCase --> Example: rajeshthapa --> RajeshThapa
4) kebab-case --> Example: rajeshthapa --> rajesh-thapa

CJS --> common javascript

ES --> ecma script

Use "await" since these activities take some time to proceed:-
Network Request
Database query 
File read


middleware => Middleware in JavaScript, particularly in the context of web development, is a piece of code that sits between the server and the application logic, intercepting and handling requests and responses. Middleware functions can be used for various purposes such as authentication, logging, error handling, and more. They are a key part of frameworks like Express.js.

multer => Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.


In Node.js, particularly when using the Express framework, HTTP methods like GET and POST are used to define routes and handle HTTP requests. Here's a detailed explanation and examples of how to use these methods and some others:
1) The GET method is used to request data from a specified resource. It is one of the most common HTTP methods.(e.g., search queries).
2) The POST method is used to send data to the server to create or update a resource. The data sent to the server with POST is stored in the request body. (e.g., submitting a form to create a new blog post)
3) The PUT method is used to update an existing resource. It is similar to POST but is typically used to update existing resources.
4) The DELETE method is used to delete a specified resource.
5) The PATCH method is used to apply partial modifications to a resource.

Routing --> Routing is a way to define endpoints (routes) for your application and specify what should happen when a particular route is requested

Multipurpose Internet Mail Extensions --> MIME types play a crucial role in web development, helping to define the nature and format of data being transferred or processed. Whether you're restricting file inputs, setting headers for HTTP requests, handling file uploads on the server, or determining the MIME type of files in the browser, understanding and working with MIME types is essential for building robust web applications.

fetch/get


hashing and encryption --> To enhance the security of your application, it's crucial to hash user passwords before storing them in the database. This way, even if your database is compromised, the attackers won't have access to the actual passwords.

#HASHING --> Hashing is a process of converting data (such as a password or a message) into a fixed-size string of characters, which is typically a hash code. The output, known as a hash value or digest, uniquely represents the input data. Hashing is a one-way function, meaning it's designed to be computationally infeasible to reverse the hash back to the original input.

#ENCRYPTION --> Encryption is the process of converting plaintext data into ciphertext, which is an unreadable format, to protect it from unauthorized access. The purpose of encryption is to ensure data confidentiality and security. Only authorized parties, who possess the appropriate decryption key, can convert the ciphertext back into its original plaintext form.

Token, Cookie, Session
Token --> In JavaScript, a token typically refers to a string that represents an authorization or authentication credential. Tokens are often used in web applications for user authentication and to secure API requests. Common types of tokens include JSON Web Tokens (JWT), OAuth tokens, and CSRF tokens.



Session --> In JavaScript, a session typically refers to a period during which a user interacts with an application. Sessions are used to store information about a user's interaction with a web application, allowing the application to remember the user across multiple requests. This is crucial for functionalities such as user authentication, shopping carts, and user preferences.

JWT --> JSON Web Token (Pronounced as "jot")
Purpose: It is used to securely transfer information between parties.

JWTs (JSON Web Tokens) are typically generated by the server. Here’s a simplified breakdown of how the process works:

Generating a JWT
User Login:

A user provides their credentials (username and password) to the server.
Server Authentication:

The server verifies the credentials.
If the credentials are valid, the server generates a JWT.

How it Works:
1) Creating a Token:

You start with a piece of information you want to transfer (e.g., user details).
This information is called the payload.
You create a token by encoding this payload along with a secret key.

2) Structure of a JWT:

A JWT is made up of three parts separated by dots (.):
Header: Contains metadata about the token, such as the type of token and the algorithm used to sign it.
Payload: Contains the actual data (e.g., user information).
Signature: Ensures that the token hasn’t been altered. It’s created by hashing the header and payload with a secret key.

3) Using the Token:

The token is sent to the client (e.g., web browser).
The client includes this token in requests to the server (usually in the Authorization header).
Verifying the Token:

The server checks the token by decoding it using the same secret key.
If the token is valid, the server trusts the information in the payload.
Example in Practice:
User Login:

A user logs in to a website.
The server creates a JWT with the user's ID and other details and sends it to the client.
Accessing Protected Routes:

When the user tries to access a protected route, the client sends the JWT with the request.
The server verifies the token.
If valid, the server processes the request.
Simple Analogy:
Think of a JWT like a digital ID card:
Creating the ID: The ID card is created with your personal details (payload) and a special stamp (signature).
Showing the ID: You show your ID card to get access to places.
Verifying the ID: Security checks the stamp to make sure the ID card is authentic.
By using JWTs, systems can securely and efficiently manage user authentication and information exchange.

For example, a server could generate a token that has the claim "logged in as administrator" and provide that to a client. The client could then use that token to prove that it is logged in as admin. The tokens can be signed by one party's private key (usually the server's) so that any party can subsequently verify whether the token is legitimate. If the other party, by some suitable and trustworthy means, is in possession of the corresponding public key, they too are able to verify the token's legitimacy. 


Parsing -->  Parsing is the process that transforms the data in such a way so that it can be understood by any specific software.

What is cookie-parser?
Cookie-parser is a middleware for parsing cookies attached to the client request object. Once the cookies are parsed, they are available on the req.cookies object.

Why Use cookie-parser?
Cookies are small pieces of data sent from a server and stored on the client's computer.  Cookie-parser makes it easy to read and manipulate these cookies in your Express application. They serve various purposes, such as keeping users logged in, remembering preferences, and tracking user behavior for analytics and advertising.
1) Authentication: Cookies can store session identifiers that keep users logged in across different pages and sessions.
2) Preferences: They can remember user settings, such as language preference, theme, and other customization options.
3) Analytics: Websites use cookies to gather data on how users interact with their site, helping them improve functionality and user experience.
4) Advertising: Advertisers use cookies to track users across different websites, allowing for targeted ads based on browsing behavior.



Momo repo => maheshbasnet089 for further practice