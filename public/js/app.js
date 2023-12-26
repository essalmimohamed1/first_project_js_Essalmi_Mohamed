let choose = prompt("signing up, logging in, or changing the password")
    if (choose == "signing up") {
        // * Name
    let names = prompt("your name : ")
    function nameff(name) {
        const name1 = name.split(" ");
        for (let i = 0; i < name1.length; i++) {
            name1[i] = name1[i][0].toUpperCase() + name1[i].substr(1).toLowerCase();
        }
        name1.join(" ");
        let name2 = name1.toString().replace(/,/g, ' ');
        console.log(name2);
    }
    if(names.length < 5){
        while (names.length < 5) {
            let name = prompt("inter your name corect : ") 
            nameff(names)
        }
        }
    else{
        nameff(names)
    }
    // * email
    let email = prompt("your email : ") 
    email = email.trim().toLowerCase().replace(/ /g, '')
    if(email.length < 10){
        let email = prompt("your email corect : ") 
            console.log(email);
        }
        else{
            console.log(email);
        }
    // * age
    let age = prompt("your age : ");
    if(age.length > 2){
        let age = prompt("your age corect : ") 
        age = Number(age.trim().replace(/ /g, ''))
        console.log(age);
        }
        else{
            age = Number(age.trim().replace(/ /g, ''))
            console.log(age);
        }
    // *  Password
    let Password = prompt("your password : ");
    if(Password.length < 7){
            let Password = prompt("your age corect : ") 
            Password = Password.trim().replace(/ /g, '')
            console.log(Password);
            }
            else{
                Password = Password.trim().replace(/ /g, '')
                console.log(Password);
            }
    let Passwordcheck = prompt("check your password : ");
    if(Password == Passwordcheck){
        Password = Password
    }
    else{

    }
    } if(choose == "logging in") {
        let logain = prompt("inter your email")
        if (email = logain) {
            console.log("welcome");
        }
        else{
            alert("i dont have this email")
        }
        let password = prompt("inter your pasword")
        if (password = Password) {
            console.log("welcome");
        }
        else{
            alert("i dont have this pasword")
        }
    }if(choose == "changing the password") {
        let logain = prompt("inter your email")
        if (email = logain) {
            let newpasword = prompt("inter your new pasword")
            Password = newpasword
        }
        else{
            alert("i dont have this email")
        }
    }



