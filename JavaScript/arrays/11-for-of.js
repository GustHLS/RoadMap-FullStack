const notes = [10, 6.5, 8, 7.5];

let sumGrades = 0;

for(let note of notes){
    sumGrades += note;
}

const mean = sumGrades / notes.length;

console.log(`Mean: ${mean}`);