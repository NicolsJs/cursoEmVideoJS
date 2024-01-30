// let num = [5, 8, 2, 9, 3];
// num.sort();
// num.push(1);
// console.log(num);
// console.log(`O vetor tem ${num.length} posições`);
// console.log(`Nosso vetor 1 é o ${num[0]}`);

// ------------------------------------------------------

let valores = [8, 1, 7, 4, 2, 9];
// for (let pos = 0; pos < valores.length; pos++) {
// 	console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
// }

// ---------------------------------------------------------------
// USO DO FOR IN para funções compostas/Arrays

// for (let pos in valores) {
// 	console.log(valores[pos]);
// }

// BUSCAR VALORES DENTRO DE UM VETOR
let pos = valores.indexOf(8);
// console.log(`O valor 8 Está na posição ${pos}`);
if (pos == -1) {
	console.log("Valor não encontrado");
} else {
	console.log(`O valor 8 Está na posição ${pos}`);
}
// Se retornar -1 significa que não tem oo valor
