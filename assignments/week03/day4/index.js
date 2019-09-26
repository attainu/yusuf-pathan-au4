function search(ar=[],value){

    var count = 0;
    
      //for loop for finding the value inside the array
      for(i = 0; i < ar.length; i++){
        if(ar[i] === value){
          return value+' is there in array at position '+i;
        }
        count += 1;
      }
      
      //if value not found in array
      if(count > 0){
        return -1;
      }
    
      //or we can directly use built-in indexOf function to find the value in array 
      // var str = ar.indexOf(value);
      // console.log(str);
    }
    search(ar=['yusuf','pathan','city'],'city');