const students = ["João", "Juliana", "Ana", "Caio"];
const averages = [10, 8, 7.5, 9];

const students_averages = [students, averages];
console.log(students_averages);

console.log(`The second student is: ${students_averages[0][1]} and their grade is: ${students_averages[1][1]}`);