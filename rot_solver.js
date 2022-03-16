function rot(str, shiftValue){
    let result = ""
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i)
        // if an uppercase letter
        if(charCode >= 65 && charCode <= 90){
            result += String.fromCharCode(charCode + shiftValue % 26)
        } // if a lowercase letter 
        else if (charCode >= 97 && charCode <= 122) {
             result += String.fromCharCode(charCode + shiftValue % 26)
        } else {
            // if its not a letter, we just include it in the string as is
            result += str[i]
        }

        
        // if not a letter, dont do anything to it

    
        
    }
    return result
}

console.log(rot("HELLO", 1));
console.log(rot("HELLO", 2));
console.log(rot("HELLO", -1));
console.log(rot("HELLO", 27));
console.log(rot("HELLO", 12));
console.log(rot("ABab", 12));
console.log(rot("YyZz", 12));
console.log(rot("OoPp", 12));
console.log(rot("OoPp, Hello", 12));
