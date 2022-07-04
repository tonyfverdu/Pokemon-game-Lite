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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  ****        3.-  Class USERPOKEMON 
/*
1.- Properties of object UserPokemon:

    1.1.- idUserPokemon:                            number integer, unique identifier number of the UserPokemon object.
    1.2.- _imagesUser:                              string, image of the UserPokemon.
    1.3.- nameUser:                                 string, name of the UserPokemon.
    1.4.- experience:                               array, with a elment string (experience) and the number experience level of the UserPokemon object.
    1.5.- pokemonsOfUser:                           array of own Pokemons object of the UserPokemon object.
    1.6.- capacityLearnAttacks:                     integer number, level of capacity to learn the different "attacks" of the user Pokemon, measures the level so 
                                                    that the user can teach the Pokemon the different attacks to use in the fight.
    1.7.- capacityToAcquirePokemons:                integer number, acquisition value of the user to be able to acquire Pokemons objects..
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
        this.idUserPokemon                  = idUserPokemon;
        this._imagesUser                     = '';
        this.nameUser                       = nameUser;
        this.experience                     = experience;
        this.pokemonsOfUser                 = pokemonsOfUser;

        this.capacityLearnAttacks           = 0;
        this.capacityToAcquirePokemons      = 0;
        this._attacksLearndSkill            = [];
        this.AcquisitionIniCapacity         = numberRandomMinMax (200, 500);

        this.completeUserProperties (this.experience[1]);
    }

    completeUserProperties (parExperience) {
        this._imagesUser = ''
        const numberRandonImageUserPokemon  = numberRandomMinMax (0, imagesUser.length -1);
        const numberRandomUserExp           = numberRandomMinMax (10, 20);

        this._imagesUser                    = imagesUser[numberRandonImageUserPokemon];
        this.capacityLearnAttacks           = Math.round( 0.3 * (Math.pow(parExperience, 2) * numberRandomUserExp) / (this._attacksLearndSkill.length + 1));
        this.capacityToAcquirePokemons      = this.AcquisitionIniCapacity + Math.round( 0.15 * this.capacityLearnAttacks  * arrayGenerallOfPokemons.length / (usersPokemons.length + 1));
    }

    addOutPokemonToUser (parObjectPokemon) {
        let txt = '';
        let isAddPokemon = false;

        if (typeof parObjectPokemon === 'object' && parObjectPokemon instanceof Pokemon) {
            txt += `||  ***********************************************************************************************  ||\n`;
            txt += `||                                                                                                   ||\n`;
            if (this.capacityToAcquirePokemons - parObjectPokemon['acquisitioValue'] >= 0) {
                this.capacityToAcquirePokemons -= parObjectPokemon['acquisitioValue'];
                this.pokemonsOfUser.push(parObjectPokemon);
                isAddPokemon = true;
                txt += `||  The Pokemon "${parObjectPokemon['namePokemon']}" has been added successfully !to user: ${this._imagesUser} - "${this.nameUser}" !!\n`;
            } else {
                txt += `||  The user: ${this._imagesUser} - "${this.nameUser}" does not has enough "acquisition value" 💰 to be able to acquire the Pokemon "${parNamePokemon}" !!\n`;
                isAddPokemon = false;
            }
            txt += `||                                                                                                   ||\n`;
            txt += `||  ***********************************************************************************************  ||\n`;
            console.log(txt);
        } else {
            console.log('||  Error:  The argument of the method "" must be a object of the class "Pokemon" !!');
            isAddPokemon = false;
        }
        
        return isAddPokemon;
    }

    selectPokemon (parTypeSearch, parIdPokemon) {       //  Select and acquire pokemon out, or select intern Pokemon.
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
            if ( parTypeSearch === 'own') {                                                             //  <==|| Select the internal Pokemon for battle
                if (typeof parIdPokemon === 'number') {
                    if (this.pokemonsOfUser.length > 0) {
                        resultObjectPokemon = this.pokemonsOfUser.find( function (elementPokemon) {
                        return elementPokemon['idPokemon'] === parIdPokemon;
                        }, this);
                    } else {
                        console.log(`||  Error:  The Master User "${this.nameUser}" does not have any Pokemon!!'`);
                        resultObjectPokemon = {};
                    }
                } else {
                    console.log(`||  Error:  The arguments of the function "selectPokemon - own" must be an integer number !!`);
                    resultObjectPokemon = {};
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
                                this.pokemonsOfUser.push(resultObjectPokemon);          //  <==||  I acquire the Pokemon en my array "pokemonsOfUser" 

                                pokemonSuccessAcquisition ('yes', resultObjectPokemon['namePokemon']);
                            } else {
                                pokemonSuccessAcquisition ('not', resultObjectPokemon['namePokemon']);
                            }
                        }
                } else {
                    console.log(`||  Error:  The arguments of the function "selectPokemon" must be an integer less that ${arrayTypePokemons.length} !!'`);
                    resultObjectPokemon = {};
                }
            }
        } else {
        console.log(`||  Error:  The argument of the method "selectPokemon" must be an string!!'`);
        resultObjectPokemon = {};
        }
        return resultObjectPokemon;
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
                        let attackSkillPass = true;

                        txt += `||  Has the attack "${objectAttack['nameAttack']}" - ${objectAttack['imgAttack']}  been passed to the target pokemon "${objectTargetPokemon['namePokemon']}"?    "${attackSkillPass}" !!\n`;
                        txt += '||                                                                                                   ||\n';
                        txt += `||  ***********************************************************************************************  ||\n`;
                        console.log(txt);
                        return attackSkillPass;
                    }else {
                        console.log('|| Error:  The value of the "attack" object property: "typeAttack" must match the value of the pokemon type property ("typePokemon") of the target "Pokemon" object.!!');
                        attackSkillPass = false;
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
        txt += `||                           Status of User:  "${ this.nameUser}"      ${this._imagesUser}\n`;
        txt += `||                                                                                                   ||\n`;
        txt += `||  Id of User: ${this.idUserPokemon}    Name: "${this.nameUser}"           Experience: ${this.experience}\n`
        txt += `||                                                                                                   ||\n`;
        txt += `||  Capacity for Learn Attacks: "${this.capacityLearnAttacks}"                      Capacity to acquire Pokemons: "${this.capacityToAcquirePokemons}"\n`;
        //txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
        txt += `||                                                                                                   ||\n`;
        txt +=  this.showSkill();
        //txt += `||  -----------------------------------------------------------------------------------------------  ||\n`;
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
  
    const userPokemonRandom = new UserPokemon(userID, userFullName, userExperiencie );
    
    return userPokemonRandom;
}

function showUsersPokemon (parUsersRandomPokemons) {
    let txt = '';

    txt += `||  ***********************************************************************************************  ||\n`;
    txt += `||                               USERS RANDOM CREATE AND AVAIBLE:                                    ||\n`;
    txt += `||                                                                                                   ||\n`;
    if (Array.isArray(parUsersRandomPokemons)) {
        if (parUsersRandomPokemons.length > 0 ) {
            for (let i = 0; i < parUsersRandomPokemons.length; i++) {
                txt += `||  N°:  "${i + 1}"   Id of User: ${parUsersRandomPokemons[i]['idUserPokemon']}      ${parUsersRandomPokemons[i]['_imagesUser']}  Name: "${parUsersRandomPokemons[i]['nameUser']}"         Experience:  ${parUsersRandomPokemons[i]['experience']}\n`
                txt += '|| \n';
                txt += `||  Capacity of Learn Attacks : ${parUsersRandomPokemons[i]['capacityLearnAttacks']}      Capacity of acquisition of Pokemons: "${parUsersRandomPokemons[i]['capacityToAcquirePokemons']}"\n`;
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
                    txt += `||  The user has not got Pokemons.  !!                                                               ||\n`;
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
    txt += `||                                  There are  "${parUsersRandomPokemons.length}" Users avaible !!                                  ||\n`;
    txt += `||  ***********************************************************************************************  ||\n`;

    return txt;
}
