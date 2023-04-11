function add(n1:number, n2:number, showResult:boolean, phrase:string){
    //if(typeof n1 !== 'number' || typeof n2!=='number'){
    //    throw new Error('incorrect input!');
    //}
}

const result = n1 + n2;
if(showResult){
    console.log(phrase+result);
}else{
    return result;
}

let number: number;
number1=5;
const number2=2.8;
const printResult=true;
let resultPhrase='Result is: ';

add(number1, number2, printResult, resultPhrase);

enum role{ADMIN = 'ADMIN', READ_ONLY=100, AUTHOR='AUTHOR'}

const person ={
    name: 'johan',
    age: 21,
    hobbies: ['Calistenic', 'prorgraming'],
    role: Role.ADMIN
};

let favoriteActivites: any[];
favoriteActivites = ['calistenic'];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

if(person.role = Role.AUTHOR){
    console.log('is author');
}
