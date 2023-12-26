let choose = prompt("signing up, logging in, or changing the password")
    if (choose == "signing up") {
        * Name
    let names = prompt("your name : ")
    function formatName(name) {
        let name1 = name.split(" ");
        for (let i = 0; i < name1.length; i++) {
            name1[i] = name1[i][0].toUpperCase() + name1[i].substr(1).toLowerCase();
        }
        name1.join(" ");
        let name2 = name1.toString().replace(/,/g, ' ');
        console.log(name2);
    }
    while (names.length < 5) {
        names = prompt("Enter your name correctly (at least 5 characters): ");
    }
    let formattedName = formatName(names);
    * email
    let email = prompt("your email : ").trim().toLowerCase().replace(/ /g, '') 
    while (email.length < 10 || email.indexOf('@') === -1 || email.split('@').length - 1 !== 1) {
        email = prompt("Enter your email correctly (at least 10 characters): ").trim().toLowerCase().replace(/ /g, '');
    }
    console.log(email);
    // // * age
    // let age = prompt("your age : ");
    // if(age.length > 2){
    //     let age = prompt("your age corect : ") 
    //     age = Number(age.trim().replace(/ /g, ''))
    //     console.log(age);
    //     }
    //     else{
    //         age = Number(age.trim().replace(/ /g, ''))
    //         console.log(age);
    //     }
    // // *  Password
    // let Password = prompt("your password : ");
    // if(Password.length < 7){
    //         let Password = prompt("your age corect : ") 
    //         Password = Password.trim().replace(/ /g, '')
    //         console.log(Password);
    //         }
    //         else{
    //             Password = Password.trim().replace(/ /g, '')
    //             console.log(Password);
    //         }
    // let Passwordcheck = prompt("check your password : ");
    // if(Password == Passwordcheck){
    //     Password = Password
    // }
    // else{

    // }
    // let choose = prompt("signing up, logging in, or changing the password")
    // if(choose == "logging in") {
    //     let logain = prompt("inter your email")
    //     if (email = logain) {
    //     }
    //     else{
    //         alert("i dont have this email")
    //     }
    //     let password = prompt("inter your pasword")
    //     if (password = Password) {
            
    //     }
    //     else{
    //         alert("i dont have this pasword")
    //     }
    // }if(choose == "changing the password") {
    //     let logain = prompt("inter your email")
    //     if (email = logain) {
    //         let newpasword = prompt("inter your new pasword")
    //         Password = newpasword
    //     }
    //     else{
    //         alert("i dont have this email")
    //     }
    // }
}
// let price = 1000
// alert(`you have a ${price}`)
// let choose = prompt(`you have a ${price} what do you do
//     Withdraw Money
//     deposit Money
//     Take a Loan
//     invest
//     history`)
// if (choose == "withdraw money") {
//     let tire = Number(prompt("chhal bari tiri"))
//     if (tire <= 1000 ) {
//         price = price - tire
//     }
//     else{
//         alert("your price is 1000")
//     }
// }
// if (choose == "deposit money") {
//     let post = Number(prompt("chhal bari tiri"))
//     if (post <= 1000 ) {
//         price = price + post
//     }
//     else{
//         alert("your max post is 1000")
//     }
// }
// if (choose == "take a loan") {
//     let loan = price * 0.2;
//     let price = loan + price
    
// }
// if (choose == "invest") {
    
// }
// if (choose == "history") {
    

// }


