var num=7;

if(num === 1){
    console.log("numero igual a 1")
}else if(num===2){
    console.log("numero igual a 2")
}else{
    console.log("numero igual a " + num)
}

var mes="dezembro"

switch(mes){
    case "fevereiro":
        console.log('mes 2')
        break;
    
    case "janeiro":
        console.log("mes 1")
        break;

    default:
        console.log("Nao eh janeiro nem fevereiro")
}