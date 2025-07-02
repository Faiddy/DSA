function secondMaxValue(arr){
    max1 = [];
    max2 = [];
    if(arr[0]>arr[1]){
        max1 = arr[0];
        max2 = arr[1];
    }else{
        max2 = arr[0];
        max1 = arr[1];
    }
    for(let i=2 ; i<=arr.length; i++){
        if(arr[i]>max1){
            max2 = max1;
            max1 = arr[i];
        }else if(arr[i]>max2){
            max2 = arr[i]
        }
    }
}
let arr = [1,2,3,4]
secondMaxValue(arr);
console.log("First Max value is ", max1);
console.log("second Max value is ", max2);