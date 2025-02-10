const user={
    name: "Riddhi",
    age:22,
    email:"riddhi@gmail.com",
    address:{
    city:"Indore",
    country:"India"
    },
    start : function(){
        console.log('Starting the work');
    }
};
user.start();
user.stop= function(){
    console.log('stop work');  
}
user.stop();
user.phone="4578899090";
user.name ="Riddhi Nagar";
delete user.email;
console.log("user info:",user);
console.log("username:",user.name);
console.log("user address:",user.address.city,",",user.address.country);

const obj = new Object();
obj.name="Siddhi";
obj.age="20";
obj.education="BE";
console.log(obj);
console.log(obj.education);
console.log(obj["age"]);
for(let key in obj){
    console.log(key+":"+obj[key]);
}
console.log(user.hasOwnProperty("age"));
console.log("education" in obj);

let userr={...user,...obj};
console.log(userr);
console.log(Object.keys(obj).length);

const {name:fullname ,age: currage}=user; //obj de
console.log(fullname);
console.log(currage);

const {name,month='aug'}=user;
console.log(month);

const  {  address: { city } }  = user;
console.log(city);

const [first, ...rest] = [10, 20, 30, 40]; //array de
console.log(rest);

const numbers = [10, 20, 30];

const [fi, second] = numbers;
console.log(fi); 
console.log(second); 

const [fir, ,sec] = numbers;
console.log(fir); 
console.log(sec); 

function display({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  display({ name: "Somi", age: 22 }); 
  