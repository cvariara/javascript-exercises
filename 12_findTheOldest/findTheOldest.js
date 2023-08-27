const findTheOldest = function(people) {
  const currentYear = (new Date()).getFullYear();
  const oldest = people.sort((a, b) => {
    if (!("yearOfDeath" in a)) {
      a["yearOfDeath"] = currentYear;
    } else if (!("yearOfDeath" in b)) {
      b["yearOfDeath"] = currentYear;
    }
    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    return lastGuy > nextGuy ? -1 : 1;
  })
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
