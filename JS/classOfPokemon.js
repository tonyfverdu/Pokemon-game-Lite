//  2.-  POKEMONS
//  Array type of Pokemon with relative value.
const typePokemons = [ ['Bug', 2], ['Earth', 1], ['Electric', 4], ['Fight', 2], ['Fire', 3], ['Flying', 2], ['Ice', 2] ['Normal', 1],
['Plant', 2], ['Poison', 3], ['Psychic', 4], ['Rock', 2], ['Water', 2] ];

//  2.1.-  Data-Array of Objects-Pokemons:
const arrayGenerallOfPokemons = [ 
    {   
        imagePokemon    : '',
        idPokemon       : 1, 
        namePokemon     : 'Bulbasaur',
        acquisitioValue : 90, 
        level           : 0,
        type            : ['Plant', 'Poison'],
        weakness        : ['Fire', 'Psychic', 'Flying', 'Ice'],
        evolution       : ['Ivysaur', 'Venusaur']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 2, 
        namePokemon     : 'Ivysaur',
        acquisitioValue : 150, 
        level           : 1,
        type            : ['Plant', 'Poison'],
        weakness        : ['Fire', 'Psychic', 'Flying', 'Ice'],
        evolution       : ['Venusaur']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 3, 
        namePokemon     : 'Venusaur',
        acquisitioValue : 230, 
        level           : 2,
        type            : ['Plant', 'Poison'],
        weakness        : ['Fire', 'Psychic', 'Flying', 'Ice'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 4, 
        namePokemon     : 'Charmander',
        acquisitioValue : 167, 
        level           : 0,
        type            : ['Fire'],
        weakness        : ['Water', 'Earth', 'Rock'],
        evolution       : ['Charmeleon', 'Charizard']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 5, 
        namePokemon     : 'Charmeleon',
        acquisitioValue : 250, 
        level           : 1,
        type            : ['Fire'],
        weakness        : ['Water', 'Earth', 'Rock'],
        evolution       : ['Charizard']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 6, 
        namePokemon     : 'Charizard',
        acquisitioValue : 380, 
        level           : 0,
        type            : ['Fire'],
        weakness        : ['Water', 'Earth', 'Rock'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 7, 
        namePokemon     : 'Squirtle',
        acquisitioValue : 190, 
        level           : 0,
        type            : ['Water'],
        weakness        : ['Plant', 'Electric'],
        evolution       : ['Wartortle', 'Blastoise']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 8, 
        namePokemon     : 'Wartortle',
        acquisitioValue : 150, 
        level           : 1,
        type            : ['water'],
        weakness        : ['Plant', 'Electric'],
        evolution       : ['Blastoise']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 9, 
        namePokemon     : 'Blastoise',
        acquisitioValue : 250, 
        level           : 2,
        type            : ['water'],
        weakness        : ['Plant', 'Electric'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 10, 
        namePokemon     : 'Caterpie',
        acquisitioValue : 90, 
        level           : 0,
        type            : ['Bug'],
        weakness        : ['Fire', 'Flying', 'Rock'],
        evolution       : ['Metapod','Butterfree']
    },
    {   
        imagePokemon    : '>(8☉)@@@oo<>',
        idPokemon       : 11, 
        namePokemon     : 'Metapod', 
        acquisitioValue : 210, 
        level           : 1,
        type            : ['Bug'],
        weakness        : ['Fire', 'Flying', 'Rock'],
        evolution       : ['Butterfree']
    },
    {   
        imagePokemon    : '>(8☉)@@@oo<>',
        idPokemon       : 12, 
        namePokemon     : 'Butterfree', 
        acquisitioValue : 350, 
        level           : 0,
        type            : ['Bug'],
        weakness        : ['Fire', 'Flying', 'Rock'],
        evolution       : []
    },
    {   
        imagePokemon    : '<(:o)OOOooo>',
        idPokemon       : 13, 
        namePokemon     : 'Weedle',
        acquisitioValue : 140, 
        level           : 0,
        type            : ['Bug', 'Poison'],
        weakness        : ['Fire', 'Psychic', 'Flying','Rock'],
        evolution       : ['Kakuna', 'Beedrill'],
    },
    {   
        imagePokemon    : '',
        idPokemon       : 14, 
        namePokemon     : 'Kakuna',
        acquisitioValue : 260, 
        level           : 1,
        type            : ['Bug', 'Poison'],
        weakness        : ['Fire', 'Psychic', 'Flying','Rock'],
        evolution       : ['Beedrill'],
    },
    {   
        imagePokemon    : '',
        idPokemon       : 15, 
        namePokemon     : 'Beedrill',
        acquisitioValue : 420, 
        level           : 2,
        type            : ['Plant', 'Poison'],
        weakness        : ['Fire', 'Psychic', 'Flying', 'Ice'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 16, 
        namePokemon     : 'Pidgey',
        acquisitioValue : 95, 
        level           : 0,
        type            : ['Normal', 'Flying'],
        weakness        : ['Electric', 'Ice', 'Rock'],
        evolution       : ['Pidgeotto', 'Pidgeot']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 17, 
        namePokemon     : 'Pidgeotto',
        acquisitioValue : 180, 
        level           : 1,
        type            : ['Normal', 'Flying'],
        weakness        : ['Electric', 'Ice', 'Rock'],
        evolution       : ['Pidgeot']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 18, 
        namePokemon     : 'Pidgeot',
        acquisitioValue : 300, 
        level           : 2,
        type            : ['Normal', 'Flying'],
        weakness        : ['Electric', 'Ice', 'Rock'],
        evolution       : []
    },
    {   
        imagePokemon    : '<|:3( )~@',
        idPokemon       : 19, 
        namePokemon     : 'Rattata',
        acquisitioValue : 80, 
        level           : 0,
        type            : ['Normal'],
        weakness        : ['Fight'],
        evolution       : ['Raticate']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 20, 
        namePokemon     : 'Raticate',
        acquisitioValue : 180, 
        level           : 1,
        type            : ['Normal'],
        weakness        : ['Fight'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 21, 
        namePokemon     : 'Spearow',
        acquisitioValue : 150, 
        level           : 0,
        type            : ['Normal', 'Flying'],
        weakness        : ['Electric', 'Ice', 'Rock'],
        evolution       : ['Fearow']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 22, 
        namePokemon     : 'Fearow',
        acquisitioValue : 300, 
        level           : 1,
        type            : ['Normal', 'Flying'],
        weakness        : ['Electric', 'Ice', 'Rock'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 23, 
        namePokemon     : 'Ekans',
        acquisitioValue : 120, 
        level           : 0,
        type            : ['Poison'],
        weakness        : ['Psychic', 'Earth'],
        evolution       : ['Arbok']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 24, 
        namePokemon     : 'Arbok',
        acquisitioValue : 260, 
        level           : 1,
        type            : ['Poison'],
        weakness        : ['Psychic', 'Earth'],
        evolution       : []
    },
    {   
        imagePokemon    : 'ϞϞ(๑⚈ ․̫ ⚈๑)∩',
        idPokemon       : 25, 
        namePokemon     : 'Pikachu',
        acquisitioValue : 500, 
        level           : 1,
        type            : ['Electric'],
        weakness        : ['Earth'],
        evolution       : ['Raichu'],
    },
    {   
        imagePokemon    : 'ϞϞ(๑⚈ ․̫ ⚈๑)∩',
        idPokemon       : 26, 
        namePokemon     : 'Raichu',
        acquisitioValue : 1100, 
        level           : 2,
        type            : ['Electric'],
        weakness        : ['Earth'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 27, 
        namePokemon     : 'Sandshrew',
        acquisitioValue : 150, 
        level           : 0,
        type            : ['Earth'],
        weakness        : ['Plant', 'Ice', 'Water'],
        evolution       : ['Sandslash']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 28, 
        namePokemon     : 'Sandslash',
        acquisitioValue : 290, 
        level           : 1,
        type            : ['Earth'],
        weakness        : ['Plant', 'Ice', 'Water'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 29, 
        namePokemon     : 'Nidoran W',
        acquisitioValue : 110, 
        level           : 0,
        type            : ['Poison'],
        weakness        : ['Psychic', 'Earth'],
        evolution       : ['Nidorina', 'Nidoqueen']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 30, 
        namePokemon     : 'Nidorina',
        acquisitioValue : 190, 
        level           : 1,
        type            : ['Poison'],
        weakness        : ['Psychic', 'Earth'],
        evolution       : ['Nidorina', 'Nidoqueen']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 31, 
        namePokemon     : 'Nidoqueen',
        acquisitioValue : 390, 
        level           : 2,
        type            : ['Poison'],
        weakness        : ['Psychic', 'Earth'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 32, 
        namePokemon     : 'Nidoran M',
        acquisitioValue : 130, 
        level           : 0,
        type            : ['Poison'],
        weakness        : ['Psychic', 'Earth'],
        evolution       : ['Nidoron', 'Nidoking']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 33, 
        namePokemon     : 'Nidorino',
        acquisitioValue : 220, 
        level           : 1,
        type            : ['Poison'],
        weakness        : ['Psychic', 'Earth'],
        evolution       : ['Nidoking']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 34, 
        namePokemon     : 'Nidoking',
        acquisitioValue : 420, 
        level           : 2,
        type            : ['Poison'],
        weakness        : ['Psychic', 'Earth'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 35, 
        namePokemon     : 'Clefairy',
        acquisitioValue : 80, 
        level           : 0,
        type            : ['Normal'],
        weakness        : ['Fire', 'Poison'],
        evolution       : ['Clefable']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 36, 
        namePokemon     : 'Clefable',
        acquisitioValue : 170, 
        level           : 1,
        type            : ['Normal'],
        weakness        : ['Fire', 'Poison'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 37, 
        namePokemon     : 'Vulpis',
        acquisitioValue : 110, 
        level           : 0,
        type            : ['Fire'],
        weakness        : ['Earth', 'Rock', 'Water'],
        evolution       : ['Ninetales']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 38, 
        namePokemon     : 'Ninetales',
        acquisitioValue : 230, 
        level           : 1,
        type            : ['Fire'],
        weakness        : ['Earth', 'Rock', 'Water'],
        evolution       : ['Ninetales']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 39, 
        namePokemon     : 'Jigglypuff',
        acquisitioValue : 85, 
        level           : 1,
        type            : ['Normal'],
        weakness        : ['Earth', 'Fire', 'Poison'],
        evolution       : ['Wigglytuff']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 40, 
        namePokemon     : 'Wigglytuff',
        acquisitioValue : 150, 
        level           : 2,
        type            : ['Normal'],
        weakness        : ['Earth', 'Fire', 'Poison'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 41, 
        namePokemon     : 'Zubat',
        acquisitioValue : 140, 
        level           : 0,
        type            : ['Flying', 'Poison'],
        weakness        : ['Electric', 'Ice', 'Psychic', 'Rock'],
        evolution       : ['Golbat']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 42, 
        namePokemon     : 'Golbat',
        acquisitioValue : 310, 
        level           : 1,
        type            : ['Flying', 'Poison'],
        weakness        : ['Electric', 'Ice', 'Psychic', 'Rock'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 43, 
        namePokemon     : 'Oddish',
        acquisitioValue : 70, 
        level           : 0,
        type            : ['Plant', 'Poison'],
        weakness        : ['Fire', 'Flying', 'Ice', 'Psychic'],
        evolution       : ['Gloom', 'Vileplume']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 44, 
        namePokemon     : 'Gloom',
        acquisitioValue : 150, 
        level           : 1,
        type            : ['Plant', 'Poison'],
        weakness        : ['Fire', 'Flying', 'Ice', 'Psychic'],
        evolution       : ['Vileplume']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 45, 
        namePokemon     : 'Vileplume',
        acquisitioValue : 340, 
        level           : 2,
        type            : ['Plant', 'Poison'],
        weakness        : ['Fire', 'Flying', 'Ice', 'Psychic'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 46, 
        namePokemon     : 'Paras',
        acquisitioValue : 130, 
        level           : 0,
        type            : ['Bug', 'Plant'],
        weakness        : ['Earth', 'Fire', 'Poison'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 47, 
        namePokemon     : 'Parasect',
        acquisitioValue : 260, 
        level           : 1,
        type            : ['Bug', 'Plant'],
        weakness        : ['Bug','Fire', 'Flying', 'Ice', 'Poison', 'Rock'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 48, 
        namePokemon     : 'Venonat',
        acquisitioValue : 150, 
        level           : 0,
        type            : ['Bug', 'Poison'],
        weakness        : ['Bug','Fire', 'Flying', 'Ice', 'Poison', 'Rock'],
        evolution       : ['Venomoth']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 49, 
        namePokemon     : 'Venomoth',
        acquisitioValue : 330, 
        level           : 1,
        type            : ['Bug', 'Poison'],
        weakness        : ['Fire', 'Flying', 'Psychic', 'Rock'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 50, 
        namePokemon     : 'Diglett',
        acquisitioValue : 110, 
        level           : 0,
        type            : ['Earth'],
        weakness        : ['Plant', 'Ice', 'Water'],
        evolution       : ['Dugtrio']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 51, 
        namePokemon     : 'Dugtrio',
        acquisitioValue : 260, 
        level           : 1,
        type            : ['Earth'],
        weakness        : ['Plant', 'Ice', 'Water'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 52, 
        namePokemon     : 'Meowth',
        acquisitioValue : 130, 
        level           : 0,
        type            : ['Normal'],
        weakness        : ['Fight'],
        evolution       : ['Persian']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 53, 
        namePokemon     : 'Persian',
        acquisitioValue : 220, 
        level           : 1,
        type            : ['Psychic', 'Water'],
        weakness        : ['Fight'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 54, 
        namePokemon     : 'Psyduck',
        acquisitioValue : 80, 
        level           : 0,
        type            : ['Psychic', 'Water'],
        weakness        : ['Electric', 'Plant'],
        evolution       : ['Golduck']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 55, 
        namePokemon     : 'Golduck',
        acquisitioValue : 220, 
        level           : 1,
        type            : ['Psychic', 'Water'],
        weakness        : ['Electric', 'Plant'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 56, 
        namePokemon     : 'Mankey',
        acquisitioValue : 130, 
        level           : 0,
        type            : ['Fire'],
        weakness        : ['Psychic', 'Normal', 'Flying'],
        evolution       : ['Primeape']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 57, 
        namePokemon     : 'Primeape',
        acquisitioValue : 250, 
        level           : 1,
        type            : ['Fire'],
        weakness        : ['Psychic', 'Normal', 'Flying'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 58, 
        namePokemon     : 'Growlithe',
        acquisitioValue : 140, 
        level           : 0,
        type            : ['Fire'],
        weakness        : ['Earth', 'Rock', 'Water'],
        evolution       : ['Arcanine']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 59, 
        namePokemon     : 'Arcanine',
        acquisitioValue : 300, 
        level           : 1,
        type            : ['Fire'],
        weakness        : ['Earth', 'Rock', 'Water'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 60, 
        namePokemon     : 'Poliwag',
        acquisitioValue : 78, 
        level           : 0,
        type            : ['Water'],
        weakness        : ['Electric', 'Plant'],
        evolution       : ['Poliwhirl', 'Poliwraht']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 61, 
        namePokemon     : 'Poliwhirl',
        acquisitioValue : 130, 
        level           : 1,
        type            : ['Water'],
        weakness        : ['Electric', 'Plant'],
        evolution       : ['Poliwraht']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 62, 
        namePokemon     : 'Poliwraht',
        acquisitioValue : 250, 
        level           : 2,
        type            : ['Water', 'Fight'],
        weakness        : ['Electric', 'Plant'],
        evolution       : []
    },
    {   
        imagePokemon    : '',
        idPokemon       : 63, 
        namePokemon     : 'Abra',
        acquisitioValue : 115, 
        level           : 0,
        type            : ['Psychic'],
        weakness        : ['Bug', 'Poison'],
        evolution       : ['Kadabra', 'Alakazam']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 64, 
        namePokemon     : 'Kadabra',
        acquisitioValue : 240, 
        level           : 1,
        type            : ['Psychic'],
        weakness        : ['Bug', 'Poison'],
        evolution       : ['Alakazam']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 65, 
        namePokemon     : 'Alakazam',
        acquisitioValue : 500, 
        level           : 2,
        type            : ['Psychic'],
        weakness        : ['Bug', 'Poison'],
        evolution       : []
    }
                                ];

const arrayOfAvaibleRandomPokemons = [];

///////////////////////////////////////////////////////////////////////////
//                      GENERALL FUNCTIONS                               //
//  1.-  Randon Number between MIN-MAX:
function numberRandomMinMax (parNumberMin, parNumberMax) {
    let numberRandomMinMax = 0;
    if (typeof parNumberMin === 'number' && typeof parNumberMax === 'number') {
    numberRandomMinMax = Math.floor(Math.random() * (parNumberMax - parNumberMin) + parNumberMin);
    } else {
    console.log('|| Error:  The arguments of the function "numberRandonMinMax" must be integers numbers!!');
    numberRandomMinMax = null;
    }
    return numberRandomMinMax;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  ****        1.-  Class POKEMON 
/*
/*  Pokemon class: object "pokemon" that representing the "pokemons" possible "created and available" in the game, with 
the properties and methods: 

1.- Properties of object Pokemon:
    1.1.- imagePokemon:                         string, emotico of Pokemon
    1.2.- idPokemon:                            number integer, unique identifier number of the Pokemon object.
    1.3.- namePokemon:                          string, name of the Pokemon.
    1.4.- acquisitioValue:                      integer number, acquisition value of a pokemon object of that type.
    1.5.- level:                                integer number, evolution level of the pokemon item.
    1.6.- typePokemon:                          array of string, Pokemon type.
    1.7.- weakness:                             array of string, type of pokemon that the pokemon object has weaknesses (it is more affected by the attacks of those pokemons).
    1.8.- evolution:                            array of string, possible evolution of the pokemon object.
    1.9.- _healthPokemon:                       integer number, health level of a Pokemon object.
    1.10.- amountMagic :                        integer number, amount of magic that has a pokemon object.
    1.11.- skillsOfPokemon:                     array of objects, attack objects items available in the pokemon object.
    1.12.- userPro:                             object of the class "UserPokemon", user owner and pokemon master.

2.- Pokemon methods:

    2.1.- dataAdquisitionPokemon(parName):      method that "completes the assignment of values" to the properties of a Pokemon 
                                                object that have not been assigned by argument. Reports the creation of a Pokemon 
                                                object (with the namePokemon property) in the game or not.

    2.2.- learnAttackSkill (...parObjectAttack): method that receives as arguments the elements of an array of "attack" objects and 
                                                 adds them ">>directly>>"" into its array of "skillsOfPokemons", first checks if such 
                                                 "attack" objects are within the array of attacks available in the game, and if so 
                                                 it adds it into its array of attack "skillsOfPokemons", and if not it warns that 
                                                 such attack is not within the array of available attacks. 

    2.3.- attack (idAttack, pokemonObjectiv):   method of an object "pokemon"  that "launches" an "attack" object (parameter 
                                                "idAttack") at a target "pokemon" object (parameter "pokemonObjectiv" --- string 
                                                name of the Pokemon target.)

                                                The method must first consider that the object source "pokemon" has the "attack" 
                                                object within its "_skillsOfPokemon"property (it has learned and acquired it), and 
                                                that the object "attack" can be performed by the "source pokemon" object (the 
                                                "source pokemon" of an "attack" object is first of the "type" of Pokemon 
                                                ("typePokemon" property) that can perform the attack (its string value is inside 
                                                the array property "typeAttack", of the thrown "attack" object), and what's more 
                                                has enough "magic" (in its "_magicPokemon " property greater than or equal to the 
                                                amount of the thrown "attack" object's property "_useOfMagic ") Finally, it must 
                                                consider if the destination "pokemon" object exists, is available in the game 
                                                (it is an element within the array of pokemon objects available in the game 
                                                "arrayOfAvaibleRandomPokemons")

                                                If the above conditions are met, the "source" item will "cast" the "attack" item on the "destination" pokemon item. 
                                                The effect of the "attack" object will be:

                                                    2.2.1.- In the object "pokemon" origin of the attack: deduct the "amount of magic" of the attack object (_useOfMagic) 
                                                    in the object "pokemon" origin of the attack (_magicPokemon)

                                                    2.2.2.- On the target "pokemon" object of the attack: it will discount the amount of damage of the "attack" object 
                                                    (_damageOfAttack) on the "_healthPokemon" property of the target "pokemon" object.

                                                    2.2.3.- About the "UserPokemon" object of the "pokemon" object origin of the "attack": increase the two properties 
                                                    of the "user" object by an amount: ""experience", and ""capacityLearnAttacks".

                                                    2.2.4.- On the "UserPokemon" object of the "pokemon" object that is the target of the "attack": decrease (the same 
                                                    amount as before) the two properties of the user object: ""experience", and ""capacityLearnAttacks".
                                                
                                                The objects "attacks" will be made between the "pokemon" objects involved in a "fight" object, alternately and one by 
                                                one in turns, until the amount of health of one of the "Pokemon" objects (_healthPokemon) is equal to or less than zero.

                                                If a "pokemon" object reaches a level less than or equal to zero in its "_healthPokemon" property then the pokemon 
                                                "dies" (the pokemon is deleted from the "pokemonsOfUser" arrays of the "userPokemon" object, from the 
                                                "arrayOfAvaibleRandomPokemons" array) ), and the "fight" object between the two pokemon objects ends ("dies"), 
                                                changing the following properties of the "userPokemon" objects involved:

                                                1.- User of the "winning" Pokemon:  it will increase its properties by a calculated amount: "experience", 
                                                                                    "capacityLearnAttacks", and "capacityToAcquirePokemons".

                                                2.- User of the "loser" Pokemon:    its properties will decrease by a calculated amount: "experience", 
                                                                                    "capacityLearnAttacks", and "capacityToAcquirePokemons".
                                                
    2.4.- setAmountMagic (parAmountMagic):      method of a "pokemon" object that picks up the "command" of the "pokemon" user to increase its "amount of magic", 
                                                and consequently increases the value of the property "_magicPokemon" of the pokemon object.

    2.5.- evolve ():                            method of a "pokemon" object that, depending on certain conditions, evolves a "pokemon" object to a higher (or lesser) 
                                                level (property "levelPokemon").                     
    
    2.6.- showSkill():

    2.7.- showStatus ():
*/


/*

El efecto del objeto "ataque" será:
                                                
Los objetos "ataques" se harán entre los objetos "pokemon" involucrados en un objeto "lucha", alternativamente y uno por 
uno por turno, hasta que la cantidad de salud de uno de los objetos "pokemon" (_healthPokemon) sea igual o menor que cero.

Si un objeto "pokemon" alcanza un nivel menor o igual a cero en su propiedad "_healthPokemon" entonces el pokemon "muere"
(el pokemon se elimina de las matrices "pokemonsOfUser" del objeto "userPokemon", del "arrayOfAvaibleRandomPokemons") ), y la 
"lucha" entre los dos objetos pokemon termina ("muere"), cambiando las siguientes propiedades de los objetos "userPokemon" implicados:

    1.- Usuario del pokemon "ganador": aumentará sus propiedades en una cantidad calculada: "experiencia", "capacidadAprenderAtaques", y
    "capacidadAdquirirPokemons".

    2.- Usuario del Pokemon "perdedor": sus propiedades disminuirán en una cantidad calculada: "experiencia", 
    "capacityLearnAttacks", y "capacityToAcquirePokemons".
*/

class Pokemon {             //  CLASS POKEMON           <<==||
    constructor (namePokemon, health, magic, skills = []) {
        this.imagePokemon           = '',
        this.idPokemon              = 0;
        this.namePokemon            = namePokemon;
        this.acquisitioValue        = 0;
        this.level                  = 0;
        this.type                   = [];
        this.weakness               = [];
        this.evolution              = [];
        this.isLive                 = true;

        this._healthPokemon         = health;
        this.amountMagic            = magic;
        this.skillsOfPokemon        = skills;
        this.userPro                = {};

        this.dataAdquisitionPokemon(this.namePokemon);
    }

    dataAdquisitionPokemon(parName) {
        let txt = '';

        txt += `||  ***********************************************************************************************  ||\n`;
        txt += `||                                                                                                   ||\n`;  
        const elementObjectPokemon = arrayGenerallOfPokemons.find( function (element) {
            return element['namePokemon'] === parName;
        }, this);

        if (elementObjectPokemon) {
            txt += `||                     Pokemon create:  "${this.namePokemon }"\n`;
           
            this.idPokemon                  = elementObjectPokemon['idPokemon'];
            this.type                       = elementObjectPokemon['type'];
            this.acquisitioValue            = elementObjectPokemon['acquisitioValue'];
            this.level                      = elementObjectPokemon['level'];
            this.weakness                   = elementObjectPokemon['weakness'];
            this.evolution                  = elementObjectPokemon['evolution'];

            arrayOfAvaibleRandomPokemons.push(this);  // Add the created "pokemon" object to the array "arrayOfAvaibleRandomPokemons";
        } else {
            txt += `||  ❌ The Pokemon could not be created and acquired because it does not exist in the general pokemon list. ❌\n`;
        }
        txt += `||                                                                                                   ||\n`;
        txt += `||  ***********************************************************************************************  ||\n`;
        
        return console.log(txt);
    }

    learnAttackSkill (...parObjectAttack) {
        let txt= '';
        let attackSkillLearnt = false;                  //  <<==||  variable is the "Attack" object learnd or not?
        let objectAttack = {};

        if (Array.isArray (parObjectAttack)) {       
            for (const parameterObject of parObjectAttack) {
                if (typeof parameterObject === 'object' && parameterObject instanceof Attack) {
                    objectAttack = arrayAvaibleOfAttacks.find ( function (itemAttack) {      //  <==||  arrayAvaibleOfAttacks is the array avaible 
                                                                                             //         of objects - "Attack" in the game
                        return parameterObject['nameAttack'] === itemAttack['nameAttack'];
                    }, this );
    
                    txt += `||  ***********************************************************************************************  ||\n`;
                    txt += '||                                                                                                   ||\n';
                    if (objectAttack) {
                        this.skillsOfPokemon.push(objectAttack);                        //  <==||  The attack ("objectAttack") is "learning" by the Pokemon
                        attackSkillLearnt = true;
                        txt += `||  ✅ The attack ${objectAttack['imgAttack']} -- "${objectAttack['nameAttack']}" has been acquired by the Pokemon: "${this.namePokemon}"!! ✅\n`;
                    } else {
                        txt += `||  ❌ The attack ${objectAttack['imgAttack']} -- "${objectAttack['nameAttack']}" has not been acquired by the Pokemon: "${this.namePokemon}"!! ❌\n`;
                    }
                } else {
                    console.log('|| Error:  The argument of the method "learnAttackSkill" must be a object - Attack!!');
                    attackSkillLearnt = false;
                }
                txt += '||                                                                                                   ||\n';
                txt += '||  ***********************************************************************************************  ||\n';
            }
        } else {
            console.log('|| Error:  The argument of the method "learnAttackSkill" must be a array of Attack - objects!!');
            attackSkillLearnt = false;
        }
        console.log(txt);

        return attackSkillLearnt;
    }

//  **********************      Method:  attack (idAttack, objectTargetPokemon)     ****************************

//  Tu pokemon debe tener un **método llamado: "attack (idAttack, objectTargetPokemon)" que escoge una 
//  de las habilidades de ataque (dentro de su matriz "this._skills") del pokemon para atacar a "otro" pokemon. 
//  Este es el método más importante. Considera todas las posibilidades de este método. 


//  Result:  Success or not?
//  conditions for ein success atack:
//  A.- The "amount of magic of the attacking pokemon" ('this._magic') is greater than the "amount of magic"
//      needed to perform the attack. 

//  1.-  success = true:
//      1.1-    Descontar "health" al objet target Pokemon.
//      1.2.-   Descontar "amount of magig" del attack en el Pokemon que hace el "attack".
//      1.3.-   Show in console.log: "sucess attack".

//  2.-  success = false;
//      2.1.-  Descontar "amount of magig" del attack en el Pokemon que hace el "attack".
//      2.2.-  Show in console.log: "failure attack".

//  El método "attack()" además debe sacar por console.log si el ataque fue "exitoso" 'sucess attack' 
//  (en otras palabras, si el pokemon atacante tenía suficiente magia para llevar a cabo el ataque), 
//  y el resultado del ataque.

    attack (idAttack, pokemonObjectiv) {
    let isAttackSucess = false;
    let txt = '';
    let ObjectAttack                = {};
    let ObjectTargetPokemon         = {};

    const isPokemonLive = function(parIsLive) {
        let isPokemonLive = true;

        if (typeof parIsLive === 'boolean') {

            if (parIsLive) {
                console.log(`||  The pokemon is live??  "${parIsLive}"  😃  !!`);
                console.log('');
                isPokemonLive = 'true'
            }
        } else {
            console.log(`||   ℹ ==>  The pokemon is unfortunately dead  💀 😫, it is in pokemon heaven  🎇  and can no longer be used, rest in peace  🙏 😇 !!`);
            console.log('');
            isPokemonLive = 'false';
        }
        return isPokemonLive;
    };
    
    if (isPokemonLive (this.isLive)) {
        if ((typeof idAttack === 'number' && Number.isInteger(idAttack)) && (typeof pokemonObjectiv === 'string')) {

            if (this.skillsOfPokemon.length > 0) {  // The Pokemon object has at least one "attacks" objects!!

                ObjectAttack = this.skillsOfPokemon.find( function (elementAttack) {
                    return elementAttack['idAttack'] === idAttack;
                }, this );
    
                if (arrayOfAvaibleRandomPokemons.length > 0) {     // There is at least one target Pokemon object in the game.
                    ObjectTargetPokemon = arrayOfAvaibleRandomPokemons.find( function (elementPokemon) {
                        return elementPokemon['namePokemon'] === pokemonObjectiv;
                    }, this);

                    if (this.typePokemon === ObjectAttack['typeAttack']) {  // If "not" it ist impossible an attack to make

                        if ( (this.amountMagic - ObjectAttack['amountMagic']) >= 0) {  // Check if you have enough magic in the pokemon to perform the attack
                            this.amountMagic -= ObjectAttack['amountMagic'];
                            isAttackSucess = true;
                        } else {    
                            console.log(`||  ❌ Error:  The pokemon source of attack: "${this.namePokemon}", cannot perform the attack "${ObjectAttack['nameAttack']}" -- ${ObjectAttack['imgAttack']}, because it does not have enough magic. ❌`);
                            console.log('||');
                            console.log(`||  Amount of magic of the pokemon: "${this.amountMagic}"  <  Amount of magic needed to perform the attack: "${ObjectAttack['amountMagic']}"`);  
                            console.log('||');
                            console.log(`||  Then it is necessary: "${ -(ObjectAttack['amountMagic'] - this.amountMagic) }" MORE MAGIC IS NEEDED !!`);
                            isAttackSucess = false;
                            
                            return isAttackSucess;
                        }

                    } else {
                        console.log(`||  ❌ Error:  The source pokemon "${this.namePokemon}" cannot cast this attack object, because the "type of pokemon" of source pokemon and "type of attack" do not match !! ❌`);
                        isAttackSucess = false;

                        return isAttackSucess;
                    }
                } else {
                    console.log(`||  ❌ Error:  The target pokemon "${pokemonObjectiv}" does not exist within the "array of pokemon objects available" in the game!! ❌`);
                    isAttackSucess = false;

                    return isAttackSucess;
                }
            } else {
                console.log(`||  ❌ Error:  The Pokemon "${this.namePokemon }" has not got any attacks object !! ❌`);
                isAttackSucess = false;

                return isAttackSucess;
            }
            
            //  The pokemon's attack is performed !!
            txt += `||   **********************************************************************************************  ||\n`;
            txt += `||                                                                                                   ||\n`;
            txt += `||   Attack:  ${ObjectAttack['imgAttack']}  --  "${ObjectAttack['nameAttack']}"  from mein Pokemon: "${this.namePokemon}" to ➡ the "target" Pokemon: "${ObjectTargetPokemon['namePokemon']}"\n`;
            txt += `||                                                                                                   ||\n`;
            if (isAttackSucess && ObjectAttack && ObjectTargetPokemon) {        //  Check if everything is OK again
    
                this._magicPokemon                      -= ObjectAttack['useOfMagic'];      // Expenditure of pokemon's magic in the attack
                ObjectTargetPokemon['_healthPokemon']   -= ObjectAttack['damageOfAttack'];  // Attack succeeds, decrease of health of target pokemon
    
                if (ObjectTargetPokemon['_healthPokemon'] <= 0) {           //  Has the target pokemon been killed?

                    ObjectTargetPokemon['isLive'] = false;                  //  YES, rest in peace !!
                    const indexPokemonInArrayAvaible = arrayOfAvaibleRandomPokemons.findIndex( function (elementPokemon) {
                        return elementPokemon['idPokemon'] === ObjectTargetPokemon['idPokemon'];
                    }, this);
                    arrayOfAvaibleRandomPokemons.splice(indexPokemonInArrayAvaible, 1); // Remove dead pokemon from pokemon items available in the game

                    // ==>>  The reward to the pokemon !!
                    const increaseMagicPokemon =   numberRandomMinMax (15, 25)/100;  // %   increase in magic amount.
                    const increaseHealthPokemon =  numberRandomMinMax (50, 100)/100;  // %   increase in magic amount.
    
                    this.amountMagic        = this.amountMagic    * (1 + increaseMagicPokemon);
                    this._healthPokemon     = this._healthPokemon   * (1 + increaseHealthPokemon);

                    // ==>>  The reward to the user of pokemon !!
                    const increaseExperience    =  numberRandomMinMax (5, 15)/100;  //  %   increase in experience.
                    const capacityLearnAttacks  =  numberRandomMinMax (3, 6)/100;   //  %   increase in learning capacity.
                    
                    this.userPro['experience']                  = this.userPro['experience'] * (1 + increaseExperience);
                    this.userPro['capacityLearnAttacks']        = this.userPro['capacityLearnAttacks'] * (1 + capacityLearnAttacks);

                    // ==>>  The punishment to the user of the target pokemon !!
                    ObjectTargetPokemon['experience']           = ObjectTargetPokemon['experience'] * (1 - increaseExperience);
                    ObjectTargetPokemon['capacityLearnAttacks'] = ObjectTargetPokemon['capacityLearnAttacks'] * (1 - capacityLearnAttacks);
                }
    
                txt += `||   ❎  --  Sucess attack!! Attack "${idAttack}" -- ${ObjectAttack['imgAttack']}   from Pokemon "${this.namePokemon}" to the Pokemon "${ObjectTargetPokemon['namePokemon']}" was success  --  ❎ !!\n`;
            } else {
                isAttackSucess = false;
                txt += `||   ❌  --  Not sucess attack!! Attack "${idAttack}" -- ${ObjectAttack['imgAttack']}   from Pokemon "${this.namePokemon}" to the Pokemon "${ObjectTargetPokemon['namePokemon']}" was not success  --  ❌ !!\n`;
            }
            txt += `||                                                                                                   ||\n`;
            txt += `||   **********************************************************************************************  ||\n`;
        } else {
            console.log('|| Error: The arguments of the method "attack" must are: "idAttack" an integer number and "pokemonObjectiv" a string!!  <<==||');
            isAttackSucess  = false;
        }
    } else {
        console.log(`||  Error:  The source pokemon "${this.namePokemon}" is live? "${this.isLive}"  😞  .  
        ℹ ==>  The pokemon is unfortunately dead  💀 , it is in pokemon heaven  🎇  and can no longer be used, rest in peace  🙏  !!`);
        isAttackSucess = false;

        return isAttackSucess;
    }
    console.log(txt);

    return isAttackSucess;
    }

    setAmountMagic (parAmountMagic) {
        let txt = '';

        if (typeof parAmountMagic === 'number' && Number.isInteger(parAmountMagic)) {

            if (this.userPro['nameUser'] !== '') {
                txt += `||  ***********************************************************************************************  ||\n`;
                txt += `||                                                                                                   ||\n`;
                txt += `||  Pokemon: ${this.namePokemon}        Amount magic before:  "${this.amountMagic}"\n`;
                txt += `||                                                                                                   ||\n`;
                const percentageOfRandomMagic = (numberRandomMinMax (10, 30)/100);
                this.amountMagic += Math.round(this.amountMagic * percentageOfRandomMagic) + parAmountMagic;

                txt += `||  💫 Magia added:  "${parAmountMagic}"  +  Additional (%) of added magic:  "${percentageOfRandomMagic * 100}%"  ==>>  Amount of magic now:  "${this.amountMagic}"\n`;
            } else {

            }
        } else {
            console.log('|| Error: The argument of the method "setAmountMagic" must are an integer number !!    <<==|| ');
            txt += `||  Percentage of added magic:  "0%"       Amount of magic now:  "${this.amountMagic}"   \n`;
        }
        txt += `||                                                                                                   ||\n`
        txt += `||  ***********************************************************************************************  ||\n`;
    
        return txt;
    }

    showSkill() {
        let txt = '';
        if (this.skillsOfPokemon.length > 0) {
            txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
            txt += `||  Skill of Attacks:                                                                                ||\n`;
            txt += `||                                                                                                   ||\n`;
            // console.log(this.skillsOfPokemon)

            for (const itemAttack of this.skillsOfPokemon) {
                txt += `||  Id of attack: ${itemAttack['idAttack']}   ${itemAttack['imgAttack']}    --      Name of attack: "${itemAttack['nameAttack']}"\n`;  
                txt += `||                                                                                                   ||\n`;  
                txt += `||  Type attack: "${itemAttack['forTypePokemon']}"        💀 Damage: "${itemAttack['IniDamage']}"           ✨ Magic use: "${itemAttack['amountMagic']}"\n`;
                txt += `||                                                                                                   ||\n`;
                txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
            }
        } else {
            txt += `||      There are not attacks!!                                                                      ||\n`;
            txt += `||                                                                                                   ||\n`;        
            txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
        }
            return txt;
    }

    showStatus () {
        let txt = '';
        
        txt += `||  ***********************************************************************************************  ||\n`;
        txt += `||                                                                                                   ||\n`;
        txt += `||                             Status of Pokemon:  "${this.namePokemon}"\n`;
        txt += `||                                                                                                   ||\n`;
        txt += `||  Id of Pokemon: ${this.idPokemon}    Name: "${this.namePokemon}"    Level: ${this.level}   Type: "${this.type}"\n`
        txt += `||                                                                                                   ||\n`;
        txt += `||  💖 Health status: "${this._healthPokemon}"    ✨ Amount of magic: "${this.amountMagic}"     💰 Acquisition Value: "${this.acquisitioValue}"\n`;
        txt += `||                                                                                                   ||\n`;
        txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
        txt += `||  Weaknesses of Pokemon: :                                                                         ||\n`;
        txt += `||                                                                                                   ||\n`;
        if (this.weakness.length > 0) {
            for(let i = 0; i < this.weakness.length; i++) {
                txt += `||    N°: ${i + 1} -- ${this.weakness[i]}\n`;
            }
        } else {
            txt += `||  There are not weakness.                                                                          ||\n`;
        }
        txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
        txt += `||  Future evolution:                                                                                ||\n`;
        txt += `||                                                                                                   ||\n`;
        if (this.evolution.length > 0) {
            for(let i = 0; i < this.evolution.length; i++) {
                txt += `||    N°: ${i + 1} -- ${this.evolution[i]}\n`;
            }
        } else {
            txt += `||  There are not future evolution.                                                                  ||\n`;
        }
        txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
        txt += `||  Skill of attacks:                                                                                ||\n`;
        txt += `||                                                                                                   ||\n`;
        txt +=  this.showSkill();
        txt += `||  ***********************************************************************************************  ||\n`;

        return txt;
    }

    static showArrayAvaibleOfPokemon (parArrayOfPokemons = arrayOfAvaibleRandomPokemons) {
        let txt = '';
    
        if (Array.isArray(parArrayOfPokemons)) {
            txt += `||  ***********************************************************************************************  ||\n`;
            txt += `||                                                                                                   ||\n`;
            txt += '||                        LIST OF TOTAL AVAIBLE POKEMONS OF THE USERPOKEMON                          ||\n';
            txt += `||                                                                                                   ||\n`;
            txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
    
            if (parArrayOfPokemons.length > 0) {
                for (let i = 0; i < parArrayOfPokemons.length; i++) {
                    txt += `||  N°: ${i + 1}.- Id of Pokemon: ${parArrayOfPokemons[i]['idPokemon']}    Name of Pokemon: "${parArrayOfPokemons[i]['namePokemon']}"       Type of Pokemon: "${parArrayOfPokemons[i]['type']}"\n`;  
                    txt += `||                                                                                                   ||\n`;
                    txt += `||  💥 Damage: ${parArrayOfPokemons[i]['_healthPokemon']}               ✨ Amount of magig need:  ${parArrayOfPokemons[i]['amountMagic']} ✨\n`;
                    txt += `||                                                                                                   ||\n`;
                    txt += `||  💰 Acquisition Value of Pokemon: "${parArrayOfPokemons[i]['acquisitioValue']}"         🆙 Level:  ${parArrayOfPokemons[i]['level']}       🦎 Evolution: "${parArrayOfPokemons[i]['evolution']}"\n`;
                    txt += `||                                                                                                   ||\n`;
                    txt += `||  Weaknesses of Pokemon:                                                                           ||\n`;
                    txt += `||                                                                                                   ||\n`;
                    if (parArrayOfPokemons[i]['weakness'].length > 0) {
                        for(let j = 0; j < parArrayOfPokemons[i]['weakness'].length; j++) {
                            txt += `||          N° W: ${j + 1} -- ${parArrayOfPokemons[i]['weakness'][j]}\n`;
                            txt += `||                                                                                                   ||\n`;
                        }
                    } else {
                        txt += `||  There are not weaknesses in Pokemon.                                                             ||\n`;
                    }
                    txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
                }
            } else {
                txt += `||  There are not avaible Pokemons.                                                                  ||\n`;
            }
        } else {
            console.log('|| Error:  The arguments of the function "showArrayOfPokemon" must be an array!!');
            txt = '';
        }
        txt += `||                                                                                                   ||\n`;
        txt += `||                              ✅  There are  "${parArrayOfPokemons.length}"  Pokemons avaible !!  🎉  🎊\n`;
        txt += `||  ***********************************************************************************************  ||\n`;
    
        return txt;
    }

    static showGenerallOfPokemon (parArrayOfPokemons = arrayGenerallOfPokemons) {
        let txt = '';
    
        if (Array.isArray(parArrayOfPokemons)) {
            txt += `||  ***********************************************************************************************  ||\n`;
            txt += `||                                                                                                   ||\n`;
            txt += '||                                 LIST TOTAL GENERALL OF POKEMONS                                   ||\n';
            txt += `||                                                                                                   ||\n`;
            txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
            
            if (parArrayOfPokemons.length > 0) {
                for (let i = 0; i < parArrayOfPokemons.length; i++) {
                    txt += `||  N°: ${i + 1}.- Id of Pokemon: ${parArrayOfPokemons[i]['idPokemon']}    Name of Pokemon: "${parArrayOfPokemons[i]['namePokemon']}"    Type of Pokemon: "${parArrayOfPokemons[i]['type']}"\n`;  
                    txt += `||                                                                                                   ||\n`;
                    txt += `||                                                                                                   ||\n`;
                    txt += `||  🔝 Level:  ${parArrayOfPokemons[i]['level']}   🐣 Evolution: "${parArrayOfPokemons[i]['evolution']}"\n`;
                    txt += `||                                                                                                   ||\n`;
                    txt += `||  Weaknesses of Pokemon:                                                                           ||\n`;
                    txt += `||                                                                                                   ||\n`;
                if (parArrayOfPokemons[i]['weakness'].length > 0) {
                    for(let j = 0; j < parArrayOfPokemons[i]['weakness'].length; j++) {
                        txt += `||    N°: ${j + 1} -- ${parArrayOfPokemons[i]['weakness'][j]}\n`;
                        txt += `||                                                                                                   ||\n`;
                    }
                } else {
                    txt += `||  There are not weaknesses in Pokemon.                                                             ||\n`;
                }
                txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
            }
            } else {
                txt += `||  There are not avaible Pokemons.                                                                  ||\n`;
            }
        } else {
            console.log('|| Error:  The arguments of the function "showArrayOfPokemon" must be an array!!');
            txt = '';
        }
        txt += `||                                                                                                   ||\n`;
        txt += `||                                  There are  "${parArrayOfPokemons.length}" Pokemons avaible !!                              ||\n`;
        txt += `||  ***********************************************************************************************  ||\n`;
    
        return txt;
    }
}

//  2.1-  Random Creation of a number of Pokemon:
function createPokemons (parNumberPokemons) {
    // arrayOfPokemons = [];
     let createPokemons = false;
 
     if(typeof parNumberPokemons === 'number' && Number.isInteger(parNumberPokemons)) {
     
         for (let i = 0; i < parNumberPokemons; i++) {
             arrayOfAvaibleRandomPokemons.push(new Pokemon( arrayGenerallOfPokemons[numberRandomMinMax (0, arrayGenerallOfPokemons.length - 1)]['namePokemon'], numberRandomMinMax (40, 200), numberRandomMinMax (10, 150) ));
             createPokemons = true;
         }
     } else {
         console.log('|| Error:  The arguments of the function "createPokemons" must be integer numbers!!');
         arrayOfAvaibleRandomPokemons = null;
         createPokemons = false;
     }
     console.log('||  ***********************************************************************************************  ||');
     console.log('||                                                                                                   ||');
     console.log(`||  Pokemons habe been created? "${createPokemons}", "${arrayOfAvaibleRandomPokemons.length}" Pokemons have been created.`);
     console.log('||                                                                                                   ||');
     console.log('||  ***********************************************************************************************  ||');
     for (let i = 0; i < arrayOfAvaibleRandomPokemons.length; i++)  {
         console.log(`||  N° ${i + 1}:  --  Name: "${arrayOfAvaibleRandomPokemons[i]['namePokemon']}  --    💲  Acquisition Value:  ${arrayOfAvaibleRandomPokemons[i]['acquisitioValue']}  --    💖  Health:   ${arrayOfAvaibleRandomPokemons[i]['_healthPokemon']}  --    🎆  Amount Initial Magic:  ${arrayOfAvaibleRandomPokemons[i]['amountMagic']}"`);
         console.log('||                                                                                                     ');
     }
     console.log('||  ***********************************************************************************************  ||');

     return arrayOfAvaibleRandomPokemons;
}


//  *****       TESTING OF POKEMON CLASS        **********************************************************

//  1.- CREATE TO PIKACHU (MY PIKACHU ϞϞ(๑⚈ ․̫ ⚈๑)∩)
console.log('');
console.log('||     ****************    1, 2.-  CREATE POKEMONS: PIKACHU AND BULBASAUR     ******************     ||');
console.log('');
const Pikachu = new Pokemon('Pikachu', numberRandomMinMax (40, 200), numberRandomMinMax (10, 150));
console.log('');
console.log(Pikachu.showStatus());
console.log('');

//  2.- CREATE TO BULBASAUR.
const Bulbasaur = new Pokemon('Bulbasaur', numberRandomMinMax (40, 200), numberRandomMinMax (10, 150));
console.log('');
console.log(Bulbasaur.showStatus());
console.log('');

console.log('||  *****    CREATED POKEMON OBJECTS ARE IN THE ARRAY OF AVAILABLE POKEMON IN THE GAME     ******   ||');
console.log('');
console.log(Pokemon.showArrayAvaibleOfPokemon ());
console.log('');


//  3.- CREATE RANDOM POKEMONS. I make a array of Object-Pokemons.
console.log('//     ********    3.- CREATE RANDOM POKEMONS. I make a array of Object-Pokemons       **********    ||');
console.log('');

const numPokemons = numberRandomMinMax (4, 12);
createPokemons(numPokemons);
console.log(Pokemon.showArrayAvaibleOfPokemon ());
console.log('');

/*
// 4.-  LEARN AND ACQUIRE AN ATTACK
console.log('//     ********    4.- THE POKEMON LEARNS AND ACQUIRE AN ATTACK                        **********    ||');
console.log('');

console.log('//     ********    4.1- FIRST: CREATE SOME ATTACKS.                                    **********    ||');
console.log('');

const superlightning    = new Attack('🌩', "Super Lightning", ['Electric'], 85, 32);                                 
const unicornPower      = new Attack('🦄 ✨', 'Unicorn Power',['Electric', 'Fight', 'Flying'], 50, 25); 

const floralMadness     = new Attack('🏵  🌺 🌼', "Floral Madness", ['Plant', 'Poison', 'Earth'], 65, 28);                                 
const poisonousSmell    = new Attack('💨 🤢 🍄', 'Poisonous Smell',['Plant', 'Poison', 'Bug'], 70, 35); 

console.log(superlightning.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(unicornPower.showAvaibleAttack ());
console.log('||                                                                                                   ||');

console.log(floralMadness.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(poisonousSmell.showAvaibleAttack ());
console.log('||                                                                                                   ||');

console.log('//     ********    4.2- SECOND: ADD THE ATTACKS TO THE POKEMONS UND CHECKING           **********    ||');
console.log('');
Pikachu.learnAttackSkill (superlightning, unicornPower);
console.log('');
Bulbasaur.learnAttackSkill (floralMadness, poisonousSmell);
console.log('');

console.log('//     ********    4.3- THIRD: CHECK THAT THE POKEMONS HAVE THE RIGHT ATTACKS          **********    ||');
console.log('');

console.log(Pikachu.showStatus());
console.log('');
console.log(Bulbasaur.showStatus());
console.log('');

console.log('//     ********    4.4- FOURTH: ATTACKS HAVE BEEN ADDED TO THE LIST OF ATTACKS         **********    ||');
console.log('');

//console.log(Attack.showAllAttack());
console.log('');

// 5.-  INCREASE (%) THE AMOUNT OF MAGIC OF THE POKEMON
console.log('//     ********    5.- INCREASE (%) THE AMOUNT OF MAGIC OF THE POKEMON                 **********    ||');
console.log('');

console.log(Pikachu.setAmountMagic (50));


// 6.-  ATTACKS: CHECK POKEMON ATTACKS
console.log('//     ********    6.- ATTACKS: CHECK POKEMON ATTACKS                                 **********    ||');
console.log('');

Pikachu.attack (51, "Bulbasaur");
console.log('');
Bulbasaur.attack (53, "Pikachu");
console.log('');
console.log(Pikachu.setAmountMagic (300));
Pikachu.attack (51, "Bulbasaur");
console.log('');


*/




