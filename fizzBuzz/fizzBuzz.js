/* Module Private section */ 
let rules = null;
const checkCount = (count) => count <= 0
const checkFizzBuzz = ({j}) => {
    let outPut = '';
    for(const item in rules){
        j%item == 0 ? outPut+= `${rules[item]}` : null ;
    }
    outPut == '' ? outPut+=j   : null ;
    return outPut;
}
/* Module Private section Ends here */

/* Module Public section starts here */
exports.methodOne = ({count}) => {
    if( checkCount(count) ) { throw Error('Count Must be greater then 0 !!')  }
    fizzBuzzOutput = [];
    for(let i = 1; i<= count; i++){
        let outPut = '';
        i%3 == 0 ? outPut+= 'Fizz' : null ;
        i%5 == 0 ? outPut+= 'Buzz' : null ;
        outPut == '' ? outPut+=i   : null ;
        fizzBuzzOutput.push(outPut)
    }
    return fizzBuzzOutput;
}

exports.methodTwo = ({count, Rules}) => {
    if( checkCount(count) ) { throw Error('Count Must be greater then 0 !!')  }
    rules = Rules
    fizzBuzzOutput = [];
    for(let i = 1; i<= count; i++){
        fizzBuzzOutput.push(
            checkFizzBuzz({j:i})
        )
    }
    return fizzBuzzOutput;
}
