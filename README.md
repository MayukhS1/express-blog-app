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
## Middleware in Express

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

## Mongo DB

MongoDB is a popular NoSQL database that stores data in JSON-like documents.

It is being used in this application to store blog data.

Some key points:

- `mongoose` is being used to interact with MongoDB. It is an ODM (Object Document Mapper) that makes it easier to work with MongoDB in Node.js.

- The `mongoose.connect()` method is used to connect to a MongoDB database URL. 

- The Blog model defined in `./models/blog.js` maps to a blogs collection in MongoDB and defines the schema for blog documents.

- Blog data is saved, retrieved, updated, deleted using Mongoose model methods like `.save()`, `.find()`, etc. 

- Routes like `app.get('/blogs')` retrieve blogs from MongoDB and render them in views.

- So MongoDB + Mongoose provide the persistence layer for the blog data in this Express application.

### MongoDB Atlas

This application uses MongoDB Atlas as the database for storing blog data. 

MongoDB Atlas is a fully-managed cloud database service provided by MongoDB Inc. It handles all the complexity of deploying, managing, and scaling MongoDB in the cloud.

Some benefits of using MongoDB Atlas:

- Automatic provisioning of MongoDB clusters.
- Handles replication and fault-tolerance.
- Provides monitoring, alerts, and performance metrics.
- Scales up and down on demand.
- Backup and point-in-time restore features.
- Fine-grained access control.
- Encryption of data-in-transit and data-at-rest.
- Global cloud infrastructure puts data close to your application.

The connection string for accessing MongoDB Atlas should be stored in the `.env` file and loaded into `server.js`. Mongoose connects to this URL to access the database. Currently it's added in `server.js` as a constant.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
