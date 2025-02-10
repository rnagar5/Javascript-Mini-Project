function add(a,b){
    return a+b;
}
let subtract = function (a,b){//functN expression
    return a-b;
}
let multiply = (a,b)=>{ //arrow function
    return a*b;
}
function divide(a,b){
    if(b==0) return "ERRRORR";
    else return a/b;

}
console.log("ADDITION:",add(10, 5));
console.log("Subtraction",subtract(10, 5));
console.log("Multiplication:",multiply(10, 5));
console.log("Division :",divide(10, 5));
console.log("Division :",divide(10,0));



let obj={ //method
    name:"Rid",
    age:22,
    info:function(){
        return "Name: "+this.name+" Age:"+this.age;
    }
};
console.log(obj.info());

let a=[1,2,3,"Four","Five",6];
console.log(a);

let arr=new Array(10,"Twenty",30);
console.log(arr);
console.log(arr[2]);
arr[1]=50;
console.log(arr);
console.log(arr.length);
a.push("end");
a.unshift("New Array:");

console.log(a);

a.pop();
a.shift();
a.splice(2,1,"new");//start,deletecount,new value
console.log(a);

arr.forEach(function(x){
    console.log(x);
})

let con=a.concat(arr);
console.log("Concat:",con);

let str=a.toString();
console.log(str);

const res=a.slice(0,2); //2 not inclusive
console.log(a);

let ar=[1,2,3,4,5];
let neww=ar.map((val)=>val*2);
console.log(neww);

let new2=ar.filter((val)=> val>3);
console.log(new2);

let sum=0;
let total=ar.reduce((acc,curr)=>acc+curr,sum);
console.log(total);

let result=["pink" , "black" ,"white"];
let ans=result.values();
for(let val of ans){
console.log(val);
}

const ab = [1, 2, 3, 4, 5];
let r= ab.some((val) => val > 4);
console.log(r);
let f=ab.find((num)=>num>4);
console.log(f);
let ind=ab.findIndex((num)=>num<2);
console.log(ind);
let fil=ab.fill(6,1,2);
console.log(fil);
let sor=ab.sort();
console.log(sor);
let incc=ab.includes(5);
console.log(incc);

console.log(ab.indexOf(6));

const numberss = [1, 2, 3];//spread- expand elements of arr/obj
const newNumbers = [...numberss, 4, 5];
console.log(newNumbers);

const human = {
    name: "Riddhi",    //rest -multiple arg into an arr
    age: 22,
    city: "Ratlam",
    country: "India"
  };
  
  const { name, ...details } = human;
  
  console.log(name);    
  console.log(details); 
  
