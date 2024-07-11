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


hashing and encryption

Token, Cookie, Session

JWT
Cryptography