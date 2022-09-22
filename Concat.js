const { map,reduce,filter }=require("@laufire/utils/collection");
const monday = [
    {
        'name'     : 'Write a tutorial',
        'duration' : 180
    },
    {
        'name'     : 'Some web development',
        'duration' : 120
    }
  ];
  
  const tuesday = [
    {
        'name'     : 'Keep writing that tutorial',
        'duration' : 240
    },
    {
        'name'     : 'Some more web development',
        'duration' : 180
    },
    {
      'name'     : 'A whole lot of nothing',
      'duration'  : 240
  }
  ];

const tasks = [...monday, ...tuesday];
console.log(tasks);
const final=map(tasks,ele=>(ele.duration)/=60);
console.log(tasks);
console.log(filter(tasks,((ele)=>ele.duration>2)));

  

  
  
