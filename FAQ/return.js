function evenify(num){
    if(num%2==0){
        rslt = num;
    }
    else{
        rslt = num*2
    }
    return rslt;
}
function evenify_all(nums){
    var even_arr=[]
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var rslt = evenify(num)
        even_arr.push(rslt)
    }
    return even_arr;
}


nums=[45,67,32,12,88];
var even_nums = evenify_all(nums)
console.log(even_nums)