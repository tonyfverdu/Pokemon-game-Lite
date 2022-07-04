//  3.-  ATTACKS OBJECTS
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
        1.8.- arrayIdAttacks        :  array of attacks created in the game.                      <<===||  QUITAR??

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

