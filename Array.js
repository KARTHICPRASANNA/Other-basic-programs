const array = [
	[
		{
			name: 'karpagam',
			country: 'india',
		},
		{
			name: 'abi',
			country: 'india',
		},
		{
			name: 'anitha',
			country: 'india',
		},
		{
			name: 'kavya',
			country: 'india',
		}
	],
	[
		{
			name: 'arun',
			country: 'india',
		},
		{
			name: 'abinaya',
			country: 'india',
		},
		{
			name: 'kavya',
			country: 'india',
		},
		{
			name: 'anitha',
			country: 'india',
		}
	],
	[
		{
			name: 'anitha',
			country: 'india',
		},
		{
			name: 'aishu',
			country: 'india',
        }
]]

const data=array.flat();

const details=data.map((ele)=>ele.name);
console.log(details);

const getfilter=array.filter((array)=>array.length>=2);
const getsome=array.some((ele)=>ele[2]);
const total=array.reduce((a,b)=>a[getfilter]===b[getsome]);
const findCommonElement=array.map((ele)=>ele[total]);
