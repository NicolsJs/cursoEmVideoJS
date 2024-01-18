function carregar() {
	var msg = document.getElementById("msg");
	var img = document.getElementById("imagem");
	var data = new Date();
	var hora = 11; // var hora = data.getHours();
	msg.innerHTML = `Agora São ${hora} Horas`;
	if (hora >= 0 && hora < 12) {
		// Bom dia
		img.src = "img/fotoManha.png";
		Document.body.style.background = "#b3b3ff";
	} else if (hora >= 12 && hora <= 18) {
		// BOA TARDE
		img.src = "img/fotoFinaDaTarde.png";
		Document.body.style.background = "#ffcc00";
	} else {
		// Boa Noite
		img.src = "img/fotoNoite.png";
		Document.body.style.background = "#4d4dff";
	}
}
