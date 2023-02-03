console.log("Entro index.js");
// Convertimos el JASON a objeto en javascript
let objStudents = JSON.parse(db);
// a partir de este punto ya se trabaja como cualquier objeto
// console.log(objStudents);
// console.log(objStudents.students);
//console.log();

objStudents.students.forEach(student => {
    let suma = student.grades.reduce((total, grade) => {return total + grade}, 0);
    student.average = Number((suma/3).toFixed(2));
    console.log(student);
});

let miCalculadora = new Calculadora();
console.log(miCalculadora.sumar(2,2), "suma en cacluladora");
console.log(miCalculadora.restar(6,4), "resta en cacluladora");
console.log(miCalculadora.multiplicar(9,2), "multiplicacion en cacluladora");
console.log(miCalculadora.dividir(14,2), "dividir en cacluladora");

let miCalculadoraCientifica = new CalculadoraCientifica();
console.log(miCalculadoraCientifica.sumar(5,3), "suma en cacluladora");
console.log(miCalculadoraCientifica.restar(7,3), "resta en cacluladora");
console.log(miCalculadoraCientifica.multiplicar(9,5), "multiplicacion en cacluladora");
console.log(miCalculadoraCientifica.dividir(14,2), "dividir en cacluladora");
console.log(miCalculadoraCientifica.raizCuadrada(528,2), "raiz en cacluladora");
console.log(miCalculadoraCientifica.potencia(9,2), "potencia en cacluladora");