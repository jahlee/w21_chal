// helper function for grande cookie challenge
module.exports = {
  hehe: function (cookies) {
    if (!cookies || cookies === undefined)
      return ("almost, but its never enough")
    // console.log(cookies);
    let splitsies = cookies.split("=yuh");
    // console.log(splitsies);
    let yuh = splitsies.length - 1;
    console.log(yuh);
    if (yuh === 1) {
      return "I'm so into you hehe";
    } else if (yuh === 2) {
      return "almost, but its never enough";
    } else if (yuh === 3) {
      return "thank u, next";
    } else if (yuh === 4) {
      return "imagine a world where I had all 7 infinity stones hehe yuh";
    } else if (yuh === 5) {
      return "BANG BANG";
    } else if (yuh === 6) {
      return "just 1 less problem";
    } else if (yuh === 7) {
      return "yuh, flag{yuh_yuh_yuh_yuh_yuh_yuh_hehe}";
    } else {
      return "hehe um, thats a lot hehe. this is making me feel like a dangerous woman";
    }
  },
};
