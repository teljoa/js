/*
7️⃣ Reto final: Sistema de ranking
Queremos almacenar en localStorage las puntuaciones de un juego:

Crea una función guardarPuntuacion(nombre, puntos) que guarde en localStorage un array de objetos con {nombre, puntos}.

Crea otra función obtenerRanking() que devuelva el array ordenado por puntos descendente.

Muestra el top 3 usando slice y forEach.

Asegúrate de que no se repiten jugadores usando un Set de nombres antes de guardar.
*/

let ranking = [];

function guardarPuntuacion(nombre, puntos) {
  const nombresSet = new Set(ranking.map(jugador => jugador.nombre));

  if (!nombresSet.has(nombre)) {
    ranking.push({ nombre, puntos });
  } else {
    console.log(`El jugador "${nombre}" ya está en el ranking.`);
  }
}

function obtenerRanking() {
  return [...ranking].sort((a, b) => b.puntos - a.puntos);
}

function mostrarTop3() {
  const rankingOrdenado = obtenerRanking();

  console.log("Top 3 jugadores:");
  rankingOrdenado.slice(0, 3).forEach((jugador, index) => {
    console.log(`${index + 1}. ${jugador.nombre} - ${jugador.puntos} puntos`);
  });
}

guardarPuntuacion("Ana", 150);
guardarPuntuacion("Luis", 200);
guardarPuntuacion("Carlos", 180);
guardarPuntuacion("Ana", 300); 