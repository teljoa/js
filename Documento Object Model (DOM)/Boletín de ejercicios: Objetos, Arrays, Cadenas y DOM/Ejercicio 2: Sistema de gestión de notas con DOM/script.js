/*
Descripción: Extiende el sistema de gestión de notas para que sea interactivo desde el navegador. Los alumnos y sus notas deben mostrarse en una lista y será 
posible añadir alumnos o notas a través de un formulario.

Tareas:

Mostrar alumnos y notas: Al cargar la página, genera una lista de alumnos con sus respectivas notas y promedios. Cada alumno debe mostrarse como un elemento 
de lista.

Formulario de añadir alumnos: Crea un formulario que permita añadir un nuevo alumno. Al enviar el formulario, el nuevo alumno debe aparecer en la lista y en 
el objeto gradebook.

Añadir notas: Cada alumno debe tener un botón que abra un pequeño formulario para añadir una nueva nota. Al añadir una nueva nota, el promedio se debe 
recalcular automáticamente y actualizarse en la lista.

Destacar estudiantes sobresalientes: Utiliza manipulación del DOM para destacar visualmente (por ejemplo, aplicando una clase CSS) a los estudiantes cuya nota 
promedio sea mayor de 8.
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
      const sum = student.grades.reduce((acc, g) => acc + g, 0);
      student.average = sum / student.grades.length;
    }
  }
};

function renderStudents() {
  const list = document.getElementById("studentList");
  list.innerHTML = "";

  gradebook.students.forEach(student => {
    const li = document.createElement("li");

    if (student.average > 8) li.classList.add("sobresaliente");

    const gradesText = student.grades.length > 0 ? student.grades.join(", ") : "Sin notas";
    li.innerHTML = `
      <h3>${student.name}</h3>
      <p><strong>Notas:</strong> ${gradesText}</p>
      <p><strong>Promedio:</strong> ${student.average.toFixed(2)}</p>
      <button onclick="showAddGradeForm('${student.name}')">Añadir Nota</button>
    `;

    list.appendChild(li);
  });
}

function showAddGradeForm(studentName) {
  const listItems = document.querySelectorAll("#studentList li");

  listItems.forEach(li => {
    if (li.querySelector("h3").textContent === studentName && !li.querySelector(".addGradeForm")) {
      const form = document.createElement("form");
      form.classList.add("addGradeForm");

      const input = document.createElement("input");
      input.type = "number";
      input.placeholder = "Nueva nota";
      input.min = 0;
      input.max = 10;
      input.required = true;
      input.classList.add("gradeInput");

      const button = document.createElement("button");
      button.textContent = "Guardar";

      form.appendChild(input);
      form.appendChild(button);
      li.appendChild(form);

      form.addEventListener("submit", e => {
        e.preventDefault();
        const grade = parseFloat(input.value);
        if (grade >= 0 && grade <= 10) {
          gradebook.addGrade(studentName, grade);
          gradebook.calculateAverage();
          renderStudents();
        }
      });
    }
  });
}

document.getElementById("addStudentForm").addEventListener("submit", e => {
  e.preventDefault();
  const nameInput = document.getElementById("studentName");
  const name = nameInput.value.trim();

  if (name) {
    gradebook.addStudent(name);
    gradebook.calculateAverage();
    renderStudents();
    nameInput.value = "";
  }
});

gradebook.calculateAverage();
renderStudents();