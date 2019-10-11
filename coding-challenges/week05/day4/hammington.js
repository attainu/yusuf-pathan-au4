function hammington(string1,string2){
    if(string1.length !== string2.length){
        console.log('please enter values of same number of characters');
        return
    }
    else{
        if(string1 === string2){
            console.log('both are same values');
            return;
        }
        else{
            var count =  0;
            for(var i = 0; i < string1.length; i++){
                if(string1.charAt(i) !== string2.charAt(i)){
                    count++;
                }
            }
            console.log(count);
        }

    }
}

hammington('yusuf','kasif');