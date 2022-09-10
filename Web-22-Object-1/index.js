//To check a number is prime or not
//definion of prime number 
  // The number which is divisable by it self and one (or) The number which have only two factors is called a prime number
let num = 11;
let count = 0;
for(let i = 1;i<=num;i++){
  if(num%i===0){
    count++;
  }
}
if(count==2){
  console.log(num,"is prime")
}else{
  console.log(num,"is not prime");
}