/*
Ejercicio 2: Sistema de gestión de notas
Imagina que eres un profesor y quieres llevar un sistema de notas para tus alumnos. Crea un objeto gradebook que contenga:

Un array de objetos llamado students, donde cada objeto tiene las siguientes propiedades: name, grades (un array de números) y average (promedio de sus notas).
Ejemplo inicial:

let gradebook = {
  students: [
    { name: "Ana", grades: [8, 7, 9], average: 0 },
    { name: "Luis", grades: [6, 8, 6], average: 0 },
    { name: "Maria", grades: [9, 10, 9], average: 0 }
  ]
};
Tareas:

Crea un método calculateAverage() que calcule el promedio de las notas de cada estudiante y lo almacene en la propiedad average.
Crea un método addStudent(name) que añada un nuevo estudiante con un array vacío de notas.
Crea un método addGrade(studentName, grade) que añada una nueva nota al array grades del estudiante especificado.
Utiliza los métodos avanzados de arrays para:
Imprimir los nombres de los estudiantes cuya nota promedio sea mayor que 8.
Crear un array con los nombres de todos los estudiantes que tienen al menos una nota mayor que 9.
Ordenar los estudiantes en función de sus promedios, de mayor a menor.
*/
let gradebook = {
  students: [
    { name: "Ana", grades: [8, 7, 9], average: 0 },
    { name: "Luis", grades: [6, 8, 6], average: 0 },
    { name: "Maria", grades: [9, 10, 9], average: 0 }
  ],

  calculateAverage() {
    this.students.forEach(student => {
      if (student.grades.length > 0) {
        const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
        student.average = sum / student.grades.length;
      } else {
        student.average = 0;
      }
    });
  },

  addStudent(name) {
    this.students.push({ name: name, grades: [], average: 0 });
  },

  addGrade(studentName, grade) {
    const student = this.students.find(s => s.name === studentName);
    if (student) {
      student.grades.push(grade);

      const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
      student.average = sum / student.grades.length;
    } else {
      console.log(`Estudiante ${studentName} no encontrado.`);
    }
  },

  printHighAverageStudents() {
    const highAverageStudents = this.students
      .filter(student => student.average > 8)
      .map(student => student.name);

    console.log("Estudiantes con promedio mayor que 8:", highAverageStudents);
  },

  getStudentsWithGradeAbove9() {
    return this.students
      .filter(student => student.grades.some(grade => grade > 9))
      .map(student => student.name);
  },

  sortStudentsByAverage() {
    this.students.sort((a, b) => b.average - a.average);
  }
};

gradebook.calculateAverage();
gradebook.addStudent("Carlos");
gradebook.addGrade("Carlos", 10);
gradebook.addGrade("Carlos", 9);
gradebook.calculateAverage();

gradebook.printHighAverageStudents();

console.log("Estudiantes con al menos una nota > 9:", gradebook.getStudentsWithGradeAbove9());

gradebook.sortStudentsByAverage();
console.log("Estudiantes ordenados por promedio:");
console.log(gradebook.students);