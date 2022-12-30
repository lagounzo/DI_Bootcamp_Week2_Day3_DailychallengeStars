
// Exercice 1

// 1.Write a JavaScript program that recreates the pattern below.
// 3.Do this Daily Challenge by youself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

let starsNumber = 6
let stars = " "
for ( let i = 0 ; i < starsNumber ;  i++){
    stars = stars + " * "
    console.log(stars);
    
}
// 2.Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).


let starsNumber1 = 6
let stars1 = " "
for ( let i = 0 ; i < starsNumber1 ;  i++){
    stars1 = stars1 + " * " 
    for (  y= 0 ; y < 1 ; y++){

        console.log(stars1);
    }
    
}
// 2.Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).


// // for ( let y = 0 ; y <= starsNumber ; y++){
//     let starsNumber2 = "" 
//     for ( let i = 0 ; i <= starsNumber1; i++){
//         let newNumberOfStars = i + 1
//         let newStars = ""

//     for ( let y = 0 ; y < newNumberOfStars ; y++){
//     newStars = newStars + " * "
   
//     }
//     console.log(newStars)
// }