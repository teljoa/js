/*
4️⃣ Gestión de alumnos (objetos + FP)
Con:

let alumnos = [
  {nombre:'Ana', nota:7.5, curso:'DAW'},
  {nombre:'Luis', nota:4.5, curso:'DAW'},
  {nombre:'María', nota:9.0, curso:'DAW'},
  {nombre:'Pedro', nota:6.0, curso:'DAM'},
  {nombre:'Lucía', nota:8.5, curso:'DAM'}
]
Obtén con filter solo los del curso DAW.

Usa map para quedarte con los nombres de los aprobados (nota≥5).

Con reduce, calcula la media de notas de DAM.

Con find, busca al alumno llamado ‘María’.

Con findIndex, obtén la posición del primer suspenso.

Con sort, ordena los alumnos por nota descendente.

Crea una función que reciba un array de alumnos y devuelva un objeto con {aprobados:x, suspensos:y}.
*/

let alumnos = [
  {nombre:'Ana', nota:7.5, curso:'DAW'},
  {nombre:'Luis', nota:4.5, curso:'DAW'},
  {nombre:'María', nota:9.0, curso:'DAW'},
  {nombre:'Pedro', nota:6.0, curso:'DAM'},
  {nombre:'Lucía', nota:8.5, curso:'DAM'}
]

let DAW = alumnos.filter(alumno => alumno.curso === 'DAW');
console.log(DAW);

let nombresAprobados = alumnos
  .filter(alumno => alumno.nota >= 5)
  .map(alumno => alumno.nombre);
console.log("Aprobados:", nombresAprobados);

let damStudents = alumnos.filter(alumno => alumno.curso === 'DAM')
let mediaDAM= damStudents.reduce((media,alumno)=> media + alumno.nota, 0) / damStudents.length;
console.log(mediaDAM);

let alumn= alumnos.find(a=>a.nombre === 'María')||null;
console.log(alumn);

let suspen=alumnos.findIndex(a=>a.nota<5);
console.log(suspen);

let ordenadasDes = alumnos.sort((a, b) => b.nota - a.nota);
console.log(ordenadasDes);

function contarAprobadosSuspensos(arr) {
  return arr.reduce(
    (res, alumno) => {
      if (alumno.nota >= 5) {
        res.aprobados++;
      } else {
        res.suspensos++;
      }
      return res;
    },
    { aprobados: 0, suspensos: 0 }
  );
}

console.log("Conteo:", contarAprobadosSuspensos(alumnos));