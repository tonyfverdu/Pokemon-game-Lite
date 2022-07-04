///////////////////////////////////////////////////////////////////////////
//                      GENERALL DATA AND VARIABLES                      //
//  1.-  USER OF POKEMONS
const imagesUser    = ['🎳', '🍺', '🦄', '🐯', '😇', '🤡', '💩', '😜', '👻', '👽', '😻', '👺', '🐭', '🐵', '🐼', '😈', '💋', '🐣', '🌋', '🐮'];

const userFirstName    = [ 'Alexander', 'Anna', 'Berta', 'Bertram', 'Charlotte', 'Cassian', 'Edwin', 'Elies', 'Fridda', 'Gretel', 'Georgina', 'Hannah',
'Ferdinand', 'Florian', 'Harold', 'Hendrik', 'Heidi', 'Ian', 'Ida', 'Manal', 'Maximilian', 'Murat', 'Nicole', 'Rainer', 'Robert' ,
'Ralf', 'Sascha', 'Simon', 'Viktor', 'Walter', 'Wolf', 'Stefan', 'Sven', 'Tadeus', 'Tania', 'Vanessa', 'Veronika', 'Úrsula'  ];

const userLastName     = [ 'Albrecht','Bauer' ,'Becker', 'Braun', 'Berger','Böhm','Brandt','Braun','Dietrich','Engel','Fischer','Frank','Friedrich','Graf',
'Gross','Günther','Haas', 'Hartmann','Hoffmann','Huber','Jäger','Jung','Klein','Keller','Koch','Köhler','Krämer','Lehmann','Lorenz',
'Meyer','Maier','Möller','Müller','Neumann','Otto','Pfeiffer','Richter','Roth','Sauer','Schäfer','Schmidt','Schneider','Scholz',
'Schröder','Schubert','Schulz','Schwarz','Vogel','Wagner','Walter','Weber','Wolf','Ziegler','Zimmermann' ];

const experiencieArray  = [ ['novice', 1], ['very poor', 2], ['poor', 3], ['more or less', 4], ['some experience',5], ['has some experience', 6], ['quite experienced', 7],
['very experienced', 8], ['too much experiencie', 9], ['is a master', 10]];

const usersPokemons = [];                               //  <==||   Array of the users Pokemon in the game.


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


//  3.-  ATTACKS
const arrayGenerallOfAttacks = [ {    
    imgAttack           :   '💨',                     //  -->> Attack object intro Array of attack object (all available attacks)
    idAttack            :   1,
    nameAttack          :   'Wing Steel',
    acquiValueAttack    :   35,
    forTypePokemon      :   ['Bug', 'Flying'],
    IniDamage           :   35,
    amountMagic         :   10      
},
{
    imgAttack           :   '🛡', 
    idAttack            :   2,
    nameAttack          :   'Iron Tail',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Earth', 'Plant', 'Rock'],
    IniDamage           :   15,
    amountMagic         :    6      
},
{
    imgAttack           :   '🏹', 
    idAttack            :   3,
    nameAttack          :   'CounterAttack',
    acquiValueAttack    :   20,
    forTypePokemon      :   ['Electric','Fight','Normal'],
    IniDamage           :   20,
    amountMagic         :    9      
},
{
    imgAttack           :   '💪🏻',
    idAttack            :   4,
    nameAttack          :   'Brutal Claw',
    acquiValueAttack    :   28,
    forTypePokemon      :   ['Earth','Fight','Rock'],
    IniDamage           :   28,
    amountMagic         :   15      
},
{
    imgAttack           :   '💠',
    idAttack            :   5,
    nameAttack          :   'Ice Fang',
    acquiValueAttack    :   25,
    forTypePokemon      :   ['Ice'],
    IniDamage           :   25,
    amountMagic         :   18      
},
{
    imgAttack           :   '✨',
    idAttack            :   6,
    nameAttack          :   'Charm',
    acquiValueAttack    :   22,
    forTypePokemon      :   ['Psychic'],
    IniDamage           :   22,
    amountMagic         :   14      
},
{
    imgAttack           :   '🥋',
    idAttack            :   7,
    nameAttack          :   'Karate Punch',
    acquiValueAttack    :   18,
    forTypePokemon      :   ['Fight'],
    IniDamage           :   18,
    amountMagic         :   10      
},
{
    imgAttack           :   '👻',
    idAttack            :   8,
    nameAttack          :   'Magical Leaf Fast',
    acquiValueAttack    :   16,
    forTypePokemon      :   ['Plant','Psychic'],
    IniDamage           :   16,
    amountMagic         :    7      
},
{
    imgAttack           :   '❌',
    idAttack            :   9,
    nameAttack          :   'Perforator',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Earth','Rock'],
    IniDamage           :   15,
    amountMagic         :    7      
},
{
    imgAttack           :   '⛈',
    idAttack            :   10,
    nameAttack          :   'Thundershock',
    acquiValueAttack    :   25,
    forTypePokemon      :   ['Electric', 'Fight','Water'],
    IniDamage           :   25,
    amountMagic         :   16      
},
{
    imgAttack           :   '⚪',
    idAttack            :   11,
    nameAttack          :   'Bubble',
    acquiValueAttack    :   10,
    forTypePokemon      :   ['Bug','Water'],
    IniDamage           :   10,
    amountMagic         :    4      
},
{
    imgAttack           :   '🈲',
    idAttack            :   12,
    nameAttack          :   'Zen Headbutt',
    acquiValueAttack    :   18,
    forTypePokemon      :   ['Earth', 'Plant', 'Water'],
    IniDamage           :   18,
    amountMagic         :   10      
},
{
    imgAttack           :   '🎤',
    idAttack            :   13,
    nameAttack          :   'Icy Singing',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Bug', 'Plant', 'Water'],
    IniDamage           :   15,
    amountMagic         :    9      
},
{
    imgAttack           :   '💀',
    idAttack            :   14,
    nameAttack          :   'Paranormal',
    acquiValueAttack    :   20,
    forTypePokemon      :   ['Bug', 'Poison', 'Psychic'],
    IniDamage           :   20,
    amountMagic         :   13      
},
{
    imgAttack           :   '🔥',
    idAttack            :   15,
    nameAttack          :   'Spin Fire',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Electric', 'Fight', 'Fire'],
    IniDamage           :   15,
    amountMagic         :   7      
},
{
    imgAttack           :   '📡',
    idAttack            :   16,
    nameAttack          :   'Antiaircraft',
    acquiValueAttack    :   16,
    forTypePokemon      :   ['Earth', 'Ice', 'Normal', 'Rock', 'Water'],
    IniDamage           :   16,
    amountMagic         :    8      
},
{
    imgAttack           :   '⛈',
    idAttack            :   17,
    nameAttack          :   'All Singing',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Bug', 'Earth',  'Electric', 'Fight','Fire', 'Ice', 'Normal','Plant', 'Poison', 'Psychic', 'Rock', 'Water'],
    IniDamage           :   15,
    amountMagic         :    9      
},
{
    imgAttack           :   '💐',
    idAttack            :   18,
    nameAttack          :   'Magic Plant',
    acquiValueAttack    :   20,
    forTypePokemon      :   ['Plant', 'Poison', 'Psychic'],
    IniDamage           :   20,
    amountMagic         :   13      
},
{
    imgAttack           :   '🌞',
    idAttack            :   19,
    nameAttack          :   'Magic Fire',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Electric', 'Psychic'],
    IniDamage           :   15,
    amountMagic         :   7      
},
{
    imgAttack           :  '📡',
    idAttack            :   20,
    nameAttack          :   'Antiflight',
    acquiValueAttack    :   16,
    forTypePokemon      :   ['Earth',  'Ice', 'Normal', 'Rock', 'Water'],
    IniDamage           :   16,
    amountMagic         :    8      
},
{
    imgAttack           :   '🍃',
    idAttack            :   21,
    nameAttack          :   'Water Plant',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Plant', 'Water'],
    IniDamage           :   15,
    amountMagic         :    9      
},
{
    imgAttack           :   '🤔',
    idAttack            :   22,
    nameAttack          :   'Confusion',
    acquiValueAttack    :   12,
    forTypePokemon      :   ['Normal', 'Fight', 'Psychic'],
    IniDamage           :   12,
    amountMagic         :    5      
},
{
    imgAttack           :   '🌀',
    idAttack            :   23,
    nameAttack          :   'Spin Water',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Fight', 'Water'],
    IniDamage           :   15,
    amountMagic         :   7      
},
{
    imgAttack           :   '😴',
    idAttack            :   24,
    nameAttack          :   'Mud Shot',
    acquiValueAttack    :   19,
    forTypePokemon      :   ['Earth', 'Ice', 'Normal', 'Rock', 'Water'],
    IniDamage           :   19,
    amountMagic         :    9      
},
{
    imgAttack           :   '🆕',
    idAttack            :   25,
    nameAttack          :   'Transformation',
    acquiValueAttack    :   18,
    forTypePokemon      :   ['Bug', 'Plant', 'Psychic'],
    IniDamage           :   18,
    amountMagic         :   10      
},
{
    imgAttack           :   '🔨',
    idAttack            :   26,
    nameAttack          :   'Material Damage',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Earth', 'Fight','Plant','Water'],
    IniDamage           :   15,
    amountMagic         :    7      
},
{
    imgAttack           :   '🌩',
    idAttack            :   27,
    nameAttack          :   'Volt Change',
    acquiValueAttack    :   18,
    forTypePokemon      :   ['Electric'],
    IniDamage           :   18,
    amountMagic         :    7      
},
{
    imgAttack           :   '🔫',
    idAttack            :   28,
    nameAttack          :   'Water Gun',
    acquiValueAttack    :   16,
    forTypePokemon      :   ['Ice', 'Water'],
    IniDamage           :   16,
    amountMagic         :    8      
},
{
    imgAttack           :   '🔦',
    idAttack            :   29,
    nameAttack          :   'Water Singing',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Water'],
    IniDamage           :   15,
    amountMagic         :    9      
},
{
    imgAttack           :   '🌨',
    idAttack            :   30,
    nameAttack          :   'Snow Power',
    acquiValueAttack    :   20,
    forTypePokemon      :   ['Ice'],
    IniDamage           :   20,
    amountMagic         :   13      
},
{
    imgAttack           :   '🌧',
    idAttack            :   31,
    nameAttack          :   'Deadly Rain',
    acquiValueAttack    :   18,
    forTypePokemon      :   ['Earth', 'Ice', 'Water'],
    IniDamage           :   18,
    amountMagic         :    9      
},
{
    imgAttack           :   '💧',
    idAttack            :   32,
    nameAttack          :   'Hidden Power Water',
    acquiValueAttack    :   26,
    forTypePokemon      :   ['Water'],
    IniDamage           :   26,
    amountMagic         :   14      
},
{
    imgAttack           :   '🤼🏻',
    idAttack            :   33,
    nameAttack          :   'Twister',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Bug', 'Normal', 'Water'],
    IniDamage           :   15,
    amountMagic         :    9      
},
{
    imgAttack           :   '👊🏻',
    idAttack            :   34,
    nameAttack          :   'Knockdown',
    acquiValueAttack    :   16,
    forTypePokemon      :   ['Fight', 'Normal', 'Rock'],
    IniDamage           :   16,
    amountMagic         :   6      
},
{
    imgAttack           :   '🖨',
    idAttack            :   35,
    nameAttack          :   'Impress',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Normal', 'Water', 'Fight'],
    IniDamage           :   15,
    amountMagic         :   7      
},
{
    imgAttack           :   '💮',
    idAttack            :   36,
    nameAttack          :   'Peck Poison',
    acquiValueAttack    :   22,
    forTypePokemon      :   ['Bug', 'Poison'],
    IniDamage           :   22,
    amountMagic         :   11      
},
{
    imgAttack           :   '🎸',
    idAttack            :   37,
    nameAttack          :   'Rock Strike',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Earth', 'Rock'],
    IniDamage           :   15,
    amountMagic         :    9      
},
{
    imgAttack           :   '⛄',
    idAttack            :   38,
    nameAttack          :   'Frost Mist',
    acquiValueAttack    :   20,
    forTypePokemon      :   ['Ice'],
    IniDamage           :   20,
    amountMagic         :   13      
},
{
    imgAttack           :   '🌋',
    idAttack            :   39,
    nameAttack          :   'Destroyer',
    acquiValueAttack    :   12,
    forTypePokemon      :   ['Fight', 'Rock'],
    IniDamage           :   12,
    amountMagic         :    5     
},
{
    imgAttack           :   '📛',
    idAttack            :   40,
    nameAttack          :   'Calcination',
    acquiValueAttack    :   20,
    forTypePokemon      :   ['Electric',  'Fire'],
    IniDamage           :   20,
    amountMagic         :   11      
},
{
    imgAttack           :   '🤡',
    idAttack            :   41,
    nameAttack          :   'Fissure',
    acquiValueAttack    :   18,
    forTypePokemon      :   ['Bug', 'Electric', 'Fight', 'Fire', 'Flying', 'Normal','Rock', 'Water'],
    IniDamage           :   18,
    amountMagic         :    9      
},
{
    imgAttack           :   '💖',
    idAttack            :   42,
    nameAttack          :   'Lifesuckers',
    acquiValueAttack    :   26,
    forTypePokemon      :   ['Bug', 'Plant', 'Poison', 'Water'],
    IniDamage           :   26,
    amountMagic         :   14      
},
{
    imgAttack           :   '⚪',
    idAttack            :   43,
    nameAttack          :   'Set White',
    acquiValueAttack    :   12,
    forTypePokemon      :   ['Bug', 'Earth', 'Normal', 'Ice', 'Water'],
    IniDamage           :   12,
    amountMagic         :    5      
},
{
    imgAttack           :   '💰',
    idAttack            :   44,
    nameAttack          :   'Misfortune',
    acquiValueAttack    :   11,
    forTypePokemon      :   ['Bug', 'Earth', 'Fight', 'Fire', 'Flying', 'Ice', 'Normal'],
    IniDamage           :   11,
    amountMagic         :    4      
},
{
    imgAttack           :   '🦎',
    idAttack            :   45,
    nameAttack          :   'Embers ',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Bug', 'Normal', 'Plant', 'Poison', 'Psychic', 'Water'],
    IniDamage           :   15,
    amountMagic         :   7      
},
{
    imgAttack           :   '🎁',
    idAttack            :   46,
    nameAttack          :   'Present',
    acquiValueAttack    :   10,
    forTypePokemon      :   ['Bug', 'Earth', 'Electric', 'Fight', 'Fire', 'Flying', 'Ice', 'Normal', 'Plant', 'Poison', 'Psychic', 'Rock', 'Water'],
    IniDamage           :   10,
    amountMagic         :    4      
},
{
    imgAttack           :   '😖',
    idAttack            :   47,
    nameAttack          :   'Fury Attack ',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Electric', 'Fight', 'Fire', 'Flying', 'Normal', 'Psychic', 'Water'],
    IniDamage           :   15,
    amountMagic         :    9      
},
{
    imgAttack           :   '🉐',
    idAttack            :   48,
    nameAttack          :   'Harmful Puja',
    acquiValueAttack    :   20,
    forTypePokemon      :   ['Bug', 'Earth', 'Fight', 'Flying', 'Normal'],
    IniDamage           :   20,
    amountMagic         :   13      
},
{
    imgAttack           :   '🌊',
    idAttack            :   49,
    nameAttack          :   'Waterfall',
    acquiValueAttack    :   18,
    forTypePokemon      :   ['Plant', 'Water'],
    IniDamage           :   18,
    amountMagic         :    8     
},
{
    imgAttack           :   '🏔',
    idAttack            :   50,
    nameAttack          :   'Aerial Slash',
    acquiValueAttack    :   12,
    forTypePokemon      :   ['Fight', 'Flying'],
    IniDamage           :   12,
    amountMagic         :    4      
},
                               ];

const arrayAvaibleOfAttacks  = [];                                      //  -->> Collection of attacks objects available in a game

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

///////////////////////////////////////////////////////////////////////////
//                              CLASSES                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  ****        1.-  Class ATTACK

/*  Attack class: Object "attack" that representing the "attacks possible, created and available" in the game, with properties 
and methods: 

    1.- Properties of attack class: 6 properties.

        1.1-  idAttack              :  number integer, sequential in the "arrayGenerallOfAttacks".
        1.2.- imgAttack             :  string, emoticon of an "attack" object.
        1.3.- nameAttack            :  string, attack name
        1.4.- acquiValueAttack      :  number integer, represents the value to "acquire and learn" this attack, by the pokemon user.
        1.5.- typeAttack            :  string, "type of pokemon" that can use the attack.
        1.6.- damageOfAttack        :  number, "amount of damage" of the attack.
        1.7.- useOfMagic            :  number integer, "amout of magic" that the attack need.
        1.8.- arrayIdAttacks        :  array of attacks created in the game.

    2.- Attack methods:

    2.1.- attackEfficiency ():      method of recalculation of the "attack damage" and "amount of magic" used in the attack. The calculation is done by weighting 
                                    the random variables: 
                                    effectivenessDamagePonderation and effectivenessMagicPonderation.

    2.2.- addAttackToArray ():      method to add the attack object that is being created to the attack arrays:
                                        1.-  Array de attack objects, all (avaible and not avaible) 
                                        2.-  Array of attack objects created in the game.
                                        3.-  Array of randomly selected and created attack objects available in the game.

    2.3.- showAttack (parTypeArrayAttack = 'avaibleAttacks'):  method to mount each of the attack object arrays, with the string parameter giving the type of 
                                                               attack object array to show: "generallAttacks", "avaibleAttacks" and createdAttacks".
*/

class Attack {
    constructor (imgAttack, nameAttack, typeAttack, damageOfAttack, useOfMagic) {
        this.idAttack              = arrayGenerallOfAttacks.length + 1;
        this.imgAttack             = imgAttack;         // string                       -->> Image of attack (Emoticon)
        this.nameAttack            = nameAttack;        // string                       -->> Name of the Pokemon attack
        this.typeAttack            = [];                // array of strings             -->> Type of Pokemon targeted for attack
        this.damageOfAttack        = damageOfAttack;    // number (amount of Damage)    -->> Amount damage of the attack
        this.amountMagic           = useOfMagic;        // number (amount of magic use) -->> Amount of magic needed for the attack
        this.acquiValueAttack      = damageOfAttack,    // number                       -->> Acquisition Value of the attack
        
        this.arrayIdAttacks        = [];               // array (attack objects)       -->> array of attack objects created in the game
        
        this.attackEfficiency ();
        this.addAttackToArray ();
        this.completedArrayTypeAttack (typeAttack);
        
    }

    completedArrayTypeAttack (parTypeAttack) {
        this.typeAttack.push(parTypeAttack);
    }

    attackEfficiency () {                                                            //  -->> Attack effectiveness (damage) recalculation algorithm
        const effectivenessDamagePonderation = numberRandomMinMax (50, 150)/100;     //  -->> Random ponderation of effectiveness attack
        this.damageOfAttack = Math.round(this.damageOfAttack * effectivenessDamagePonderation);
                                                                                        
        const effectivenessMagicPonderation = numberRandomMinMax (90, 110)/100;     //  -->> Random ponderation of needed magic
        this.amountMagic  += Math.round(this.damageOfAttack * effectivenessMagicPonderation);
    }

    addAttackToArray () {                                                            //  -->> Method to add an attack object to the available attack arrays
        const objectAttack = {                                                       //  -->> Construction of attack object created in the game
                                idAttack                    : this.idAttack,               
                                imgAttack                   : this.imgAttack,
                                nameAttack                  : this.nameAttack,
                                forTypePokemon              : this.typeAttack,
                                IniDamage                   : this.damageOfAttack,
                                amountMagic                 : this.amountMagic,
                                acquiValueAttack            : this.acquiValueAttack,
                             };
        arrayGenerallOfAttacks.push(objectAttack);                                  //  -->> Attack object intro Array of attack object (all available attacks)
        arrayAvaibleOfAttacks.push(objectAttack);                                   //  -->> Attack object intro Array of attack object (attacks created in the game)
        this.arrayIdAttacks.push(objectAttack);                                    //  -->> Attack object intro own Array of attack object (attacks available in the game)
    }

    showAvaibleAttack () {                                                          //  -->> Print of array of avaible attack objects in the game 
        let txt = '';

        txt += `||  ***********************************************************************************************  ||\n`;
        txt += `||                                                                                                   ||\n`;
        if (this.arrayIdAttacks.length > 0) {
            for (let i = 0; i < this.arrayIdAttacks.length; i++) {
                txt += `||  N°.-  ${i + 1}    Id of attack: ${this.arrayIdAttacks[i]['idAttack']}   ${this.arrayIdAttacks[i]['imgAttack']}         Name of attack: "${this.arrayIdAttacks[i]['nameAttack']}"\n`;
                txt += `||                                                                                                   ||\n`;
                txt += `||    💰  Acquisition Value: "${this.arrayIdAttacks[i]['acquiValueAttack']}"           💢  Damage capacity: ${this.arrayIdAttacks[i]['IniDamage']}            ✨  Use of magic: ${this.arrayIdAttacks[i]['amountMagic']}\n`;
                txt += `||                                                                                                   ||\n`;
                txt += `||        Type of Pokemons that can use the attack:                                                  ||\n`;
                txt += `||                                                                                                   ||\n`;
                for (let j = 0; j < this.arrayIdAttacks[i]['forTypePokemon'].length; j++) {
                    txt += `||        N°: "${j + 1}" --- "${this.arrayIdAttacks[i]['forTypePokemon'][j]}".\n`;
                    txt += `||                                                                                                   ||\n`;
                }
                txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
            }
        } else {
            txt += `||  There are not elements "attacks" in the array of avaivable attack object !!                      ||\n`;
            txt += `||                                                                                                   ||\n`;
        }
        txt += `||                                                                                                   ||\n`;
        txt += `||  ***********************************************************************************************  ||\n`;

        return txt;
    }

    static showAllAttack (parTypeArrayAttack = "generallOfAttacks") {                                     //  -->> Print of array of all attack objects in the game                                                                    
        let txt = '';
        let typeArrayAttack = [];

        if (typeof parTypeArrayAttack === 'string') {
            if (parTypeArrayAttack === "generallOfAttacks") {

                typeArrayAttack= JSON.parse(JSON.stringify(arrayGenerallOfAttacks));// -->> Clon of the arrays (objects) "arrayGenerallOfAttacks"

            } else if (parTypeArrayAttack === "avaibleAttacks") {

                typeArrayAttack= JSON.parse(JSON.stringify(arrayAvaibleOfAttacks));// -->> Clon of the arrays (objects) "arrayAvaibleOfAttacks"

            } else if (parTypeArrayAttack === "createdAttacks") {

                typeArrayAttack= JSON.parse(JSON.stringify(this.arrayIdAttacks)); // -->> Clon of the arrays (objects) "this.arrayIdAttacks"

            } else {
                console.log('|| Error:  The arguments of the method "showAttack" must be "generallOfAttacks", "avaibleAttacks" or "createdAttacks" !!');
                typeArrayAttack = null;
                txt = '';
            }
        } else {
            console.log('|| Error:  The arguments of the method "showAttack" must be a string !!');
            typeArrayAttack = null;
            txt = '';
        }
        txt += `||  ***********************************************************************************************  ||\n`;
        txt += `||                                                                                                   ||\n`;
        txt += `||                                 LIST OF POKEMON ATTACKS (${parTypeArrayAttack})\n`;
        txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
        for (let i = 0; i < typeArrayAttack.length; i++) {
            txt += `||  N°.-  ${i + 1}    Id of attack:  ${typeArrayAttack[i]['idAttack']}   ${typeArrayAttack[i]['imgAttack']}            Name of attack:  "${typeArrayAttack[i]['nameAttack']}"\n`;
            txt += `||                                                                                                   ||\n`;
            txt += `||          💰  Acquisition Value:  "${typeArrayAttack[i]['acquiValueAttack']}"      💢  Damage capacity: ${typeArrayAttack[i]['IniDamage']}       ✨  Use of magic: ${typeArrayAttack[i]['amountMagic']}\n`;
            txt += `||                                                                                                   ||\n`;
            txt += `||              Type of Pokemons that can use the attack:                                      ||\n`;
            txt += `||                                                                                                   ||\n`;
            for (let j = 0; j < typeArrayAttack[i]['forTypePokemon'].length; j++) {
                txt += `||           N°: "${j + 1}" --- "${typeArrayAttack[i]['forTypePokemon'][j]}".\n`;
                txt += `||                                                                                                   ||\n`;
            }
            txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
        }
        txt += `||                                                                                                   ||\n`;
        txt += `||  ***********************************************************************************************  ||\n`;

        return txt;
    }
}

/*
//  *****       TESTING OF ATTACK CLASS        **********************************************************
//  1.- CREATE TO TEST ATTACK OBJECT.
console.log('');
const testAttack    = new Attack( '🐕 💩 ','Dog Poo', 'Poyson', 50, 40);
console.log('');
console.log(testAttack.showAvaibleAttack ());

//  2.- MAKE SOME ATTACK OBJECTS
console.log('//     ******************************    CREATE SOME ATTACKS  ********************************       //');
console.log('||                                                                                                   ||');
const deadStar          = new Attack ('⭐ 💀','Dead Star', ['Electric'], 50, 40);
const lightning         = new Attack ('🌩 🌩', "Lightning", ['Electric'], 85, 32);                                 
const cowPoo            = new Attack ('💩 🐮', 'Cow Poo', ['Electric', 'Bug', 'Poison', 'Plant'], 50, 25);     
const voltTime          = new Attack ('🔌 🕘', "Volt Time", ['Electric', 'Fire', 'Psychic'], 40, 30);

console.log(deadStar .showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(lightning.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(cowPoo.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(voltTime .showAvaibleAttack ());
console.log('');

console.log('');
console.log(Attack.showAllAttack());
console.log('');

*/


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
            txt += `||      Pokemon create:  "${this.namePokemon }"\n`;
            txt += `||\n`; 
            txt += `||   💖 Health: "${this._healthPokemon}"                        ✨ Amount magic:  "${this.amountMagic}"\n`;
            txt += `||                                                                                                   ||\n`; 
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

    attack (idAttack, userPokemonEnemy, pokemonObjectiv) {
        let isAttackSucess = false;
        let txt = '';
        let ObjectAttack                = {};
        let ObjectTargetUserPokemon     = {};
        let ObjectTargetPokemon         = {};

        if (Pokemon.isPokemonLive (this)) {

            if ((typeof idAttack === 'number' && Number.isInteger(idAttack)) && (typeof pokemonObjectiv === 'string')) {  //  && (userPokemonEnemy instanceof Object)

                if (usersPokemons.length > 0) {
                    ObjectTargetUserPokemon = usersPokemons.find ( function (elementObjetUserPokemon) {
                        return elementObjetUserPokemon['idUserPokemon'] === userPokemonEnemy['idUserPokemon'];
                    }, this);

                    if (userPokemonEnemy['pokemonsOfUser'].length > 0) {
                        ObjectTargetPokemon = userPokemonEnemy['pokemonsOfUser'].find( function (elementPokemon) {
                            return elementPokemon['namePokemon'] === pokemonObjectiv;
                        }, this );
                    } else {
                        console.log(`||  ❌ Error: The userPokemon passed as argument to the method "attack" does not own any pokemon of his own !!`);
                        isAttackSucess = false;
                    
                        return isAttackSucess;
                    }

                } else {
                    console.log(`||  ❌ Error: The userPokemon passed as argument to the method "attack" is not in the array "userPokemons", the userPokemon does not exist in the game !!`);
                    isAttackSucess = false;
                
                    return isAttackSucess;
                }

                if (Pokemon.isPokemonLive (ObjectTargetPokemon) ) {

                    if (this.skillsOfPokemon.length > 0) { 

                        ObjectAttack = this.skillsOfPokemon.find( function (elementAttack) {
                            return elementAttack['idAttack'] === idAttack;
                        }, this );

                        if (this.typePokemon === ObjectAttack['typeAttack']) {  // If "not" it ist impossible an attack to make
                        
                            ObjectTargetPokemon['_healthPokemon'] -= ObjectAttack['IniDamage'];  // Attack succeeds, decrease of health of target pokemon
                        
                            if ( (this.amountMagic - ObjectAttack['amountMagic']) >= 0) {  // Check if you have enough magic in the pokemon to perform the attack
                                this.amountMagic -= ObjectAttack['amountMagic'];    // Expenditure of pokemon's magic in the attack
    
                                isAttackSucess = true;
                            } else {    
                                console.log(`||  ❌ Error:  The pokemon source of attack: "${this.namePokemon}", cannot perform the attack "${ObjectAttack['nameAttack']}" -- ${ObjectAttack['imgAttack']}, because it does not have enough magic. ❌`);
                                console.log('||');
                                console.log(`||  ℹ ==> Amount of magic of the pokemon: ✨ "${this.amountMagic}"  <  Amount of magic needed to perform the attack: ✨ "${ObjectAttack['amountMagic']}"`);  
                                console.log('||');
                                console.log(`||  🆘 Then it is necessary: "${ -(ObjectAttack['amountMagic'] - this.amountMagic) }" MORE MAGIC IS NEEDED !!`);
                                isAttackSucess = false;
                                
                                return isAttackSucess;
                            }
// console.log(ObjectAttack);
// console.log('ObjectAttack["IniDamage"]', ObjectAttack['IniDamage']);

                            if (ObjectTargetPokemon['_healthPokemon'] <= 0) {
                                ObjectTargetPokemon['isLive'] = false;         //  YES, IST DEAD, rest in peace !!
        
                                // 1.- Remove "dead pokemon" from pokemon object of ObjectTargetPokemon
                                const indexPokemonInSkillsOfPokemon = ObjectTargetPokemon['skillsOfPokemon'].findIndex( function (elementPokemon) {
                                    return elementPokemon['idPokemon'] === ObjectTargetPokemon['idPokemon'];
                                }, this);
                                ObjectTargetPokemon['skillsOfPokemon'].splice(indexPokemonInSkillsOfPokemon, 1); 

                                // ==>>  The reward to the pokemon !!
                                const increaseMagicPokemon =   numberRandomMinMax (15, 25)/100;   // %   increase in magic amount.
                                const increaseHealthPokemon =  numberRandomMinMax (50, 100)/100;  // %   increase in magic amount.

                                this.amountMagic        = Math.round(this.amountMagic    * (1 + increaseMagicPokemon));
                                this._healthPokemon     = Math.round(this._healthPokemon   * (1 + increaseHealthPokemon));

                                // ==>>  The reward to the user of pokemon !!
                                const increaseCapacityToAcquirePokemons     =  numberRandomMinMax (5, 15)/100;   //  %   increase in experience.
                                const increaseCapacityLearnAttacks          =  numberRandomMinMax (3, 6)/100;    //  %   increase in learning capacity.

                                this.userPro['capacityToAcquirePokemons']   = Math.round(this.userPro['capacityToAcquirePokemons'] * (1 + increaseCapacityToAcquirePokemons ));
                                this.userPro['capacityLearnAttacks']        = Math.round(this.userPro['capacityLearnAttacks'] * (1 + increaseCapacityLearnAttacks));

                                // ==>>  The punishment to the user of the target pokemon !!
                                ObjectTargetPokemon['capacityToAcquirePokemons']    = Math.round(ObjectTargetPokemon['capacityToAcquirePokemons'] * (1 - increaseCapacityToAcquirePokemons ));
                                ObjectTargetPokemon['capacityLearnAttacks']         = Math.round(ObjectTargetPokemon['capacityLearnAttacks'] * (1 - increaseCapacityLearnAttacks));
                                
                                txt += `||  ***********************************************************************************************  ||\n`;
                                txt += `||                                                                                                   ||\n`;
                                txt += `||    FIGHT ENDED.  AND THE WINNER IS:  🎉   🎊  🎆      🏆  ${this.namePokemon}      🎆 🎊  🎉  \n`;
                                txt += `||                                                                                                   ||\n`;
                                txt += `||  ***********************************************************************************************  ||\n`;

                                console.log(txt);

                                return isAttackSucess;
                            } 

                            //  The pokemon's attack is performed !!
                            txt += `||   **********************************************************************************************  ||\n`;
                            txt += `||                                                                                                   ||\n`;
                            txt += `||                                    RESULT OF THE ATTACK                                           ||\n`;
                            txt += `||                                                                                                   ||\n`;
                            txt += `||   Attack:  ${ObjectAttack['imgAttack']}  --  "${ObjectAttack['nameAttack']}"  from mein Pokemon: "${this.namePokemon}" to ➡ the "target" Pokemon: "${ObjectTargetPokemon['namePokemon']}"\n`;
                            txt += `||                                                                                                   ||\n`;
                            if (isAttackSucess && ObjectAttack && ObjectTargetPokemon) {        //  Check if everything is OK again

                                txt += `||   ❎  --  Sucess attack!! Attack "${ObjectAttack['nameAttack']}" -- ${ObjectAttack['imgAttack']}   from Pokemon "${this.namePokemon}" to the Pokemon "${ObjectTargetPokemon['namePokemon']}" was success  --  ❎ !!\n`;

                            } else {
                                isAttackSucess = false;
                            txt += `||   ❌  --  Not sucess attack!! Attack "${idAttack}" -- ${ObjectAttack['imgAttack']}   from Pokemon "${this.namePokemon}" to the Pokemon "${ObjectTargetPokemon['namePokemon']}" was not success  --  ❌ !!\n`;
                            }
                            txt += `||                                                                                                   ||\n`;
                            txt += `||   **********************************************************************************************  ||\n`;
                        }else {
                            console.log(`||  ❌ Error:  The source pokemon "${this.namePokemon}" cannot cast this attack object, because the "type of pokemon" of source pokemon and "type of attack" do not match !! ❌`);
                            isAttackSucess = false;
                
                            return isAttackSucess;
                        }
                    } else {
                        console.log(`||  ❌ Error:  The Pokemon "${this.namePokemon }" has not got any own attacks object !! ❌`);
                        isAttackSucess = false;
            
                        return isAttackSucess;
                    }
                } else {
                    console.log(`||  Error:  ❌  --  The target pokemon of the attack "${ObjectAttack['namePokemon']}" is live? "${ObjectAttack['isLive']}"  😞 `);
                    console.log('||')
                    console.log(`||     ℹ ==>  The pokemon is dead  💀, it is in pokemon heaven  🎇  and can no longer be used, rest in peace  🙏  !!`);
                    isAttackSucess = false;
                
                    return isAttackSucess;

                    //  NOTA: AQUI SE CABARIA EL JUEGO, PENSAR COMO
                }
            }  else {
                console.log('||  Error:  The arguments of the method "attack" must be: "idAttack" an integer number, "userPokemonEnemy" an object UserPokemon and "pokemonObjectiv" an string!!');
                isAttackSucess = false;

                return isAttackSucess;
            }
        } else {
            console.log(`||  Error:  ❌  --  The origin pokemon of the attack "${this.namePokemon}" is live? "${this.isLive}"  😞  .  
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

    static isPokemonLive (parPokemon) {
        let txt = '';
        let isPokemonLive = true; 

        if (typeof parPokemon === 'object' && parPokemon instanceof Pokemon) {

            txt += `||   **********************************************************************************************  ||\n`;
            txt += `||                                                                                                   ||\n`;
            txt += `||                               INFORMATION OF THE POKEMON IN FIGHT                                 ||\n`; 
            txt += `||                                                                                                   ||\n`;
            
            if (parPokemon['isLive'] === true) {
                txt += `||  ℹ ==> The pokemon ${parPokemon['namePokemon']} is live??  "${parPokemon['isLive']}"   😃, YES, it is!!\n`;
                txt += '||\n';
                txt += `||  💖  Health: ${parPokemon['_healthPokemon']}      ✨  Amount Magic:  "${parPokemon['amountMagic']}"   "${parPokemon['userPro']['nameUser']}"\n`;
                
                isPokemonLive = 'true'
            }else {
                parPokemon['_healthPokemon'] = 0;
                txt += `||  ℹ ==> The pokemon ${parPokemon['namePokemon']} is live??  "${parPokemon['isLive']}"   It is unfortunately dead  💀 😫!!\n`;
                txt += '||        It is in pokemon heaven  🎇  and can no longer be used, rest in peace  🙏 😇 !!\n';
                txt += `||  💖  Health: ${parPokemon['_healthPokemon']}      ✨  Amount Magic:  "${parPokemon['amountMagic']}"\n`;

                isPokemonLive = 'false';
            } 
            txt += `||                                                                                                   ||\n`;
            txt += `||   **********************************************************************************************  ||\n`;
        } else {
            console.log('||  Error: The argument of method static "isPokemonLive" must be an object of the class Pokemon!!');
            isPokemonLive = null;
        }
        console.log(txt);

        return isPokemonLive;
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

/*
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

// 4.-  LEARN AND ACQUIRE AN ATTACK
console.log('//     ********    4.- THE POKEMON LEARNS AND ACQUIRE AN ATTACK                        **********    ||');
console.log('');

console.log('//     ********    4.1- FIRST: CREATE SOME ATTACKS.                                    **********    ||');
console.log('');

const superlightning    = new Attack('🌩 🌩', "Super Lightning", ['Electric'], 85, 32);                                 
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
console.log(Attack.showAllAttack());
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  ****        3.-  Class USERPOKEMON 
/*
1.- Properties of object UserPokemon:

    1.1.- idUserPokemon:                            number integer, unique identifier number of the UserPokemon object.
    1.2.- _imagesUser:                              string, image of the UserPokemon.
    1.3.- nameUser:                                 string, name of the UserPokemon.
    1.4.- experience:                               array, first element "string" (experience) and second element: value of experience level of the UserPokemon object.
    1.5.- pokemonsOfUser:                           array of "own Pokemons object" of the UserPokemon object.
    1.6.- capacityLearnAttacks:                     integer number, level of capacity to learn the different "attacks" of the user Pokemon, measures the level so 
                                                    that the user can teach the Pokemon the different attacks to use in the fight.
    1.7.- capacityToAcquirePokemons:                integer number, acquisition value of the user to be able to acquire Pokemons objects.
    1.8.- _attacksLearndSkill:                      array of the different "attack" objects that the UserPokemon object has learned and acquired, with them you can 
                                                    transfer them to your own Pokemon objects.
    1.9.- AcquisitionIniCapacity:                   integer number, a random initial level of the UserPokemon object to be able to acquire the different Pokemon 
                                                    (its acquisition value), that later will be modified according to different variables (properties of the object) 
                                                    of the user.

2.- Pokemon methods:

    2.1.- completeUserProperties (parExperience):   method that completes the "pacityLearnAttacks" properties (randomly), the "capacityToAcquirePokemons" property 
                                                    (weighting the user experience and the "capacityToAcquirePokemons" property (weighting the user experience and 
                                                    arrayOfAvaibleRandomPokemons the "_attacksLearndSkill" property), and the "capacityToAcquirePokemons" property (adding a weighted coefficient 
                                                    of "capacityLearnAttacks", "arrayGenerallOfPokemons.length" and "usersPokemons.length") of the "UserPokemon" object.


    2.2.- selectPokemon (parTypeSearch, parIdPokemon):  method that selects and acquires pokemon (indicated by the value of the "parIdPokemon" parameter) "out of 
                                                        "arrayGenerallOfPokemons" (if the "parTypeSearch" parameter has the value "out") in order to acquire it and 
                                                        add it to its internal array of Pokemons ("pokemonsOfUser") or selects a pokemon "internal" of
                                                        "this.pokemonsOfUser" (if the "parTypeSearch" parameter has the value "own") for the Pokemon battle.  
arrayOfAvaibleRandomPokemons    Returns the selected pokemon object: "resultObjectPokemon".
    
    2.3.- learnAttackSkill (...parObjectAttack):    method that collects different values in the parameter: "parObjectAttack" (Attack objects already created 
                                                    in the program), to learn them and store them inside its matriy of learned and acquired attack method 
                                                    ability properties: "_attacksLearndSkill".

                                                    A "UserPokemon" object can collect any number of "Attack" objects. 

                                                    At first, when a "UserPokemon" object is created, it has neither owned "Pokemon" objects 
                                                    ("pokemonsOfUser = []"), nor learned any Pokemon's fighting and attacking skills, ("_attacksLearndSkill = []").
                                                    A pokemon has no skills when it is created, ("this._skills = [];").

                                                    This method allows the "UserPokemon" object to "learn" that attack ability and then "teach" it and "pass" 
                                                    iarrayOfAvaibleRandomPokemonst to a Pokemon object of its own, within its array of "" properties, so that the Pokemon object can use 
                                                    that attack in a "fightbetweenPokemons" object against its opponent Pokemon.

                                                    Therefore, you must use your own method "learnAttackSkill (...parObjectAttack)" to learn and acquire the 
                                                    knowledge of a Pokemon "attack", so you can pass it to a Pokemon of your property (that exists inside your 
                                                    array property "pokemonsOfUser") with the method: "passToPokemonAttack (parNameAttack, parIdPokemon)".

    2.4.- passToPokemonAttack (parNameAttack, parIdPokemon):  method that passes an "attack" object (indicated by the parameter "parNameAttack"), learned 
                                                              and acquired by the "userPokemon", to a "Pokemon" object of its property, that is to say that 
                                                              it is in its property array "pokemonsOfUser".

                                                              The target "Pokemon" object of the "attack" object must be of the "pokemon type" that allows 
                                                              to use the "attack" object, i.e. the value of the "attack" object property: "_typeAttack" must 
                                                              match the value of the "pokemon type property" ("typePokemon") of the target "Pokemon" object.
    
    2.5.- giveMagicToPokemon(parAmountMagic, parIdOwnTargetPokemon):    method of a "UserPokemon" object that transmits the order to a "pokemon" object within 
                                                                        its "own" array of Pokemon objects "this.pokemonsOfUser", specifically to the "Pokemon" 
                                                                        object that is currently "active", to increase its amount of magic (value of the property 
                                                                        of the pokemon object), giving it the amount of magic to increase.

    2.6.- trainigPokemon (parIdPokemon):

    2.7.- showSkill():

    2.8.- showOwnPokemon ():

    2.9.- showStatus ():

*/

class UserPokemon {         //  Class USERPOKEMON  <<==||  has 4 parameters: idUserPokemon, nameUser, experience, pokemonsOfUser = []  //
    constructor (idUserPokemon, nameUser, experience, pokemonsOfUser = []) {
        this.idUserPokemon                  = idUserPokemon;                // ==> number integer, "unique identifier number" of the UserPokemon object.
        this._imagesUser                     = '';                          //  ==> string, image of the UserPokemon.
        this.nameUser                       = nameUser;                     //  ==> string, name of the UserPokemon.
        this.experience                     = experience;                   //  ==> array, first element "string" (experience) and second element: value of experience level of the UserPokemon object.
        this.pokemonsOfUser                 = pokemonsOfUser;               //  ==> array of "own Pokemons object" of the UserPokemon object.

        this.capacityLearnAttacks           = 0;                            //  ==> integer number, level of capacity to learn the different "attacks" of the user Pokemon
        this.capacityToAcquirePokemons      = 0;                            //  ==> integer number, acquisition value of the user to be able to acquire Pokemons objects.
        this._attacksLearndSkill            = [];                           //  ==> array of the different "attack" objects that the UserPokemon object has learned and acquired
        this.AcquisitionIniCapacity         = numberRandomMinMax (200, 500);

        this.completeUserProperties (this.experience[1]);
    }

    completeUserProperties (parExperience) {
        const numberRandonImageUserPokemon  = numberRandomMinMax (0, imagesUser.length);
        const numberRandomUserExp           = numberRandomMinMax (10, 20);

        this._imagesUser                    = imagesUser[numberRandonImageUserPokemon];
        this.capacityLearnAttacks           = Math.round( 0.3 * (Math.pow(parExperience, 2) * numberRandomUserExp) / (this._attacksLearndSkill.length + 1));
        this.capacityToAcquirePokemons      = this.AcquisitionIniCapacity + Math.round( 0.15 * this.capacityLearnAttacks  * arrayGenerallOfPokemons.length / (usersPokemons.length + 1));
    }
    
    pokemonBelongsToUser (parPokemonObject) {
        let isBelongsToUser = false;

        if (typeof parPokemonObject === 'object' && parPokemonObject instanceof Pokemon) {
            parPokemonObject = this;
        } else {
            console.log ('||  Error: The argument of the method "pokemonBelongsToUser" must be a object "Pokemon"!!');
            isBelongsToUser = false;
        }
        return isBelongsToUser;
    }
    
    addOutPokemonToUser (parObjectPokemon) {
        let txt = '';
        let isAddPokemon = false;

        if (typeof parObjectPokemon === 'object' && parObjectPokemon instanceof Pokemon) {
            txt += `||  ***********************************************************************************************  ||\n`;
            txt += `||                                                                                                   ||\n`;
            if (this.capacityToAcquirePokemons - parObjectPokemon['acquisitioValue'] >= 0) {
                this.capacityToAcquirePokemons -= parObjectPokemon['acquisitioValue'];
                this.pokemonBelongsToUser (parObjectPokemon);
                parObjectPokemon['userPro'] = this;
                this.pokemonsOfUser.push(parObjectPokemon);
                isAddPokemon = true;
                txt += `||  The Pokemon "${parObjectPokemon['namePokemon']}" has been added successfully ✅ to user: ${this._imagesUser} - "${this.nameUser}" !!\n`;
            } else {
                txt += `||  The user: ${this._imagesUser} - "${this.nameUser}" does not has ❌ enough "acquisition value" 💰 to be able to acquire the Pokemon "${parObjectPokemon['namePokemon']}" !!\n`;
                isAddPokemon = false;
            }
            txt += `||                                                                                                   ||\n`;
            txt += `||  ***********************************************************************************************  ||\n`;
            console.log(txt);
        } else {
            console.log('||  Error:  The argument of the method "addOutPokemonToUser" must be a object of the class "Pokemon" !!');
            isAddPokemon = false;
        }
        
        return isAddPokemon;
    }

    selectPokemon (parTypeSearch, parIdPokemon) {    //  parTypeSearch = "own" --> "Select" and acquire pokemon external"out",
                                                     //  the pokemon ist intro the array  "arrayOfAvaibleRandomPokemons".
                                                     //  parTypeSearch = "out" --> "Select" and acquire pokemon external"out",
                                                     //  the pokemon ist intro the array  "arrayGenerallOfPokemons".                                        
        let isSelectPokemon = false;
        let resultObjectPokemon = {};

        function pokemonSuccessAcquisition (parIsAcquisition, parNamePokemon) {
            let txt = '';

            txt += `||  ***********************************************************************************************  ||\n`;
            txt += `||                                                                                                   ||\n`;
            if (typeof parTypeSearch === 'string' && parNamePokemon === 'string') {
                if (parIsAcquisition === 'yes' && this.pokemonsOfUser.length > 0) {

                    const isTherePokemon = this.pokemonsOfUser.find ( function (element) {
                        return element['namePokemon'] === parNamePokemon;
                    }, this);

                    if (isTherePokemon) {
                        txt += `||  The Pokemon "${parNamePokemon}" has been selected successfully !!\n`;
                    } else {
                        txt += `||  You don't have that Pokemon yet !!                                                               ||\n`;
                    }
                } else if (parIsAcquisition === 'not' && this.pokemonsOfUser.length > 0) {
                    txt += `||  There is not enough money to purchase the Pokemon. !!                                            ||\n`;
                }
            } else {
                txt += `||  The Pokemon "${parNamePokemon}" has been selected successfully !!\n`;
            }
            txt += `||                                                                                                   ||\n`;
            txt += `||  ***********************************************************************************************  ||\n`;

            return console.log(txt);
        }

        if (typeof parTypeSearch === 'string' ) {

            if ( parTypeSearch === 'own') {           //  <==|| Select the "internal" (arrayOfAvaibleRandomPokemons) Pokemon for battle
                if (typeof parIdPokemon === 'number') {
                    if (this.pokemonsOfUser.length > 0) {   // There is at least a intern Pokemon in the UserPokemon object
                        resultObjectPokemon = this.pokemonsOfUser.find( function (elementPokemon) {
                           return elementPokemon['idPokemon'] === parIdPokemon;
                        }, this);

                       // console.log('🆘 🆘 🆘 🆘 ************* ACHTUNG!!!!resultObjectPokemon:   ', resultObjectPokemon);          //  <<==||  QUITAR

                    } else {
                        console.log(`||  Error:  The Master User "${this._imagesUser}" "${this.nameUser}" does not have any Pokemon!!'`);
                        isSelectPokemon = false;
                    }
                } else {
                    console.log(`||  Error:  The arguments of the function "selectPokemon - own" must be an integer number !!`);
                    isSelectPokemon = false;
                }

            } else if (parTypeSearch === 'out') {                                                       //  <==|| Select external Pokemon
                if (typeof parIdPokemon === 'number' && Number.isInteger(parIdPokemon) && parIdPokemon < arrayGenerallOfPokemons.length) {
                        resultObjectPokemon = arrayGenerallOfPokemons.find( function (elementPokemon) {
                            return elementPokemon['idPokemon'] === parIdPokemon;
                        }, this);

                        Object.defineProperties(resultObjectPokemon, {
                                "_healthPokemon"    :   {
                                                            value           : numberRandomMinMax (40, 200),
                                                            writable        : true
                                },
                                "_magicPokemon"     :   {
                                                            value           : numberRandomMinMax (10, 150),
                                                            writable        : true
                                },
                                "_skillsOfPokemon"  :   {
                                                            value           : [],
                                                            writable        : true
                                }
                        });
                        if (! resultObjectPokemon) {      // There is not Pokemon (elementPokemon.idPokemon === parIdPokemon)
                            console.log(`||  Error:  There is not Pokemon with this id: "${parIdPokemon}"!!`);
                            resultObjectPokemon = {};
                        } else {

                            if (this.capacityToAcquirePokemons >=  resultObjectPokemon['acquisitioValue']) {
                                this.capacityToAcquirePokemons -=  resultObjectPokemon['acquisitioValue'];
                                this.pokemonBelongsToUser (resultObjectPokemon);
                                this.pokemonsOfUser.push(resultObjectPokemon);          //  <==||  I acquire the Pokemon en my array "pokemonsOfUser" 

                                pokemonSuccessAcquisition ('yes', resultObjectPokemon['namePokemon']);
                            } else {
                                pokemonSuccessAcquisition ('not', resultObjectPokemon['namePokemon']);
                            }
                        }
                } else {
                    console.log(`||  Error:  The arguments of the function "selectPokemon" must be an integer less that ${arrayTypePokemons.length} !!'`);
                    isSelectPokemon = false;;
                }
            }
        } else {
        console.log(`||  Error:  The argument of the method "selectPokemon" must be an string!!'`);
        isSelectPokemon = false;
        }
        return isSelectPokemon;
    }

    learnAttackSkill (...parObjectAttack) {
        let txt= '';
        let attackSkillLearnt = false;                  //  <<==||  variable is the "Attack" object learnd or not?
        let objectAttack = {};

        if (Array.isArray (parObjectAttack)) {       
            for (const parameterObject of parObjectAttack) {
                if (typeof parameterObject === 'object') {
                    objectAttack = arrayAvaibleOfAttacks.find ( function (itemAttack) {      //  <==||  arrayAvaibleOfAttacks is the array avaible 
                                                                                             //         of objects - "Attack" in the game
                        return parameterObject['nameAttack'] === itemAttack['nameAttack'];
                    }, this );
    
                    txt += `||  ***********************************************************************************************  ||\n`;
                    txt += '||                                                                                                   ||\n';
                    if (objectAttack) {
                        this._attacksLearndSkill.push(objectAttack);                        //  <==||  The attack ("objectAttack") is "learning" by the user
                        attackSkillLearnt = true;
                        txt += `||  ❎  The attack "${objectAttack['imgAttack']}" -- "${objectAttack['nameAttack']}" has been acquired by the user: "${this.nameUser}"!!  ❎\n`;
                    } else {
                        txt += `||  ❌  The attack "${objectAttack['imgAttack']}" -- "${objectAttack['nameAttack']}" has not been acquired by the user: "${this.nameUser}"!!  ❌\n`;
                    }
                } else {
                    console.log('|| Error:  The argument of the method "learnAttackSkilL" must be a object - Attack!!');
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
    
    passToPokemonAttack (parNameAttack, parIdPokemon) {
        let txt= '';
        let attackSkillPass         = false;                  //  <<==||  variable BOOLEAN ,is the "Attack" object passed or not?
        let objectAttack            = {};
        let objectTargetPokemon     = {};

        if (typeof parNameAttack === 'string' && typeof parIdPokemon === 'number' && Number.isInteger(parIdPokemon)) {

            txt += `||  ***********************************************************************************************  ||\n`;
            txt += '||                                                                                                   ||\n';
            objectAttack =  this._attacksLearndSkill.find ( function (itemAttack) {
                return itemAttack['nameAttack'] === parNameAttack;
            }, this);

            objectTargetPokemon = this.pokemonsOfUser.find( function (elementPokemon) {
                return elementPokemon['idPokemon'] === parIdPokemon;
            }, this);

            if (typeof objectAttack === 'object' && objectAttack instanceof Object) {
                
                for (let i = 0; i < objectAttack['forTypePokemon'][0].length; i++) {
                    if (objectAttack['forTypePokemon'][0][i] === objectTargetPokemon['type'][0]) {
                        objectTargetPokemon["skillsOfPokemon"].push(objectAttack);
                        attackSkillPass = true;

                        txt += `||  Has the attack "${objectAttack['nameAttack']}" - ${objectAttack['imgAttack']}  been passed to the target pokemon "${objectTargetPokemon['namePokemon']}"?    "${attackSkillPass}" !!\n`;
                        txt += '||                                                                                                   ||\n';
                        txt += `||  ***********************************************************************************************  ||\n`;
                        console.log(txt);

                        return attackSkillPass;
                    }
                }
            } else {
                console.log('|| Error:  There is not an "Attack" object in the property "pokemonsOfUser" of the "userPokemon" !!');
                attackSkillPass = false;
            }
        } else {
            console.log('|| Error:  The arguments of the method "passToPokemonAttack" must be a parNameAttack a string and parIdPokemon an integer number!!\n');
            attackSkillPass = false;
        }
        txt += `||  Has the attack "${objectAttack['nameAttack']}" been passed to the target pokemon "${objectTargetPokemon['namePokemon']}"?    "${attackSkillPass}" !!\n`;
        txt += '||                                                                                                   ||\n';
        txt += `||  ***********************************************************************************************  ||\n`;
        console.log(txt);

        return attackSkillPass;
    }

    giveMagicToPokemon(parAmountMagic, parIdOwnTargetPokemon) {
        let txt = '';
        let magicPassedToPokemon = false;
        let pokemonTarget = {};

        txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
        txt += `||                                                                                                   ||\n`;
        if ( (typeof parAmountMagic === 'number' && Number.isInteger(parAmountMagic) )  && 
             (typeof parIdOwnTargetPokemon === 'number' && Number.isInteger(parIdOwnTargetPokemon)) ) {
            if (this.experience[1] >= 1 && parAmountMagic > 0 ) {
                if (this.pokemonsOfUser.length > 0) {
                    
                    pokemonTarget = this.pokemonsOfUser.find( function (elementPokemon) {
                        return elementPokemon['idPokemon'] === parIdOwnTargetPokemon;
                    });

                    if (pokemonTarget['idPokemon'] === parIdOwnTargetPokemon) {

                        // console.log('After -- pokemonTarget["amountMagic"]:   ', pokemonTarget['amountMagic']);
                        // console.log('');
                        pokemonTarget['amountMagic'] += parAmountMagic;

                        // console.log('After -- pokemonTarget["amountMagic"]:   ', pokemonTarget['amountMagic']);

                        magicPassedToPokemon = true;
                    } else {
                        magicPassedToPokemon = false;
                    }
                } else {
                    console.log(`|| Error:  There is not element Pokemon object own in the user:  ${this._imagesUser}  "${this.nameUser}"`);
                    magicPassedToPokemon = false;
                    pokemonTarget = null;
                }
            } else {
                console.log(`|| Error:  The user:  ${this._imagesUser}  "${this.nameUser}"  does not have enough experience to be able to pass magic to his Pokemon`);
                magicPassedToPokemon = false;
                pokemonTarget = null;
            }
        } else {
            console.log(`||  Error: The arguments of the method "giveMagicToPokemon" must be a integer number !!`);
            magicPassedToPokemon = false;
            pokemonTarget = null;
        }
        txt += `||  The amount of magic: "${parAmountMagic}" has been given to the pokemon: "${pokemonTarget['namePokemon']}" ? "${magicPassedToPokemon}".\n`;
        txt += `||                                                                                                   ||\n`;
        txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;

        return txt;
    }

    // trainigPokemon (parIdPokemon) {

    // }

    showSkill() {
        let txt = '';

        if (this._attacksLearndSkill.length > 0) {
            txt += `||  ***********************************************************************************************  ||\n`;
            txt += `||  Attacks Skills of User:  ${this.nameUser}\n`;
            txt += `||                                                                                                   ||\n`;
            txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
            for (const itemAttack of this._attacksLearndSkill) {
                txt += `||  Id of attack: ${itemAttack['idAttack']}     --      ${itemAttack['imgAttack']}      Name of attack: "${itemAttack['nameAttack']}"\n`;  
                txt += `||                                                                                                   ||\n`;  
                txt += `||  Acquisition Value: "${itemAttack['acquiValueAttack']}"          Damage: "${itemAttack['IniDamage']}"        Magic use: "${itemAttack['amountMagic']}"\n`;
                txt += `||                                                                                                   ||\n`;
                txt += `||  Type of attack:                                                                                  ||\n`;
                txt += `||                                                                                                   ||\n`;
                
                //console.log('itemAttack["forTypePokemon"]:     ', itemAttack['forTypePokemon']);
                
                if (itemAttack['forTypePokemon'].length > 0) {
                    for(let i = 0; i < itemAttack['forTypePokemon'].length; i++) {
                        txt += `||    N°: ${i + 1}      --      ${itemAttack['forTypePokemon'][i]}\n`;
                        txt += `||                                                                                                   ||\n`;
                    }
                } else {
                    txt += `||  There are not type attack.                                                                       ||\n`;
            }
            txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
            }
        } else {
            txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
            txt += `||          The user ${this.nameUser} has not attacks!!\n`;
            txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
        }
        
        return txt;
    }

    showOwnPokemon () {
        let txt = '';

        if ( this.pokemonsOfUser.length > 0) {
            txt += `||  ***********************************************************************************************  ||\n`;
            txt += `||  Own user's Pokemons:  ${this.nameUser}\n`;
            txt += `||                                                                                                   ||\n`;
            txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
            for (const itemPokemon of this.pokemonsOfUser) {
                txt += `||  Id of Pokemon: ${itemPokemon['idPokemon']} --  Name of Pokemon: "${itemPokemon['namePokemon']}"  --  Type of Pokemon: "${itemPokemon['type']}" -- Level:  ${itemPokemon['level']}\n`;  
                txt += `||                                                                                                   ||\n`; 
                txt += `||  Health: 💖  "${itemPokemon['_healthPokemon']}"     ✨  Amount of magic: "${itemPokemon['amountMagic']}"   💰  Acquisition Value of Pokemon: "${itemPokemon['acquisitioValue']}"\n`;
                txt += `||                                                                                                   ||\n`;
                txt += `||  🐣  Evolution: "${itemPokemon['evolution']}"\n`;
                txt += `||                                                                                                   ||\n`;
                txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
                txt += `||  Weaknesses of Pokemon:                                                                           ||\n`;
                txt += `||                                                                                                   ||\n`;

                if (itemPokemon['weakness'].length > 0) {
                    for(let i = 0; i < itemPokemon['weakness'].length; i++) {
                        txt += `||    N°: ${i + 1} -- ${itemPokemon['weakness'][i]}\n`;
                        txt += `||                                                                                                   ||\n`;
                    }
                } else {
                    txt += `||  There are not weaknesses in Pokemon.                                                             ||\n`;
                }
                txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;

                if (itemPokemon['skillsOfPokemon'].length > 0) {
                    txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
                    txt += `||  Skill of Attacks:                                                                                ||\n`;
                    txt += `||                                                                                                   ||\n`;
                    // console.log(this.skillsOfPokemon)
        
                    for (const itemAttack of itemPokemon['skillsOfPokemon']) {
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
            }
        } else {
            txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
            txt += `||          The user ${this.nameUser} has not got Pokemons!\n`;
            txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
        }
        txt += `||  ***********************************************************************************************  ||\n`;

        return txt;
    }

    showStatus () {
        let txt = '';
        
        txt += `||  ***********************************************************************************************  ||\n`;
        txt += `||           Status of User:      ${this._imagesUser}  -- "${ this.nameUser}" --  ${this._imagesUser}\n`;
        txt += `||                                                                                                   ||\n`;
        txt += `||  Id of User: ${this.idUserPokemon}  -- Name: "${this.nameUser}"    Experience: ${this.experience[0]} - ${this.experience[1]}\n`
        txt += `||                                                                                                   ||\n`;
        txt += `||  Capacity for Learn Attacks: "${this.capacityLearnAttacks}"                          Capacity to acquire Pokemons: "${this.capacityToAcquirePokemons}"\n`;
        txt += `||                                                                                                   ||\n`;
        txt +=  this.showSkill();
        txt += this.showOwnPokemon ();

        return txt;
    }
}


//  1.1-  Random Creation of Users of Pokemon:                                                                                                                //
//  **************** USER RANDOM POKEMONS (OBJECT WITH 4 PROPERTIES: USERID, FULLNAME, EXPERIENCIE, POKEMONS          <<==||
let userID = 0;
function createUserPokemon (parUserId = 0)                 {       //      CREATE USERS MASTER_POKEMON RANDOM FOR TESTING!!
    userID++;
  
    const indexRandomFirstName              = numberRandomMinMax  (0, userFirstName.length);
    const indexRandomLastName               = numberRandomMinMax  (0, userLastName.length);
    const indexRandomExperiencie            = numberRandomMinMax  (0, experiencieArray.length);
  
    const userFullName              = userLastName[indexRandomLastName ] + ', ' + userFirstName[indexRandomFirstName];
    const userExperiencie           = experiencieArray[indexRandomExperiencie];
  
    const userPokemonRandom = new UserPokemon(userID, userFullName, userExperiencie);
    
    return userPokemonRandom;
}

function showUsersPokemon (parUsersRandomPokemons) {
    let txt = '';

    txt += `||  ***********************************************************************************************  ||\n`;
    txt += `||                                RANDOM USERS - CREATE AND AVAIBLE:                                 ||\n`;
    txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
    txt += `||                                                                                                   ||\n`;
    if (Array.isArray(parUsersRandomPokemons)) {
        if (parUsersRandomPokemons.length > 0 ) {
            for (let i = 0; i < parUsersRandomPokemons.length; i++) {
                txt += `||  N°:  "${i + 1}"     IdUser: ${parUsersRandomPokemons[i]['idUserPokemon']}              ${parUsersRandomPokemons[i]['_imagesUser']}  Name: "${parUsersRandomPokemons[i]['nameUser']}"   Experience:  ${parUsersRandomPokemons[i]['experience'][0]} - ${parUsersRandomPokemons[i]['experience'][1]}\n`
                txt += '|| \n';
                txt += `||  Capacity of Learn Attacks : ${parUsersRandomPokemons[i]['capacityLearnAttacks']}     💰 Capacity of acquisition of Pokemons: "${parUsersRandomPokemons[i]['capacityToAcquirePokemons']}"\n`;
                txt += '|| \n';
                txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
                txt += `||  Skill of Attacks:                                                                                ||\n`;
                txt += `||                                                                                                   ||\n`;
                if (parUsersRandomPokemons[i]['_attacksLearndSkill'].length > 0) {
                    for(let j = 0; j < parUsersRandomPokemons[i]['_attacksLearndSkill'].length; j++) {
                        txt += `||  N°: ${j + 1} -- Id: ${parUsersRandomPokemons[i]['_attacksLearndSkill'][j]['idAttack']}   ${parUsersRandomPokemons[i]['_attacksLearndSkill'][j]['imgAttack']}    Name: "${parUsersRandomPokemons[i]['_attacksLearndSkill'][j]['nameAttack']}"    Acquisition Value: ${parUsersRandomPokemons[i]['_attacksLearndSkill'][j]['acquiValueAttack']}    Damage: ${parUsersRandomPokemons[i]['_attacksLearndSkill'][j]['IniDamage']}    Magic: ${parUsersRandomPokemons[i]['_attacksLearndSkill'][j]['amountMagic']}\n`;
                        txt += `||                                                                                                   ||\n`;
                        txt += `||  For Type Pokemon:  "${parUsersRandomPokemons[i]['_attacksLearndSkill'][j]['forTypePokemon']}"\n`;
                    }
                } else {
                    txt += `||  There are not skill of attacks.  !!                                                              ||\n`;                    
                }
                txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
                txt += `||                                                                                                   ||\n`;
                txt += `||  Pokemons of User:                                                                                ||\n`;
                txt += `||                                                                                                   ||\n`;
                if (parUsersRandomPokemons[i]['pokemonsOfUser'].length > 0) {
                    for(let k = 0; k < parUsersRandomPokemons[i]['pokemonsOfUser'].length; k++) {
                        txt += `||    N°: ${k + 1} -- ${parUsersRandomPokemons[i]['pokemonsOfUser'][k]['namePokemon']}\n`;
                        txt += `||                                                                                                   ||\n`;
                    }
                } else {
                    txt += `||  The user has not got Pokemons.  !!    😩                                                          ||\n`;
                }
                txt += `||                                                                                                   ||\n`;
                txt += `||  ***********************************************************************************************  ||\n`;
            }             
        } else {
            txt += '||  There are any Users avaible !!                                                                   ||\n';
        }
    } else {
        console.log('|| Error:  The argument of the function "showUsersPokemon" must be a array!!');
    }
    txt += `||                                                                                                   ||\n`;
    txt += `||                              There are  "${parUsersRandomPokemons.length}" Users avaible !! 😀                                 ||\n`;
    txt += `||  ***********************************************************************************************  ||\n`;

    return txt;
}


/*


//  *****       TESTING OF USERPOKEMON CLASS        **********************************************************
//  1.-  CREATE USERS OF POKEMON (SOME RANDOM USERS AND ME: myUserMasterPokemon)
console.log('');
//  1.- CREATE USERS OF POKEMON (SOME RANDOM USERS AND ME: myUserMasterPokemon)
console.log('');
console.log('||     ******************    1, 2.-  CREATE POKEMON PIKACHU AND BULBASAUR     ******************     ||');
console.log('//  1.-  CREATE USERS OF POKEMON (SOME RANDOM USERS AND ME: myUserMasterPokemon)');
console.log('');
const myUserMasterPokemon = new UserPokemon (0, 'Fernandez Verdu, Jose Antonio', ['very experienced', 8 ]);
myUserMasterPokemon['_imagesUser'] = '🤡';
console.log(myUserMasterPokemon.showStatus ());

// Users Pokemons Random
console.log('//   ****   CREATE SOME RANDOM USERPOKEMON OBJECT (1 - 5) AND ADD A THE ARRAY "usersPokemons"   **** //');
console.log('');
const randomOfUsersOfPokemons  = numberRandomMinMax  (1, 5);
for (let i = 0; i < randomOfUsersOfPokemons; i++) {
   usersPokemons.push(createUserPokemon () );
}
console.log(showUsersPokemon (usersPokemons));
console.log('');


//  2.- CREATE RANDOM POKEMONS. I make a array of Object-Pokemons.

console.log('//     ********    2.- CREATE RANDOM POKEMONS. I make a array of Object-Pokemons       ***********');
console.log('');

const numPokemons = numberRandomMinMax (4, 10);
createPokemons(numPokemons);
//console.log(Pokemon.showArrayAvaibleOfPokemon (arrayOfAvaibleRandomPokemons));
console.log('');


//  3.- ADD SOME POKEMONS TO THE USERS RANDOM OF POKEMONS (randomOfUsersOfPokemons)
console.log('//     ********   3.- ADD SOME POKEMONS TO THE RANDOM USERS (randomOfUsersOfPokemons)  *********     ||');
console.log('');

console.log('||  There are  "', arrayOfAvaibleRandomPokemons.length - 1, '" avaible Pokemons. !!  📋');
console.log('');
for (let i = arrayOfAvaibleRandomPokemons.length - 1; i >= 0; i--) {
    const randomAvaibleUser = numberRandomMinMax  (0, usersPokemons.length);

    console.log(`||  User:  "${usersPokemons[randomAvaibleUser]['nameUser']}"  ${usersPokemons[randomAvaibleUser]['_imagesUser']}     Quantity available to acquire pokemons:  ${usersPokemons[randomAvaibleUser]['capacityToAcquirePokemons']}  💰`);
    console.log('||');
    console.log('||  Value of the pokemon:  😳', arrayOfAvaibleRandomPokemons[i]['acquisitioValue']);
    console.log('||');
    if (usersPokemons[randomAvaibleUser]['capacityToAcquirePokemons'] >= arrayOfAvaibleRandomPokemons[i]['acquisitioValue']) {
        console.log('||  --------------------------------------------------------------------------------------------------------------------  ');  
        console.log('||  1️⃣  Before capacityToAcquirePokemons:  ', usersPokemons[randomAvaibleUser]['capacityToAcquirePokemons']);
        console.log('||');
        usersPokemons[randomAvaibleUser]['capacityToAcquirePokemons'] -= arrayOfAvaibleRandomPokemons[i]['acquisitioValue'];
        console.log('||  2️⃣  After capacityToAcquirePokemons:  ', usersPokemons[randomAvaibleUser]['capacityToAcquirePokemons']);
        console.log('||');
        console.log(`||  UserPokemon:   ${usersPokemons[randomAvaibleUser]['_imagesUser']}  "${usersPokemons[randomAvaibleUser]['nameUser']}"  has acquired ✅ the pokemon: "${arrayOfAvaibleRandomPokemons[i]['namePokemon']}" by "${arrayOfAvaibleRandomPokemons[i]['acquisitioValue']}" 💵.`);
        console.log('||  --------------------------------------------------------------------------------------------------------------------  '); 
        
        //  poner que el pokemon: arrayOfAvaibleRandomPokemons[i] pertenece al usuario:  usersPokemons[randomAvaibleUser]['pokemonsOfUser']

        usersPokemons[randomAvaibleUser]['pokemonsOfUser'].push(arrayOfAvaibleRandomPokemons[i]);
        console.log('')
            
    } else {
        console.log(`||  The user:  ${usersPokemons[randomAvaibleUser]['_imagesUser']}  "${usersPokemons[randomAvaibleUser]['nameUser']}"  cannot acquire ❌ the pokemon:  "${arrayOfAvaibleRandomPokemons[i]['namePokemon']}" by "${arrayOfAvaibleRandomPokemons[i]['acquisitioValue']}" 💵.`);
    }
    arrayOfAvaibleRandomPokemons.pop();
}
    console.log('');
    console.log('||  -----------------------------------------------------------------------------------------------  ||');
    console.log('||     Final array of available pokemon:  ', arrayOfAvaibleRandomPokemons, ' 0️⃣                                                     ||');
    console.log('||  --------------------------------------------------------------------------------------- -------  ||');
    console.log('');
    console.log(`||     Show user Pokemons:  `);
    console.log(showUsersPokemon (usersPokemons));
    console.log('||');
    //console.log(usersPokemons);


//  4.- MAKE SOME ATTACK OBJECTS
console.log('//     ********************        4.- MAKE SOME ATTACK OBJECTS        *************************     ||');
console.log('');

const deadStar          = new Attack ( '⭐','Dead Star', ['Electric'], 50, 40);
const lightning         = new Attack ('🌩', "Lightning", ['Electric'], 85, 32);                                  
const cacaDeVaca        = new Attack ('💩', 'Caca De Vaca', ['Electric', 'Bug', 'Poison', 'Plant'], 50, 25);     
const voltTime          = new Attack ('🔌', "Volt Time", ['Electric', 'Fire', 'Psychic'], 40, 30);
const notPass           = new Attack ( '⛔','Do Not Pass', ['Poison', 'Plant', 'Ice', 'Psychic', 'Fire'], 60, 31);
const cursedShark       = new Attack ('🦈', "Cursed Shark", ['Poison', 'Plant', 'Ice', 'Psychic'], 85, 32);                                 
const coronaVaccine     = new Attack ('💉', 'Corona Vaccine', ['Electric', 'Bug', 'Poison', 'Plant'], 90, 35);     
const killerPig         = new Attack ('🐷', 'Killer Pig', ['Bug', 'Electric', 'Fire', 'Psychic'], 60, 46);

console.log(deadStar.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(lightning.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(cacaDeVaca.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(voltTime .showAvaibleAttack ());
console.log('');
console.log(notPass.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(cursedShark.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(coronaVaccine.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(killerPig.showAvaibleAttack ());
console.log('');
console.log(Attack.showAllAttack ("avaibleAttacks"));
console.log('');


//  5.-  PASS SOME ATTACK OBJECTS TO USERPOKEMONS
console.log('//     ****************    5.-  PASS SOME ATTACK OBJECTS TO THE USERPOKEMONS    *****************     ||');
console.log('');

console.log(showUsersPokemon (usersPokemons));
console.log('');
//console.log(Attack.showAllAttack ("avaibleAttacks") );
console.log('');
console.log(`||  ❓ -  Before:  There are "${arrayAvaibleOfAttacks.length - 1}" avaible Attacks now !!! `);

for (let i = 0; i < usersPokemons.length; i++) {
    const randomIndex = numberRandomMinMax  (0, arrayAvaibleOfAttacks.length - 1);
    const objectAttackRandom = arrayAvaibleOfAttacks[randomIndex];
    usersPokemons[i].learnAttackSkill (objectAttackRandom);

    arrayAvaibleOfAttacks.splice(randomIndex, 1);
}
console.log('');
console.log(`||  ❓ -  After:  There are "${arrayAvaibleOfAttacks.length - 1}" avaible Attacks now !!! `);
console.log('');
console.log(Attack.showAllAttack ("avaibleAttacks") );
console.log('');
console.log(showUsersPokemon (usersPokemons));
console.log('');


//  6.-  PASS SOME ATTACK OBJECTS FROM THE USER POKEMON TO THE OWN POKEMONS
console.log('//     ******    6.-  PASS SOME ATTACK OBJECTS FROM THE USER POKEMON TO THE OWN POKEMONS   ******     ||');
console.log('');

const dragonFire        = new Attack('🐉 🔥', "Dragon's Fire", ['Fire'], 105, 48);                                 
const unicornPower      = new Attack('🦄 ✨', "Unicorn Power",['Fire', 'Fight', 'Flying'], 50, 25); 

console.log(dragonFire.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(unicornPower.showAvaibleAttack ());
console.log('||                                                                                                   ||');
            

console.log('||  **  6.1.A- FIRST WAY: FROM AN EXTERNAL POKEMON OBJECT DIRECTLY: "addOutPokemonToUser (ObjectPokemon)"  **  ||');

const Charmander       = new Pokemon('Charmander', numberRandomMinMax (60, 250), numberRandomMinMax (10, 150));
const Charizard_0      = new Pokemon('Charizard' , numberRandomMinMax (40, 200), numberRandomMinMax (20, 180)); 
console.log('');
console.log(Charmander.showStatus());
console.log('');
console.log(Charizard_0.showStatus());
console.log('');

const joseAFernandez    = new UserPokemon (0, 'Fernandez Verdu, Jose Antonio', ['very experienced', 8 ]);
joseAFernandez['_imagesUser'] = '✨ 🦁 ✨';
usersPokemons.push(joseAFernandez);
console.log(joseAFernandez.showStatus ());
console.log('');
joseAFernandez.learnAttackSkill (dragonFire);       //  The User Pokemon "learns" and "acquires" an external "attack" object.  
joseAFernandez.addOutPokemonToUser (Charmander);    //  Method "addOutPokemonToUser" directly acquires the Pokemon object extern. 
joseAFernandez.addOutPokemonToUser (Charizard_0);

console.log();
console.log(`||  '1️⃣:  Before passing the "attack" object  🐉 🔥  to the pokemon object itsefl!!`);
console.log('');
joseAFernandez.passToPokemonAttack ("Dragon's Fire", 4); // The target pokemon, determined by its id, is given the attack given by name
console.log(`||   2️⃣:  After passing the "attack" object  🐉 🔥  to the pokemon object itsefl!!`);
console.log('');
console.log(joseAFernandez.showStatus ());
console.log('');
console.log(showUsersPokemon (usersPokemons));
console.log('');


console.log('||  **  6.1.B- SECOND WAY: FROM AN INTERNAL POKEMON OBJECT: "selectPokemon ("out", idPokemon)"  ***  ||');
console.log('||                                                                                                                      ||');
console.log('||             Previously acquired "internal pokemon", select it and pass the "attack" object to it. ||');
console.log('');
const Charizard         = joseAFernandez.selectPokemon ('own', 6);
console.log(joseAFernandez.showStatus ());
console.log('');
console.log(`||  1️⃣:  Before passing the "attack" object  🦄 ✨  to the pokemon object itsefl!!`);
console.log('');
joseAFernandez.learnAttackSkill (unicornPower);     //  The User Pokemon "learns" and "acquires" an external "attack" object.
joseAFernandez.addOutPokemonToUser (Charizard); 
joseAFernandez.passToPokemonAttack ("Dragon's Fire", 6);
console.log('');
console.log(`||  2️⃣:  After passing the "attack" object  🦄 ✨  to the pokemon object itsefl!!`);
console.log('');
console.log('');

//console.log(joseAFernandez);


//  7.-  ADD AN AMOUNT OF MAGIC FROM THE USER POKEMON TO A GIVEN POKEMON.
console.log('//     *******    7.-  ADD AN AMOUNT OF MAGIC FROM THE USER POKEMON TO A GIVEN POKEMON   *******     ||');
console.log('');

console.log(joseAFernandez.showStatus());
console.log('');
console.log(joseAFernandez.giveMagicToPokemon(200, 4));  //  Select internal Pokemon acquired by "IdPokemon" 2° parameter, and pass the magic amount of the first parameter to it.
console.log(joseAFernandez.giveMagicToPokemon(200, 6));
console.log('');
console.log(joseAFernandez.showStatus());
console.log('');
// console.log(joseAFernandez);


*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                          TESTING OF FIGHTING BETWEEN POKEMONS
//                                                                                              
console.log('||////     ********************************       FIGHTING BETWEEN POKEMONS        ****************************      ////||');
console.log('||                                                                                                                       ||');     
console.log('');
console.log(`
            ⢀⣴⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Class USERPOKEMON 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠋⠉⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠃⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡏⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣠⣤⣤⣤⣤⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡏⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠴⠒⠊⠉⠉⠀⠀⣿⣿⣿⠿⠋⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⢀⡠⠼⠴⠒⠒⠒⠒⠦⠤⠤⣄⣀⠀⢀⣠⠴⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⣼⠿⠋⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣇⠔⠂⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠖⠋⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⠒⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡟⠀⣠⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⢻⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣤⡤⠤⢴
⠀⠀⠀⠀⠀⠀⣸⠁⣾⣿⣀⣽⡆⠀⠀⠀⠀⠀⠀⠀⢠⣾⠉⢿⣦⠀⠀⠀⢸⡀⠀⠀⢀⣠⠤⠔⠒⠋⠉⠉⠀⠀⠀⠀⢀⡞
⠀⠀⠀⠀⠀⢀⡏⠀⠹⠿⠿⠟⠁⠀⠰⠦⠀⠀⠀⠀⠸⣿⣿⣿⡿⠀⠀⠀⢘⡧⠖⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠀
⠀⠀⠀⠀⠀⣼⠦⣄⠀⠀⢠⣀⣀⣴⠟⠶⣄⡀⠀⠀⡀⠀⠉⠁⠀⠀⠀⠀⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⠀
⠀⠀⠀⠀⢰⡇⠀⠈⡇⠀⠀⠸⡾⠁⠀⠀⠀⠉⠉⡏⠀⠀⠀⣠⠖⠉⠓⢤⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠃⠀⠀
⠀⠀⠀⠀⠀⢧⣀⡼⠃⠀⠀⠀⢧⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⣧⠀⠀⠀⣸⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠃⠀⠀⠀
⠀⠀⠀⠀⠀⠈⢧⡀⠀⠀⠀⠀⠘⣆⠀⠀⠀⢠⠏⠀⠀⠀⠀⠈⠳⠤⠖⠃⡟⠀⠀⠀⢾⠛⠛⠛⠛⠛⠛⠛⠛⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠙⣆⠀⠀⠀⠀⠈⠦⣀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠙⢦⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⡇⠙⠦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⠋⠸⡇⠈⢳⡀⠀⢹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡼⣀⠀⠀⠈⠙⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⣷⠴⠚⠁⠀⣀⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡴⠁⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⡴⠚⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣼⢷⡆⠀⣠⡴⠧⣄⣇⠀⠀⠀⠀⠀⠀⠀⢲⠀⡟⠀⠀⠀⠀⠀⠀⠀⢀⡇⣠⣽⢦⣄⢀⣴⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡿⣼⣽⡞⠁⠀⠀⠀⢹⡀⠀⠀⠀⠀⠀⠀⠈⣷⠃⠀⠀⠀⠀⠀⠀⠀⣼⠉⠁⠀⠀⢠⢟⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣷⠉⠁⢳⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⣻⠀⠀⠀⠀⠀⠀⠀⣰⠃⠀⠀⠀⠀⠏⠀⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠹⡆⠀⠈⡇⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢳⡀⠀⠙⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⣰⠃⠀⠀⠀⠀⢀⡄⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢳⡀⣰⣀⣀⣀⠀⠀⠀⠘⣦⣀⠀⠀⠀⡇⠀⠀⠀⢀⡴⠃⠀⠀⠀⠀⠀⢸⡇⢠⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠉⠉⠀⠀⠈⠉⠉⠉⠙⠻⠿⠾⠾⠻⠓⢦⠦⡶⡶⠿⠛⠛⠓⠒⠒⠚⠛⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`);

console.log('');

//  1.-  CREATE NEW USERS OF POKEMON:  AN ENEMY ("masterPokemonEnemy") AND ME: ("masterPokemonMe")
console.log('//  *  1.-  CREATE USERS OF POKEMON:  AN ENEMY "masterPokemonEnemy" AND ME: "masterPokemonMe"  *     ||');
console.log('||                                                                                                   ||');
console.log('');

const masterPokemonEnemy                = new UserPokemon (0, 'Meweo Meweo, The Cat', ['too much experiencie', 9]);
masterPokemonEnemy['_imagesUser']       = '💀 🐱 💀';
usersPokemons.push(masterPokemonEnemy);
console.log(masterPokemonEnemy.showStatus ());
console.log('');

const masterPokemonMe                   = new UserPokemon (1, 'Fernandez Verdu, Jose Antonio', ['very experienced', 8 ]);
masterPokemonMe['_imagesUser']          = '⭐ 🦁 ⭐';
usersPokemons.push(masterPokemonMe);
console.log(masterPokemonMe.showStatus ());
console.log('');

console.log(showUsersPokemon (usersPokemons));
console.log('');

console.log('||                                                                                                   ||');
console.log('||   *******************************************************************************************     ||');
console.log('');


//  2.-  CREATE SOME POKEMONS
//  2.1.- CREATE TWO POKEMONS:  PIKACHIN ("Pikachu") AND MEOWTH ("Meowth")
console.log('//  ******     2.1.- CREATE TWO POKEMONS:  PIKACHIN ("Pikachu") AND MEOWTH ("Meowth")      *******   ||');
console.log('||                                                                                                   ||');
console.log('');
const Pikachin                          = new Pokemon('Pikachu', numberRandomMinMax (60, 250), numberRandomMinMax (80, 150));
console.log('');
//console.log(Pikachin)
console.log(Pikachin.showStatus());
console.log('');

const Meowth                            = new Pokemon('Meowth', numberRandomMinMax (80, 300), numberRandomMinMax (100, 200));
//console.log(Meowth)
console.log('');
console.log(Meowth.showStatus());
console.log('');


//  2.2.-  CREATE RANDOM POKEMONS. I make a array of Object-Pokemons.
console.log('//  *********      2.2- CREATE RANDOM POKEMONS. I make a array of Object-Pokemons       ***********  ||');
console.log('||                                                                                                   ||');
console.log('');
    
const numberRandomPokemons           = numberRandomMinMax (2, 6);
createPokemons(numberRandomPokemons);

console.log(Pokemon.showArrayAvaibleOfPokemon (arrayOfAvaibleRandomPokemons));
console.log('');

console.log('||                                                                                                   ||');
console.log('||   *******************************************************************************************     ||');
console.log('');


//  3.-  CREATE SOME ATTACKS OBJECTS.
console.log('//  **********************        3.- CREATE SOME ATTACK OBJECTS        ************************     ||');
console.log('||                                                                                                   ||');
console.log('');

const dragonFire        = new Attack ('🐉 🔥', "Dragon's Fire", ['Fire'], 105, 48);                                 
const tigerPower        = new Attack ('🐯 ✨', 'Tiger Power',['Fire', 'Fight', 'Flying'], 50, 25); 
const deadStar          = new Attack ( '⭐ 💀','Dead Star', ['Electric'], 50, 40);
const lightning         = new Attack ('⚡ 🌩  ⚡', "Lightning", ['Electric'], 85, 32);                                  
const cacaDeVaca        = new Attack ('💩 🐮', 'Caca De Vaca', ['Electric', 'Bug', 'Poison', 'Plant'], 60, 25);     
const voltTime          = new Attack ('🔌 🕙', "Volt Time", ['Electric', 'Fire', 'Psychic'], 70, 30);
const notPass           = new Attack ( '⛔ 🚶🏾','Do Not Pass', ['Poison', 'Plant', 'Ice', 'Psychic', 'Fire'], 60, 31);
const cursedShark       = new Attack ('🦈 🍃', "Cursed Shark", ['Poison', 'Plant', 'Ice', 'Psychic'], 85, 32);                                 
const coronaVaccine     = new Attack ('🔆 💉', 'Corona Vaccine', ['Electric', 'Bug', 'Normal', 'Poison', 'Plant'], 90, 35);     
const killerPig         = new Attack ('🐷 💀', 'Killer Pig', ['Bug', 'Normal', 'Fire', 'Psychic'], 60, 46);
const plantMadness      = new Attack('🌱 🌿 🌵', "Plant Madness", ['Plant', 'Poison', 'Normal', 'Earth'], 65, 28);                                 
const poisonKiss        = new Attack('👄 💋 💀', 'Poison Kiss',['Plant', 'Poison', 'Normal', 'Bug'], 70, 35); 

console.log(dragonFire.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(tigerPower.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(deadStar.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(lightning.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(cacaDeVaca.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(voltTime .showAvaibleAttack ());
console.log('');
console.log(notPass.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(cursedShark.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(coronaVaccine.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(killerPig.showAvaibleAttack ());
console.log('');
console.log(plantMadness.showAvaibleAttack ());
console.log('||                                                                                                   ||');
console.log(poisonKiss.showAvaibleAttack ());
console.log('');

console.log(Attack.showAllAttack ("avaibleAttacks"));
console.log('');

console.log('||                                                                                                   ||');
console.log('||   *******************************************************************************************     ||');
console.log('');


// 4.1-  THE POKEMONS LEARN AND ACQUIRE SOME ATTACKS
console.log('//  ******    4.1- THE POKEMONS PIKACHIN AND MEOWTH LEARN AND ACQUIRE AN ATTACK DIRECTLY    *****    ||');
console.log('||                                                                                                   ||');
console.log('');

Pikachin.learnAttackSkill (lightning, voltTime);
console.log('');
Meowth.learnAttackSkill (coronaVaccine, poisonKiss);
console.log('');
        //console.log(Pikachin);
console.log(Pikachin.showStatus());
console.log('');

        //console.log(Meowth);
console.log(Meowth.showStatus());
console.log('');      

console.log('//  *********      4.2- THE USERS "ENEMY" AND "ME" ACQUIRE TO PIKACHIN AND MEOWTH     ***********    ||');
console.log('||                                                                                                   ||');
console.log('');

masterPokemonMe.addOutPokemonToUser    (Pikachin);
masterPokemonEnemy.addOutPokemonToUser (Meowth);

console.log(masterPokemonEnemy.showStatus ());
console.log('');
console.log(masterPokemonMe.showStatus ());
console.log('');

console.log('//  *************      4.3- THE USERS "ENEMY" AND "ME" ACQUIRE SOME ATTACKS     *****************    ||');
console.log('||                                                                                                   ||');
console.log('');

//  The User Pokemon "learns" and "acquires" an external "attack" object.  
masterPokemonEnemy.learnAttackSkill (plantMadness); 
masterPokemonMe.learnAttackSkill (cacaDeVaca); 

console.log('//  *******      4.4- THE USERS "ENEMY" AND "ME" PASS THE ATTACKS TO THE POKEMONS     ***********    ||');
console.log('||                                                                                                   ||');
console.log('');

console.log(`||   ✅ User Pokemon: "masterPokemonEnemy"  -----------------  Own Pokemon:  🐱 "Meowth"  -----------------  Attack object: 🌱 🌿 🌵 "Plant Madness":`)
console.log('');
console.log(`||  '1️⃣:  Before passing the "attack" object "Plant Madness"  🌱 🌿 🌵  to the pokemon object: 🐱 "Meowth"!!`);
console.log('');
console.log(masterPokemonEnemy.showStatus ());
console.log('');
masterPokemonEnemy.passToPokemonAttack ("Plant Madness", 52);            // The target pokemon, determined by its id, is given the attack given by name
console.log(`||   2️⃣:  After passing the "attack" object: "Plant Madness"  🌱 🌿 🌵  to the pokemon object  🐱 "Meowth"!!!!`);
console.log('');
console.log(masterPokemonEnemy.showStatus ());
console.log('');

console.log('');
console.log(`||   ✅ User Pokemon: "masterPokemonMe"  -----------------  Own Pokemon:  🐶 "Pikachu"  -----------------  Attack object: 💩 🐮 "Caca De Vaca":`)
console.log('')
console.log(`||  '1️⃣:  Before passing the "attack" object: "Caca De Vaca"  💩 🐮  to the pokemon object: 🐶 "Pikachu"!!`);
console.log('');
console.log(masterPokemonMe.showStatus ());
console.log('');
masterPokemonMe.passToPokemonAttack ("Caca De Vaca", 25);            // The target pokemon, determined by its id, is given the attack given by name
console.log(`||   2️⃣:  After passing the "attack" object: "Caca De Vaca"  💩 🐮  to the pokemon object: 🐶 "Pikachu"!!!!`);
console.log('');
console.log(masterPokemonMe.showStatus ());
console.log(''); 


//  5.-  ADD AN AMOUNT OF MAGIC FROM THE USERS POKEMON TO A GIVEN POKEMON.
console.log('//  ********    5.- ADD AN AMOUNT OF MAGIC FROM THE USERS POKEMON TO A GIVEN POKEMON      *********  ||');
console.log('||                                                                                                   ||');
console.log('');

console.log(masterPokemonMe.giveMagicToPokemon(600, 25));  //  Select internal Pokemon acquired by "IdPokemon" 2° parameter, and pass the magic amount of the first parameter to it.
console.log('');
console.log(masterPokemonEnemy.giveMagicToPokemon(100, 52));
console.log('');
console.log('');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  6.-  THE "FIGHT" BETWEEN POKEMONS: "Pikachu" of "masterPokemonMe"  AND "Meowth" of "masterPokemonEnemy"
console.log('//  *****    6.- THE "FIGHT" BETWEEN POKEMONS: << 🐶 "Pikachu" >>  🆚 << 🐱 "Meowth" >>    *** **    ||');
console.log('||                                                                                                   ||');
console.log('');



Pikachin.attack(54, masterPokemonEnemy,"Meowth");
    //console.log(Pikachin);
    console.log('')
    //console.log('before:  ', Meowth);
    console.log('')
Meowth.attack(61, masterPokemonMe,"Pikachu");
    //console.log('after:  ', Meowth);

Pikachin.showStatus();
Meowth.showStatus();
Pikachin.attack(54, masterPokemonEnemy,"Meowth");
Pikachin.attack(55, masterPokemonEnemy,"Meowth");
Pikachin.attack(56, masterPokemonEnemy,"Meowth");
Pikachin.attack(54, masterPokemonEnemy,"Meowth");
Pikachin.attack(55, masterPokemonEnemy,"Meowth");
Pikachin.attack(56, masterPokemonEnemy,"Meowth");
console.log(''); 
console.log(Pikachin.showStatus());
console.log(''); 
console.log(Meowth.showStatus());
console.log('');  

console.log('||     **************        INFORMATION OF USER POKEMOS AFTER OF FIGTH      ****************        ||');
console.log('||                                                                                                   ||');
console.log(masterPokemonMe.showStatus ());
console.log('||');
console.log('||');
console.log(masterPokemonEnemy.showStatus ());
console.log('||');
console.log('||                                                                                                   ||');
console.log('||    ***************************************************************************************        ||');

