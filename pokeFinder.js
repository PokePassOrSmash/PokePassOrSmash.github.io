pokedexLength = 898

window.onload = function(){

    for (var i = 1; i <= pokedexLength; i++){
        preloadImage("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + makeThree(inc) + ".png")
    }

};

inc = 1
smash = []
lastSmash = false
function incUp(wasSmash){
    lastSmash = wasSmash
    if(wasSmash){
        smash.push(inc)
    }

    inc++
    reloadPokemon()
}

function incDown(){
    if(lastSmash){
        smash.pop()
    }

    inc--
    reloadPokemon()
}

function reloadPokemon(){
    //document.getElementById('outLink').innerHTML = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + makeThree(inc) + ".png"
    document.getElementById('out').innerHTML = smash
    document.getElementById('immage').src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + makeThree(inc) + ".png"
    document.getElementById('pokedex').action = "https://www.pokemon.com/us/pokedex/" + inc
}

function makeThree(number){
    returnString = String(number)
    while (returnString.length < 3){
        returnString = 0 + returnString
    }
    return returnString
}




function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}
