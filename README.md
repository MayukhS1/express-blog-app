# express-blog-app
A blog application built with Express.js. 

## Install

```bash
git clone https://github.com/MayukhS1/express-blog-app
cd express-blog-app
npm install
```

Start the server at http://localhost:3000

## API Reference

List any APIs or routes exposed by the app

## View Engine

Express supports using template engines like EJS, Pug, Handlebars etc. to generate the HTML for responses dynamically.

This app uses EJS as the view engine. The EJS templates are stored in the `views` folder.

To set the view engine:

```js
app.set('view engine', 'ejs');
```
# Middleware in Express

Middleware in Express.js refers to functions that execute during the request-response cycle. Middleware functions have access to the request and response objects, and the next middleware function in the application's request-response cycle.

Some common uses of middleware in Express include:

* Logging - Logging requests, errors, etc.
* Authentication - Verifying user credentials before allowing access to routes.
* Error handling - Catching and handling errors in the application.
* Parsing - Parsing request bodies, like JSON parsing.
* Serving static files - Hosting static files like images, CSS, etc.

Middleware functions are registered using app.use() and take the form:

```js
app.use(function(req, res, next) {
  // ... perform some operation
  next(); // pass control to next middleware function
});
```
The next() function passes control to the next middleware function. Middleware can perform operations on the request and response, and optionally call next() to move to the next middleware. Multiple middleware functions can be chained together and execute sequentially.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
