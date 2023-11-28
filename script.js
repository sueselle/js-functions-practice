var startMyDay = function () {
  return "Time for coffee and to walk the dogs!";
};
console.log(startMyDay());

//1 parameter function
var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie()); //undefined without arguments
console.log(favoriteCookie("molasses"));

//2 parameter function
var introduce = function (name, occupation) {
  return `My name is ${name} and I am a badass ${occupation}.`;
};
console.log(introduce("Sue", "teacher"));
console.log(introduce("Buster", "dog"));

//function to capture input
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you drink today?")
  );
  if (numGlasses >= 8) {
    return `Wow! Great job drinking ${numGlasses} glasses today! Keep up the great work!`;
  } else {
    return `Not too shabby - only ${8 - numGlasses} glasses left to go!`;
  }
};

console.log(hydrationFeedback());
