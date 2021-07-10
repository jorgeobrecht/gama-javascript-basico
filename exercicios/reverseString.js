//Reverse a string

function reverseAString(str){
    let revStr='';
    for(let i = str.length-1; i>=0 ; i--){
        revStr+= str[i];
    }
    return revStr;
}

console.log(reverseAString("Jorge"))