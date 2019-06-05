/**
 * saml-express
 * @author Guillermo Quinteros <gu.quinteros@gmail.com>
 */
const express = require('express')
const morgan = require('morgan')

const app = express();

const PORT = process.env.NODE_PORT || 3000;

app.use(morgan('dev'))

app.get('', (req, res) => {
  res.json({
    message: 'Welcome Unknown User'
  });
})

app.get('/me', (req, res) => {
  res.json({
    message: 'Welcome User'
  });
})

app.listen(PORT, () => {
  console.log('Running on : ' + PORT);
});
