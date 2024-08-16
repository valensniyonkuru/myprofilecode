
// Deffine object
// let personal={
// name: 'valens',
// age:32
// }
// personal.name='join';
// console.log(personal.age);
/* -------------------------------------*/
//Array
// let selectedColor= ['red','blue','green'];
// selectedColor[3]='black'
// console.log(selectedColor);
/*-----------------------------------------*/
// function great(fistName,lastName){
//     console.log('hello' ,fistName ,lastName);
// }
// great('Niyonkuru','Valens');
// function square(number){
//  let num= number*number;
//  console.log('square is',num );
// }
// square(9)
// function square(number){
//     return number*number;
// }
// console.log(square(5));
/*---------------------------------------------------------*/
 /* write program if person is over or equal 18 year old is allowed to vote atherwise not allowed to vote*/
  
//  let age = 17;
//  let person= age>=18? 'allowed to vote':' not allowed to vote';
//  console.log(person);
/*write program if student has over or equal three attendence in class and school fees clearlence or atleast ane of both criteria he/she is allowed to seat for final exam*/

// let allAttendence = false ;
// let schoolFees=false;
// let allowed= allAttendence || schoolFees;
// console.log('allowed:',allowed);
// let notAllowed =! allowed;
// console.log('Student Allowed is ',allowed);
 
/*swap exersices*/

// let a= 'water';
// let b='juice';
// let swap= a;
// a=b;
// b=swap;
// console.log(a);
// console.log(b);
  
// let hour=10;

// if(hour>=6 && hour<12){
//     console.log('good morning');
// }
// else if( hour>=12 && hour<=18){
// console.log('good afternoon');
// }
// else{
//     console.log('good evening');
// }

// let role='default';
// switch(role){
//     case 'teacher':
//         console.log('techer user');
//     break;

//     case'hod':
//     console.log('HOD user');
//     break;
    
//     default:
//         console.log('students');
// }

// for( let i=10; i>=1; i--){
//     if(i%2 !==0) console.log(i);
// }
//  let i=0
//  while(i<=9){
//     if(i%2!==0) console.log(i);
//     i++;
//  }
/*for in*/
// let person ={
//     name:'niyonkuru valens',
//     age:20
// };
// for(let key in person)
//     console.log(person[key])
/*for of*/
// let color=[ 'red','blue','green'];
// for(let val of color)
//     console.log(color);

// let i =0;
// while(i<=10){
//    //if(i===5) break;
//    if(i%2===0){
//     i++;
//     continue; 
//    }
//     console.log(i);
//     i++;
// }

/* write function that takes two numbers and return the maxmum of the two*/

// function maxmum( firstNumber,secondNumber){
//      return (firstNumber>secondNumber) ? firstNumber:secondNumber; 

//     }
// console.log("Maxmum Number is",maxmum(152,1));
/*find if picture islandscap or not*/

// function isLandScap(width,heigt){
//    return(width>heigt) ;  
  
// }
// console.log('isLandScap',isLandScap(510,54)); 

/*fizzbuss question 
if number divisible by 3=>fizz,
 is divisible by 5 =>buss ,
  if divisible by 3 and 5=>fissbuss,
   if not divisible with 3 or 5 you get 'input entered'
     and if not number " not number"
     */
   
// function fizzbuss(input){
// if(typeof input!=='number')
//     return 'NaN';
// if (input%3 === 0 && input% 5===0)
//     return 'fissbuss';
// if(input%3 === 0)
//     return 'fiss';
// if(input%5 === 0)
//     return 'buss';
// if (input%3 !== 0 && input% 5!==0)
//     return input;

// }
// console.log(fizzbuss(25));

