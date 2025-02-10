let s = 'JavaScript';

let u = s.toUpperCase();
let l = s.toLowerCase();

console.log(u);
console.log(l);
let s2='    Java is a language   ';
console.log(s2.trim());


let str='I am a human';
let ind=str.indexOf('am');
console.log(ind);
let r=str.replace('human','animal');
console.log(r);
console.log(str.charAt(5));

let str1 = "Rid";
let str2 = new String("Rid");
console.log(str1.localeCompare(str2));
console.log(str.slice(0,2));
console.log(str.substr(4,2)); // 2 characters from index 4
console.log(str.substring(3,5));