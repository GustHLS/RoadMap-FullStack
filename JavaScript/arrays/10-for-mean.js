const notes = [10, 6.5, 8, 7.5];

let sumGrades = 0;

for(let i = 0; i < notes.length; i++){
    sumGrades += notes[i];
}

const mean = sumGrades / notes.length;
console.log(`Mean: ${mean}`);
