let myCharacter = [
"https://playoverwatch.com/en-us/heroes/ana/" ,
"https://playoverwatch.com/en-us/heroes/ashe/" ,
"https://playoverwatch.com/en-us/heroes/baptiste/" ,
"https://playoverwatch.com/en-us/heroes/bastion/",
"https://playoverwatch.com/en-us/heroes/brigitte/" ,
"https://playoverwatch.com/en-us/heroes/doomfist/" ,
"https://playoverwatch.com/en-us/heroes/dva/" ,
"https://playoverwatch.com/en-us/heroes/genji/" ,
"https://playoverwatch.com/en-us/heroes/hanzo/" ,
"https://playoverwatch.com/en-us/heroes/junkrat/" ,
"https://playoverwatch.com/en-us/heroes/lucio/" ,
"https://playoverwatch.com/en-us/heroes/mccree/" ,
"https://playoverwatch.com/en-us/heroes/mei/" ,
"https://playoverwatch.com/en-us/heroes/mercy/" ,
"https://playoverwatch.com/en-us/heroes/moira/" ,
"https://playoverwatch.com/en-us/heroes/orisa/" ,
"https://playoverwatch.com/en-us/heroes/pharah/" ,
"https://playoverwatch.com/en-us/heroes/reaper/" ,
"https://playoverwatch.com/en-us/heroes/reinhardt/ " ,
"https://playoverwatch.com/en-us/heroes/roadhog/" ,
"https://playoverwatch.com/en-us/heroes/soldier-76/" ,
"https://playoverwatch.com/en-us/heroes/sombra/" ,
"https://playoverwatch.com/en-us/heroes/symmetra/" ,
"https://playoverwatch.com/en-us/heroes/torbjorn/" ,
"https://playoverwatch.com/en-us/heroes/tracer/" ,
"https://playoverwatch.com/en-us/heroes/widowmaker/" , 
"https://playoverwatch.com/en-us/heroes/winston/" ,
"https://playoverwatch.com/en-us/heroes/wrecking-ball/" ,
"https://playoverwatch.com/en-us/heroes/zenyatta/",
"https://playoverwatch.com/en-us/heroes/sigma/",
"https://playoverwatch.com/en-us/heroes/echo/" 
];

let bgArr = ['backgroundhav.png', 'backgroundhor.jpg', 'background66.jpg', 
'backgroundanu.jpg', 'backgroundbli.jpg', 'backgrounddor.jpg', 'backgroundeic.png', 
'backgroundgib.jpg', 'backgroundhan.jpg', 'backgroundjun.jpg', 'backgroundkin.jpg', 
'backgroundnum.jpg', 'backgroundpar.jpg', 'backgroundria.jpg', 'backgroundvol.jpg']

let tank = ['.dva', '.orisa', '.reinhardt', '.roadhog', '.winston', '.wreckingball', '.zarya', '.sigma' ]
let healer = ['.ana', '.baptiste', '.moira', '.mercy', '.lucio', '.zenyatta', '.brigitte']
let dps = ['.mccree', '.mei', '.junkrat', '.soldier-76', '.ashe', '.bastion', '.doomfist', '.echo', '.genji', '.hanzo', '.tracer', '.sombra', '.symmetra', '.torbjorn', '.widowmaker', '.pharah', '.reaper']

const roleFilter = (arr, arr2) => {
    let newArr = arr.concat(arr2);
    for(let i = 0; i < newArr.length; i++) {
        document.querySelector(newArr[i]).className += ' unavailable'
    }
}

const newChar = () => {
    return myCharacter[Math.floor(Math.random() * myCharacter.length)];
};

const getChar = () => {
    window.location.href = newChar(myCharacter);
}

const getCharLock = (arr) => {
    let click = document.querySelector(arr[Math.floor(Math.random() * arr.length)])
    click.getElementsByTagName('a')[0].click()
}

const slideMenu = () => {
    let menu = document.querySelector('.slide').style
    if(menu.visibility === 'hidden'){
        menu.visibility = 'visible';
    } else {
        menu.visibility = 'hidden'
    }

}

const randomBgImage = (arr) => {
    let randNum = Math.floor(Math.random() * arr.length)
    document.querySelector('.container').style.backgroundImage = `url('./Main/char-backgrounds/${arr[randNum]}')`
}