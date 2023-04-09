// function createInstructor(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName
//     }
// }

const createInstructor = (first, last) => {
    return {
        first,
        last
    }
}

///////
const favoriteNum = 42;

const instructor = {
    firstName: 'colt',
    [favoriteNum]: "that is my favorite"
}

const instructor2 = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!";
  }
}


const createAnimal = (species, verb, noise) => {
    return {
        species, 
        [verb](){
            return noise;
        }
    }
}

console.log('hello');