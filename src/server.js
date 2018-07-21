const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const epilogue = require('epilogue')
const sgMail = require('@sendgrid/mail');

// const OktaJwtVerifier = require('@okta/jwt-verifier')

// const oktaJwtVerifier = new OktaJwtVerifier({
//   clientId: '{yourClientId}',
//   issuer: 'https://{yourOktaDomain}/oauth2/default'
// })

let app = express()
app.use(cors())
app.use(bodyParser.json())

// verify JWT token middleware
// app.use((req, res, next) => {
  // require every request to have an authorization header
  // if (!req.headers.authorization) {
  //   return next(new Error('Authorization header is required'))
  // }
  // let parts = req.headers.authorization.trim().split(' ')
  // let accessToken = parts.pop()
  // oktaJwtVerifier.verifyAccessToken(accessToken)
  //   .then(jwt => {
  //     req.user = {
  //       uid: jwt.claims.uid,
  //       email: jwt.claims.sub
  //     }
  //     next()
  //   })
  //   .catch(next) // jwt did not verify!
// })



sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'test@test.com',
  from: 'test@test.com',
  subject: 'Receiving emails from your new site is fun',
  text: 'and easy to get anywhere, even with A half built site',
  html: '<strong>and easy to get anywhere, even with a half built site</strong>',
};
sgMail.send(msg)
  .then(res => console.log(res));

// For ease of this tutorial, we are going to use SQLite to limit dependencies
let database = new Sequelize({
  dialect: 'sqlite',
  storage: './test.sqlite',
})

// Define our Event model
// id, createdAt, and updatedAt are added by sequelize automatically
let Post = database.define('posts', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT,
})

// Initialize epilogue
epilogue.initialize({
  app: app,
  sequelize: database,
})

// Create the dynamic REST resource for our Post model
let userResource = epilogue.resource({
  model: Post,
  endpoints: ['/posts', '/posts/:id']
})

// Resets the database and launches the express app on :8081
database
  .sync({ force: true })
  .then(() => {
    app.listen(8081, () => {
      console.log('listening to port localhost:8081')
    })
  })