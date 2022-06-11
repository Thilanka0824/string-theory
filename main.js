let namesArray = ["Jimmy", "Hugh", "Judy", "Carl"]

for(let ctr = 0; ctr < namesArray.length; ctr++){
    console.log(namesArray[ctr])
}

function xify() {
    console.log()
}
////===============================================================

let name1 = "Sheen";

// we can go through strings in the same exact way
for(let i = 0; i < name1.length; i++){
    console.log(name1[i])
} 

// string building
// print a dash

let newStr = "";
for(let i = 0; i < name1.length; i++){
    let dash = "-";
    newStr = newStr + name1[i] + dash;

} 

// result: S-h-e-e-n
console.log(newStr)

function xify(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        newStr = newStr + "x";// same thing: newStr +=
    }
    return newStr;
}
console.log(xify("hello"));
console.log(xify("hi there"));

// //===========================================================

function indexedChars(str){
    let newString = "";

    for(let i =0; i < str.length; i++){
        newString = newString + i + str[i];
    }

    return newString
}

console.log(indexedChars("hello"))
// 0h1e2l3l4o
console.log(indexedChars("bye"))
// 0b1y2e

// //==========================================================

function exclaim(str){
    let newString = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] === "?" || str[i] === "."){ //checks if the char in the index of str[i] is a "?" or "."
            newString = newString + "!" // this replaces whatever was found in the previous line with "!" in newString
        } else {
            newString = newString + str[i] // this adds whatever is in the index of str[i] to newString // the loop keeps on going //
        }
    }
    return newString
}



console.log(exclaim("hello? My name is Thilanka. I like rum sometimes? HELLO.?.?."))

////==============================================================

function truncate(str){
    let truncString = "";

    for(let i = 0; i < 15; i++){
        truncString = truncString + str[i]
    }
    return truncString + "..."
}
console.log(truncate("hello. This problem has taken me several hours to solve. I am questioning my own sanity at this point  "))

////==============================================================


let input = "harry fred"


function ciEmailify(input){
    let newStr = "";
    for(let i = 0; i < input.length; i++){
        if(input[i] === " "){
            newStr = newStr + "." // same as newStr += "."
        } else {
            newStr = newStr + input[i] // this adds whatever is in the index of str[i] to newString //
        }
    
    } 
    newStr = newStr + "@codeimmersives.com"
    return newStr

}

console.log(ciEmailify("harry fred"))

////===============================================================

function reverse(str){
    let newStr = ""
    for(let i = 0; i < str.length; i++){
        newStr = str[i] + newStr // this adds each char backwards
    }
    return newStr
}

console.log(reverse("Hello"))

////===============================================================

// the for loop works and does what it's supposed to but im still having an disconnect with the way it would work in function form(i cant figure out what to write in the parameter)... so I added a prompt to the variable I use in the loop

const prompt = require('prompt-sync')({sigint: true});

let vowels = ""
let searchVowels = prompt("> ")
let lower = searchVowels.toLowerCase()

function onlyVowels(){

    for(i = 0; i < lower.length; i++) {
        if(lower[i] === "a" || lower[i] === "e" || lower[i] === "i" || lower[i] === "o" || lower[i] === "u"){
        vowels = vowels + lower[i]
        }
    }
return vowels
}

console.log(onlyVowels(lower))