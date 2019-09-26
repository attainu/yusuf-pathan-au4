function palindrome(name){
  
  var letters = name.split(""); 

  //revering the array(letters)
  var rev = letters.reverse();

  //converting array to string
  var new_rev ='';
  for(var i=0;i<rev.length;i++){
    new_rev = new_rev.concat(rev[i]);
  }
  
  //comparing new string with the original string
  if(new_rev === (name)){
    return name+" is a palindrome word";
  }
  else{
    return name+" is not a palindrome word";
  }
}
palindrome("mom");