var myString; 
var myOutput;

myString = 'HEllAouiOIT';
myOutput = "";

for (var i = myString.length-1; i >= 0; i--) {
  if ((myString[i] === 'a')||(myString[i] === 'A')){
    myString[i] = ""
  }
  else if ((myString[i] === 'e')||(myString[i] === 'E')) {
    myString[i] = ""
  }
   else if ((myString[i] === 'i')||(myString[i] === 'I')){
    myString[i] = ""
  }
   else if ((myString[i] === 'o')||(myString[i] === 'O')){
    myString[i] = ""
  }
  else if ((myString[i] === 'u')||(myString[i] === 'U')) {
    myString[i] = ""
  }
  else { 
    console.log(myString[i])
    myOutput += myString[i]
  }
}

console.log(myOutput)

// w switch
// for (var i = myString.length-1; i >= 0; i --) {
//   switch(myString[i]) {}
//   case "a": 
//   	console.log("found an a");
//   case "l":
//   	console.log(myString[i]);
//   }
// }


// function removeVowels(string) {
// 	var retVal = string.replace(/[aeiou]/gi,'');
// 	console.log(retVal);
// 	return retVal;
// }

// myString = removeVowels(myString);
// console.log(myString);