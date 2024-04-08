//   +++++++++++++++++++++++   Scope   ++++++++++++++++++++++++++
{} // It is known as scope

if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); // let stays within the scope
// console.log(b); // const says within the scope
console.log(c); // var doesnt stay in the scope

function one() {
    const username = "kartikay"

    function two(){
        const website = "Kartikay.com"
        console.log(username) //username can be accesed as it inside one scope
    }
    // console.log(website) 
    //website cant be accessed its under two function scope
    two() // execution of two() function
}
one() // execution of one() function