/**
 * @typedef {{
 * name: string;
 * friends: Array<People>;
 * say(message: String, to: People): void;
 * startAFriendshipWith(with_: People): void;
 * sayToAllFriends(message: String): void;
 * }} People
 */

/**
 * 
 * @returns { People }
 */
function CreatePeople(name){ 
    return {
        name: name || 'hob',
        friends: [],

        say(message, to){
            var finalMessage = `${this.name} says ${message}`
            if(to){
                finalMessage += ` to ${to.name}!` 
            }
            console.log(finalMessage);
        },

        startAFriendshipWith(people){
            if(!(this in people.friends)){
                people.friends.push(this)
                this.friends.push(people)
            }
        },

        sayToAllFriends(message){
            for(let friend of this.friends){
                console.log(`${this.name} says ${message} to ${friend.name}`);
            }
        }
    }  
}

export { CreatePeople }