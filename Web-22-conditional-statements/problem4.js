// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let reg_name = "vamshi@123";
let reg_pass = "849857";

let ent_name = "vamshi@123";
let ent_pass = "849857";

if(ent_name == reg_name){
  if(ent_pass == reg_pass){
    console.log("Login Successful");
  }else{
    console.log("Wrong Password");
  }
}else{
  console.log("Wrong Credencials")
}