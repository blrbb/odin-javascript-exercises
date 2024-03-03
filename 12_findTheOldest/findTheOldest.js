const findTheOldest = function(people) {
    people.map(person => person.age = (person.yearOfDeath > 0 ? person.yearOfDeath : new Date().getFullYear()) - person.yearOfBirth);
    let oldest = people.reduce((oldestPerson, currentPerson) => oldestPerson = currentPerson.age > oldestPerson.age ? currentPerson : oldestPerson, people[0]);
    console.log("Oldest Person:",oldest);
    return oldest; 
}

// Do not edit below this line
module.exports = findTheOldest;
