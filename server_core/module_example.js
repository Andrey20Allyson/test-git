/**
 * @typedef {{
 * name: string;
 * sayHi(to: People): void;
 * sayBye(to: People): void;
 * }} People
 */

/**
 * 
 * @returns { People }
 */
function CreatePeople(){ 
    return {
        name: 'hob',

        sayHi(to){
            console.log(`${this.name} says hi to ${to.name}!`);
        },

        sayBye(to){
            console.log(`${this.name} says bye to ${to.name}`)
        }
    }  
}

export { CreatePeople }