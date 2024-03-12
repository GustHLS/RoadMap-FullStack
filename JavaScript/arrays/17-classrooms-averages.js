const classJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const classJAR = [6, 5, 8, 9, 5, 6];
const classPY = [7, 3.5, 8, 9.5];

function calculateAverage(gradeOfClassroom){
    const sumGrades = gradeOfClassroom.reduce((accumulator, grade) => accumulator + grade, 0);

    const average = sumGrades / gradeOfClassroom.length;
    return average;
}

console.log(`The classroom average of JavaScript is ${calculateAverage(classJS)}`);
console.log(`The classroom average of Java is ${calculateAverage(classJAR)}`);
console.log(`The classroom average of Python is ${calculateAverage(classPY)}`);