const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
for(index = 0; index < teachers.length; index++){
  const element = (teachers[index])
  if( index === 4){
    console.log('Patrick')
  }else{
    console.log(element)
  }
}

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = []
for(index = 0; index < teachers.length ; index++){
  const element = teachers[index];
  if(index !== teachers.length-1){
    console.log(element)
  }else{
    lastTeacher.push(element)
    console.log(lastTeacher)
  }
}



// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const teacherNew = []
for(index = 0 ; index < teachers.length ; index++){
  const element = teachers[index]
  if(index !== 1){
  console.log(element)
  }else{
   teacherNew.push(element)
   console.log(teacherNew)    
  }
}

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa');
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
console.log(teachers);

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

for (let index = 0; index < teachers.length; index++) {
  const element = teachers[index];
  if(element === 'Fabio'){
    let isFabioPresent = element
    console.log(`${isFabioPresent} è presente`)
  }
}


// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
for(index = 0; index < teachers.length; index++){
  const element = teachers[index]
  if(element === 'Lewis'){
    console.log(index)
  }
}


// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
let teachersString = "" //QUESTA STRINGA VIENE RIEMPITA DAL NOME SARA QUANDO ARRIVA ALLA ASSEGNAZIONE HA IL VALORE SARA CHE VIENE AGGIUNTO A QUELLO SUCCESSIVO
for(index = 0; index < teachers.length; index++){
  let element = teachers[index];
  teachersString += `${element} `
  console.log(teachersString)
}



// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty


let students = []
students = students.length
if(students === 0 ){
  console.log("è vuoto")
}else{
  console.log("è pieno")
}

 
  
