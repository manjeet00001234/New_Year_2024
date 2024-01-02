function evalNumbers(num1, num2, op) {

    if(op == "add"){
      console.log(`Sum of ${num1} and ${num2} is ${num1+num2} this is result`)
    }
    else if(op == "subtract"){
      console.log(`Difference of ${num1} and ${num2} is ${num1-num2}`)
    }
    else if(op == "multiply"){
      console.log(`Product of ${num1} and ${num2} is ${num1*num2}`)
    }
    else if(op == "divide"){
      console.log(`Division of ${num1} and ${num2} is ${num1/num2}`)
    }
    else if(op == "modulus"){
      console.log(`Modulus of ${num1} and ${num2} is ${num1%num2}`)
    }
    else{
       console.log(`${op} is an invalid operation`)    
    }
  }
  
  evalNumbers(15,10,"add") //"Sum of 15 and 10 is 25"
  evalNumbers(20,8,"subtract") //"Difference of 20 and 8 is 12"
  evalNumbers(12,4,"multiply") //"Product of 12 and 4 is 48"
  evalNumbers(28,7,"divide") //"Division of 28 and 7 is 4"
  evalNumbers(22,3,"modulus") //"Modulus of 22 and 3 is 1"
  evalNumbers(31,3,"square") //"square is an invalid operation"  