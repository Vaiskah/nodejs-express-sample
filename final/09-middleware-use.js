const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res
app.use([logger, authorize])
// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})



// const express = require("express");

// const app = express();
// const authorize = require("./authorize")
// const logger = require("./logger");
// // app.use(logger) this apply for all
// // app.use('/api',logger) // this will apply only after api url
// app.use([logger, authorize]);

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/api/product", (req, res) => {
//   res.send("Product Page");
// });

// app.get("/api/items", (req, res) => {
//   res.send("Items Page");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// app.listen(5000, () => {
//   console.log("server is listening port 5000......");
// });
