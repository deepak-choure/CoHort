//Array defination in ts 
//like java 


function maxValue(arr: number[]){
    let max = 0;
    for(let i =0;i<arr.length-1;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
}

