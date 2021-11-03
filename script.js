//No arguments
const painting1 = function() {
    console.log("The wall has been painted red");
};
painting1();
//antwoord: The wall has been painted red

//One argument
const painting2 = function(color) {
    console.log("The wall has been painted " + color);
};
painting2("green");
painting2("blue");

//antwoord The wall has been painted green
//antwoord The wall has been painted blue

painting2();
//antwoord: The wall has been painted undefined

//Multiple arguments
const painting3 = function(side, color){
};
const color = "green";
const side = "north";
    console.log("The " + side + " has been painted " + color);
//antwoord: The north has been painted green

