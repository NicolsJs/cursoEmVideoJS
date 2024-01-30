let num = [5, 8, 4];
// Posso, não somente adicionar numero em um mesmo array,
// como posso colocar idade, cor, etc, pois ele é heterogenio,
// O index que não dá para ser modificado
// O array em casos mais complexo se torna limitado,
// fazendo com que não seja uma opção em outras situações mais complexas

let amigo = {
	nome: "Jose",
	sexo: "M",
	peso: "85.2",
	engordar(p = 0) {
		console.log("Engordou");
		this.peso += p;
	},
};
amigo.engordar(3);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);

// Um objeto pode ser adicionado funções, strings,
// pode modificar o nome do index, Posso adicionar
// quantas forem necessárias
// UM OBJETO É UM ARRAY E UM OBJETO
//Caso eu queira mostra um especifico, uso console.log(amigo.nome);
