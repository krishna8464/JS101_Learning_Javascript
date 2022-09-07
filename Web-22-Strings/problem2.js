// Problem 2 : Given an array of string count the overall total number of characters
let arr = ["vamshi","krishna","jagathguru",'vishnu']
totel_count = 0;
for(let i = 0;i<=arr.length-1;i++){
  totel_count = totel_count + arr[i].length;
}
console.log(totel_count);