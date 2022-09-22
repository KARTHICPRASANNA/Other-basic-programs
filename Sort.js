const studentData=[
    {
      student:'ram',
      total:300,
    },
    {
      student:'rahul',
      total:400,
    },
    {
      student:'manoj',
      total:420,
    },
    {
      student:'prince',
      total:420,
    },
]

const studentRecords=(studentData)=> {
return ({...studentData,
});
}

const sortedRecords=studentData.sort((a,b)=>b.total-a.total);

const getRank=()=>studentData.map((studentData,index,array)=> ({
  ...studentData,
  rank:
array.filter((item)=>item.total>studentData.total).length+1}));
console.table(getRank());
