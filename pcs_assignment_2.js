var myString 

myString = 'Hello';

function removeVowels(string) {
   return string.replace(/[aeiou]/gi,'')
}

removeVowels(myString);
console.log(myString);

for (var i = myString.length-1; i >= 0; i --) {
  console.log(myString[i]);
}
