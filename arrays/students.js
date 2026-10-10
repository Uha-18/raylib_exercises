const students = [
    { name: "Anu", marks: 79 },
    { name: "Rahul", marks: 65 },
    { name: "Meera", marks: 91 },
    { name: "Vikram", marks: 72 },
];

function cuttoff(students, target) {
    names = [];
    for (i = 0; i < students.length; i++) {
        if (students[i].marks > target) {
            names.push(students[i].name);
        }
    }
    return names;
}

console.log(cuttoff(students, 60));
