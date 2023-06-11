console.log("Los números impares hasta el 50 son:")
for (let i = 0; i < 50; i++) {
    if(i%2!==0){
    console.log(i)
    }}

console.log("Estos son tus pokemones: ");
var pokemons =
    ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard',
        'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod',
        'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey',
        'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow',
        'fearow', 'ekans', 'arbok', 'pikachu', 'raichu',
        'sandshrew', 'sandslash', 'nidoran-f', 'nidorina', 'nidoqueen',
        'nidoran-m', 'nidorino', 'nidoking', 'clefairy', 'clefable',
        'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat',
        'golbat', 'oddish', 'gloom', 'vileplume', 'paras',
        'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio',
        'meowth', 'persian', 'psyduck', 'golduck', 'mankey',
        'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl',
        'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop',
        'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel',
        'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem',
        'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite',
        'magneton', 'farfetchd', 'doduo', 'dodrio', 'seel',
        'dewgong', 'grimer', 'muk', 'shellder', 'cloyster',
        'gastly', 'haunter', 'gengar', 'onix', 'drowzee',
        'hypno', 'krabby', 'kingler', 'voltorb']
let numeroPokemon = prompt("Por favor ingrese un número positivo: ");
if (!isNaN(numeroPokemon)) {
    for (let i = 1; i <= numeroPokemon; i++) {
        if (i % 5 === 0) {
            console.log(pokemons[i]);
        }
    }
} else {
    alert("Valor no valido, solo puedes ingresar números.");
}

console.log("Los números del arreglo son: ");
arregloEjercicio3=[4,"dos",8,"tres",5,9,1,"cero"] ;
for (let i = 0; i < arregloEjercicio3.length; i++) {
    if (typeof(arregloEjercicio3[i])==="number") {
        console.log(arregloEjercicio3[i])
    }
}