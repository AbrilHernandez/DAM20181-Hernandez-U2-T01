var people = Array();
function createPeople() {
    var newPerson;
    for (var i = 0; 1 < 10; i++) {
        newPerson = {
            name: "Abril" + i,
            email: "a" + i + "@gmail.com",
            salary: (i + 10000),
            active: i % 2 == 0 ? true : false
        };
        people.push(newPerson);
    }
    newPerson = {
        name: "Yareli",
        email: "yarelymail.com",
        salary: "10000",
        active: true
    };
    people.push(newPerson);
}
function analizePeople() {
    var regexp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    people.forEach(function (persona) {
        if (regexp.test(persona.email) && persona.active) {
            console.log(persona.email + persona.active);
        }
    });
}
createPeople();
analizePeople();
