// Problem 1 :
// Given an array find the unique items in the array
let arr = ["vamshi","krishna","gopi","rahul","krishna","vamshi krishna"];
let unique_list={};
for(let i=0;i<=arr.length-1;i++){
  unique_list[arr[i]]=1;
}
console.log(unique_list);