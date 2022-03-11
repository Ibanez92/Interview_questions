function rot(str, shiftValue){
    let result = ""
    for (let i = 0; i < str.length; i++) {
        result += String.fromCharCode(str.charCodeAt(i) + shiftValue % 26)
    }
    return result
}

console.log(rot("HELLO", 1));
console.log(rot("HELLO", 2));
console.log(rot("HELLO", -1));
console.log(rot("HELLO", 27));
