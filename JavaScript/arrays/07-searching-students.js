const students = ["João", "Juliana", "Ana", "Caio"];
const averages = [10, 8, 7.5, 9];

const students_averages = [students, averages];

function showNameAndGrade(student){
    if(students_averages[0].includes(student)){
        const [students, averages] = students_averages;

        const index = students.indexOf(student);

        const studentAverage = averages[index];

        console.log(`The average of ${student} is ${studentAverage}`)
    }else{
        console.log(`Student not found.`)
    }
}

showNameAndGrade("Caio");