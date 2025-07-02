// Question # 01 : Maximum and minimum of an array using minimum number of comparisons:
// Statement : Given an array of size N. The task is to find the maximum and the minimum 
// element of the array using the minimum number of comparisons.

// Examples:

// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//         Maximum element is: 9

// Input: arr[] = {22, 14, 8, 17, 35, 3}
// Output:  Minimum element is: 3
//          Maximum element is: 35

function setMin(A){
    let min = Infinity;
    for(let i=0; i<A.length; i++){
        if(A[i]<min){
            min = A[i]
        }
    }
    return min;
}
function setMax(A){
    let max = -Infinity;
    for(let i=0; i<A.length; i++){
        if(A[i]>max){
            max = A[i]
        }
    }
    return max;
}
function  main(){
    const A = [1,2,3,4,5,6,7];
    console.log("The minimum value in array is ", setMin(A))
    console.log("The maximum value in array is ", setMax(A));
}
main();