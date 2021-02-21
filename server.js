const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
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

// helper function for grande cookie challenge
function hehe(cookies) {
  console.log(cookies);
  let splitsies = cookies.split("=yuh");
  console.log(splitsies);
  let yuh = splitsies.length - 1;
  if (yuh === 0) {
    return ("almost, but its never enough")
  }
  else if (yuh === 1) {
    return ("I'm so into you hehe")
  }
  else if (yuh === 2) {
    return ("almost, but its never enough")
  }
  else if (yuh === 3) {
    return ("thank u, next")
  }
  else if (yuh === 4) {
    return ("imagine a world where I had all 7 infinity stones hehe yuh")
  }
  else if (yuh === 5) {
    return ("BANG BANG")
  }
  else if (yuh === 6) {
    return ("just 1 less problem")
  }
  else if (yuh === 7) {
    return ("yuh, flag{yuh_yuh_yuh_yuh_yuh_yuh_hehe}")
  }
  else {
    return ("hehe um, thats a lot hehe. this is making me feel like a dangerous woman")
  }
}

// check cookies when button is pressed (post req)
app.post('/hehe', (req, res) => {
  try {
    // console.log(req.cookie);
    // console.log(req.headers.cookie);
    const messy_mess = hehe(req.headers.cookie);
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