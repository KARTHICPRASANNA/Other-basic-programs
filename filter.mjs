const studentMarks=[
    {
      Tamil:80,
      English:60,
      Maths:50 },
     { 
      Tamil:65,
      English:55,
      Maths:45 },
];
const marks=studentMarks.map((ele)=>Object.values(ele));
const marksArray=marks.flat()
const filtered=marksArray.filter(mark=>mark>50);
const min=studentMarks.map((ele)=>Math.min(...Object.values(ele)));
const max=studentMarks.map((ele)=>Math.max(...Object.values(ele)));

function main() {
  console.log("object.values:"+ marks);
  console.log("flat:"+ marksArray);
  console.log("filter:"+ filtered);
  console.log("min:"+ min);
  console.log("max:"+ max);
}
main();