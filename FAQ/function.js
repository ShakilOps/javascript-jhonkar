function evenify(num){
    if(num%2==0){
        console.log(num, ' : is even number')
    }
    else{
        console.log(num, ' ; is odd number')
    }
}
function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        evenify(num)
    }
}


nums=[45,67,32,12,88];
evenify_all(nums)

frndz_age=[56,67,78,89,90,21]
evenify_all(frndz_age)