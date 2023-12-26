// * Name
// let names = prompt("your name : ")
// function nameff(name) {
//     const name1 = name.split(" ");
//     for (let i = 0; i < name1.length; i++) {
//         name1[i] = name1[i][0].toUpperCase() + name1[i].substr(1).toLowerCase();
//     }
//     name1.join(" ");
//     let name2 = name1.toString().replace(/,/g, ' ');
//     console.log(name2);
// }
// if(names.length < 5){
//     let name = prompt("inter your name : ")
//     nameff(name)
// }
// else{
//     nameff(names)
// }
// * email
// let email = prompt("your email : ") 
// email = email.trim().toLowerCase()
// if(email.length < 10){
//     let email = prompt("your email : ") 
//         console.log(email);
//     }
//     else{
//         console.log(email);
//     }
// * age
let age = prompt("your age : "); 
age = Number(age.trim())
alert(age)

