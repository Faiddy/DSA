// //  Q # 01 :  Print 0 to 10

// for(let i = 0; i<=10; i++){
//     console.log(i)
// } 

// //-----------------------------------------------------------------------------------

// //  Q # 02 :  Print this pattern
// // *
// // **
// // ***
// // ****
// // *****

// for(let i=1; i<=5;i++){
//     let x = '';
//     for(let j=1; j<=i; j++){
//         x = x + '*';
//     }
//     console.log(x);
// }

// //-----------------------------------------------------------------------------------

// //  Q # 03 :  Print this pattern
// // 1
// // 12
// // 123
// // 1234
// // 12345

// for(let i = 1; i<=5; i++){
//     let str = '';
//     for(let j = 1; j<=i; j++){
//         str += j;
//     }
//     console.log(str);
// }

// //-----------------------------------------------------------------------------------

// //  Q # 04 :  Print this pattern
// *****
// *****
// *****
// *****
// *****

// for(let i = 1; i<=5; i++){
//     let stars = '';
//     for(let j=1;j<=5;j++){
//         stars += '*';
//     }
//     console.log(stars);
// }

// //-----------------------------------------------------------------------------------

// //  Q # 05 :  Print this pattern
// *****
// ****
// ***
// **
// *

// for(let i = 1; i<=5; i++){
//     let str = '';
//     for(let j=1; j<=5-i+1; j++){
//         str += '*';
//     }
//     console.log(str)
// }

// //-----------------------------------------------------------------------------------

// //  Q # 06 :  Print this pattern
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// let n = 5;
// for (let i = 0; i < 2 * n - 1; i++) {
//     let totalColsInRow = i < n ? i + 1 : 2 * n - i - 1;
//     let str = '';
//     for (let j = 0; j < totalColsInRow; j++) {
//         str += '*';
//     }
//     console.log(str);
// }

// //-----------------------------------------------------------------------------------

// //  Q # 07 :  Print this pattern
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

// let n = 5;
// for(let i=0; i<n*2-1; i++){
//     let noOfColInRows = i<n ? i+1 : 2*n-i-1;
//     let noOfSpaces = n - noOfColInRows;
//     let str = " ";
//     for(let s=0; s<noOfSpaces; s++){
//         str += " ";
        
//     } 
//     for(let j=0; j<noOfColInRows; j++){
//         str += "* ";
//     }
//     console.log(str);
// }

// //-----------------------------------------------------------------------------------

// //  Q # 08 :  Print this pattern
//         1
//       2 1 2 
//     3 2 1 2 3 
//   4 3 2 1 2 3 4
// 5 4 3 2 1 2 3 4 5

// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let str = "";

//     // Add spaces
//     for (let s = 0; s < n - i; s++) {
//         str += "  "; // double space for better alignment
//     }

//     // Print descending numbers from i to 1
//     for (let j = i; j >= 1; j--) {
//         str += j + " ";
//     }

//     // Print ascending numbers from 2 to i
//     for (let j = 2; j <= i; j++) {
//         str += j + " ";
//     }

//     console.log(str);
// }

// //-----------------------------------------------------------------------------------

// //  Q # 09 :  Print this pattern
//         1
//       2 1 2 
//     3 2 1 2 3 
//   4 3 2 1 2 3 4
//     3 2 1 2 3 
//       2 1 2
//         1

// let n = 4;
// for (let i = 1; i < 2 * n; i++) {
//     let totalColsInRow = i <= n ? i : 2 * n - i;
//     let spaces = n - totalColsInRow;

//     let str = "";

//     // Spaces
//     for (let s = 0; s < spaces; s++) {
//         str += "  "; // double space for better alignment
//     }

//     // Descending numbers
//     for (let j = totalColsInRow; j >= 1; j--) {
//         str += j + " ";
//     }

//     // Ascending numbers
//     for (let j = 2; j <= totalColsInRow; j++) {
//         str += j + " ";
//     }

//     console.log(str.trimEnd());
// }

// //-----------------------------------------------------------------------------------

// //  Q # 10 :  Print this pattern

// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4

// let n= 4;
// let size = 2*n-1;
// for(let i=0; i<size;i++){
//     let row = '';
//     for(let j=0; j<size; j++){
//         let min = Math.min(i,j,size-1-i,size-1-j);
//         row += (n-min) + " ";
//     }
//     console.log(row);
// }

// //-----------------------------------------------------------------------------------

// //  Q # 11 :  Print this pattern
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// let n=5;
// for(let i=0;i<n;i++){
//     let str = '';
//     for(let s=0; s<n-i;s++){
//         str += '  ';
//     }
//     for(let j = 0; j<=i; j++){
//         str += '* ';
//     }
//     console.log(str);
// }

// //-----------------------------------------------------------------------------------

// //  Q # 12 :  Print this pattern
// * * * * *        
// * * * *     
// * * *
// * *
// *

// let n=5;
// for(let i=n;i>=1;i--){
//     let str = '';
//     for(let j = 0; j<=i; j++){
//         str += '* ';
//     }
//     console.log(str);
// }

// //-----------------------------------------------------------------------------------

// //  Q # 13 :  Print this pattern
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
let n = 5;
for (let i = 0; i < n; i++) {
    let str = "";

    // Print spaces
    for (let s = 0; s < n - i - 1; s++) {
        str += " ";
    }

    // Print stars with space
    for (let j = 0; j <= i; j++) {
        str += "* ";
    }

    console.log(str);
}
