//FizzBuzz
//Divisivel por 3 ->'Fizz'
//Divisivel por 5 ->'Buzz"
//Divisivel por 3 e 5 ->'FizzBuzz'
//Nao eh numero->'Nao eh um numero'
//Nao divisivel por 3 nem por 5-> entrada

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'Nao eh um numero';

    if(entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'

    if(entrada % 3 === 0)
        return 'Fizz'
    
    if(entrada % 5 === 0)
        return 'Buzz'

    return entrada
}


console.log(fizzBuzz(15))