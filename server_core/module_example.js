/**
 * @typedef {{
 * name: string;
 * sayHi(to: People): number;
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
            console.log(`${this.name} says hi to ${to.name}`);
        }
    }  
}

export { CreatePeople }