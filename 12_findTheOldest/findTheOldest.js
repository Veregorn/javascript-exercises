const findTheOldest = function(people) {
    const oldToYoung = people.sort((a,b) => {
        const actualYear = new Date().getFullYear();
        if ((a.yearOfDeath != undefined) && (b.yearOfDeath != undefined)) {
            if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
                return -1;
            } else {
                return 1;
            }
        } else if ((a.yearOfDeath == undefined) && (b.yearOfDeath == undefined)) {
            if ((actualYear - a.yearOfBirth) > (actualYear - b.yearOfBirth)) {
                return -1;
            } else {
                return 1;
            }
        } else if (a.yearOfDeath == undefined) {
            if ((actualYear - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
                return -1;
            } else {
                return 1;
            }
        } else if (b.yearOfDeath == undefined) {
            if ((a.yearOfDeath - a.yearOfBirth) > (actualYear - b.yearOfBirth)) {
                return -1;
            } else {
                return 1;
            }
        }
        
    });
    return oldToYoung[0];
};

// Do not edit below this line
module.exports = findTheOldest;
