function Battleground(username,weapon,level){
    // assigning username
    this.username = username;

    // if weapon not passed in argument
    if(weapon == undefined){
        this.weapon = 'gun';
    }
    else{
        this.weapon = weapon;
    }

    // if level not passed in argument
    if(level == undefined){
        this.level = 'easy';
    }
    else{
        this.level = level
    }

    // if weapon is not of following type
    if(this.weapon !== 'gun' && this.weapon !== 'knife' && this.weapon !== 'laser'){
        throw Error('please choose between gun, knife and laser');
    }

    // if level is not of following type
    if (this.level !== 'easy' && this.level !== 'medium' && this.level !== 'difficult'){
        throw Error('please choose level between easy medium and difficult');
    }

    console.log('present username, weapon and level are',username,this.weapon,this.level);
}

// if username wanna change weapon
Battleground.prototype.changeWeapon = function() {
    var select = prompt('What weapon you wanna upgrade to');
    if(select === '' ){
        console.log('By default your weapon has been selected gun');
    }
    else{
        if(select !== 'gun' && select !== 'knife' && select !== 'laser' && select !== ''){
            throw Error('please choose between gun, knife and laser');
        }
        this.weapon = select;
        console.log('Your weapon has been upgraded to',this.weapon);
    }
}

// if username wanna change level
Battleground.prototype.changeLevel = function() {
    var select = prompt('What level you wanna upgrade to');
    if(select === ''){
        console.log('By default your level has been selected easy');
    }
    else{
        if (select !== 'easy' && select !== 'medium' && select !== 'difficult' && select !== ''){
            throw Error('please choose level between easy medium and difficult');
        }
        this.level = select;
        console.log('Your level has been upgraded to',this.level);
    }
    
}

Battleground.prototype.attack = function() {
    console.log("Attacking the opponent with",this.weapon);
}

// invoking the main function and calling all prototypes
var game = new Battleground('yusuf');
game.changeWeapon();
game.changeLevel();
game.attack();
console.log('present username, weapon and level are',game.username,game.weapon,game.level);