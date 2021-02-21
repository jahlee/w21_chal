const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const helper = require('./grande');
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('css'));

// jibberish challenge
app.get('/jibberish', (req, res) => {
    res.sendFile('./public/jibberish.html', { root: __dirname });
});

// grande challenge
app.get('/grande', (req, res) => {
  res.sendFile('./public/grande_cookies.html', {root: __dirname });
})

// check cookies when button is pressed (post req)
app.post('/hehe', (req, res) => {
  try {
    // console.log(req.cookie);
    // console.log(req.headers.cookie);
    const messy_mess = helper.hehe(req.headers.cookie);
    // https://stackoverflow.com/questions/42106506/express-js-how-to-send-alert-from-express-to-client-using-res-render-not-res
    // wow this came in clutch
    res.send(`<script>alert("${messy_mess}"); window.location.href = "/grande";</script>`);
    // res.send(messy_mess);
  } catch (err) {
    res.status(400).send(err.message);
  }
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})