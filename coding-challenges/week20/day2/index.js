var majorityElement = nums => {
    let major = nums[0], count = 1, maxc = nums.length / 2;
    for(var i = 1; i < nums.length; i++){
        if(count === 0){
            count++;
            major = nums[i];
            if (count > maxc) 
                return major
        }else if(major == nums[i]){
            count++;
            if (count > maxc) 
                return major
        }else count--;
        
    }
    return major;
};

console.log(majorityElement([3,2,3]));