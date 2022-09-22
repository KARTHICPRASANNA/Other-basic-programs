const {map,reduce,filter}=require('@laufire/utils/collection');
const rates = {
    Carrot: 10,
    Apple: 200,
    Guava: 50,
  };

  map(rates,ele=>console.log(ele));
  reduce(rates,(a,b)=>a+b,0);
console.log(reduce(rates,(a,b)=>a+b,0));
console.log(filter(rates,ele=>ele>50));

const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
console.log(filter(words,ele=>ele.length<8));
