const product=(a,b)=>a*b;
console.log(product(3,6));

const fruit="apple";
const reversed=()=>fruit.split('').reverse().join('');
console.log(reversed());

const getNum=(num)=> num % 2 ===0 ? "Even" : "Odd" ;
console.log(getNum(6));

const division=(num)=> num % 3 ===0 ? "divisible by 3" : "not divisible by 3";
console.log(division(10));

const rates = {
    Carrot: 10,
    Apple: 200,
    Guava: 50,
  };

  const items=(rates)=>Object.keys(rates)
  console.log(items(rates));
