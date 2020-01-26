var search = function(nums, target) {
  var first = 0;
  var last = nums.length - 1;
  var index = Math.floor((last - first) / 2) + first;

  if (target > nums[nums.length - 1]) {
   
    index = nums.length;
  } else {
    
    while (first < last) {
      
      var value = nums[index];

      if (value === target) {
        
        result = index;
        break;
      } else if (target < value) {
        
        last = index;
      } else {
        
        first = index + 1;
      }

      index = Math.floor((last - first) / 2) + first;
    }
  }

  return index;
};

var result = search([1,3,5,6], 2);
console.log(result);