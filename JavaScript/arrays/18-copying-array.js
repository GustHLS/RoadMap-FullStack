const grades = [7, 7, 8, 9];
const newGrades = [...grades];

newGrades.push(10);

console.log(`The old grades: ${grades}`)
console.log(`The new grades: ${newGrades}`)

const newNewGrades = [5, ...newGrades, 7.5];
console.log(`The old new grades: ${newGrades}`)
console.log(`The new new grades: ${newNewGrades}`)