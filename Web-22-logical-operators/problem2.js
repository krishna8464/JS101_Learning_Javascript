// Problem 2 : Given any character, if it is a vowel print "Vowel"
let char = "i";

if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
  console.log("Vowel");
}else {
  console.log("Consonant");
}
// using ternari operator
char == "a" || char == "e" || char == "i" || char == "o" || char == "u" ? console.log("Vowel") :  console.log("Consonant");
// using switch case 
 switch(char){
   case "a" : console.log("Vowel");
     break;
      case "e" : console.log("Vowel");
     break;
     case "i" : console.log("Vowel");
     break;
     case "o" : console.log("Vowel");
     break;
     case "u" : console.log("Vowel");
     break;
     default : console.log("Consonant");
 }