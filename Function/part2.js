// ADICIONANDO 0 DESTA FORMA, FAZEMOS COM QUE, SE O VALOR O PARAMENTRO
// NÃO FOR PASSADO, ELE AUTOMATICAMENTE ESTRARÁ VALENDO 0 PQ EU COLOQUEI ASSIM
function soma(n1 = 0, n2 = 0) {
	return n1 + n2;
}

console.log(soma(7, 9));
