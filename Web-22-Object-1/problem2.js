// Problem 2 :
// Given a string print, the number of times each character appears
let str = "masai";
let obj = {};
for(let i = 0;i<str.length;i++){
  char = str[i]
  if(obj[char]==true){
    obj[str[i]]=obj[char]+1;
  }else{
    obj[char]=1;
    
  }
}
console.log(obj)



