const notes = [10, 6.5, 8, 7.5];

let sumGrades = 0;

notes.forEach((note) => sumGrades += note);

const mean = sumGrades / notes.length;

console.log(`Mean ${mean}`);