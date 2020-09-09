/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 21;
if (votingAge > 18) {
    console.log(true);
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let var1 = 1;
console.log(var1)
let var2 = 2;
if (var2 === 2) {
    console.log(var1 = 7);
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let convert = "1999";
Number("1999");
console.log(convert)


//Task d: Write a function to multiply a*b 
function multiplyab(a,b) {
console.log (a * b);
}

multiplyab (2,7);


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogyears (myage) {
    console.log (myage * 7);
}

dogyears (21);



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight
// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function feeder (weight, age) {
    if (weight <= 5 && age >= 1) {
        return .05 * weight;
    }
    if ((weight <= 10 && weight > 6) && (age >= 1)) {
        return .04 * weight;
    }
    if (age < 1 && age >= .583) {
        return .04 * weight;
    }
}


console.log (feeder (5,.8));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
 let computer = Math.random();
 function game (player) {
     if (computer <= .33 && player === "rock") {
     return "you lost";
     } else if (computer <= .33 && player === "scissors") {
         return "you won";
     } else if (computer <= .33 && player === "paper") {
         return "draw";
     }

     if ((computer <= .66 && computer > .33) && (player === "scissors")) {
        return "you lost";
        } else if ((computer <= .66 && computer > .33) && (player === "paper")) {
            return "you won";
        } else if ((computer <= .66 && computer > .33) && (player === "rock")) {
            return "draw";
        } 

        if ((computer <= 1 && computer > .66) && (player === "paper")) {
            return "you lost";
            } else if ((computer <= 1 && computer > .66) && (player === "rock")) {
                return "you won";
            } else if ((computer <= 1 && computer > .66) && (player === "scissors")) {
                return "draw";
            } 
 }
  

console.log (game ("scissors"));
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function converter (kilo) {
    console.log (kilo * 0.621372);
}

converter (5);


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function converter2 (feet) {
    console.log (feet * 30.48);
}

converter2 (60);

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingsong (start) {
    let bottles1 = " bottles of soda on the wall ";
    let bottles2 = " bottles of soda ";
    let bottles3 = "take one down pass it around ";
    while (start > 0) {
        console.log (start + bottles1);
        console.log (start + bottles2);
        start = start - 1;
        console.log (bottles3 + start + bottles1);
    }
    }
    
    annoyingsong (99);
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object