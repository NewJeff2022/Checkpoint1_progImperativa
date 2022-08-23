function superMicrowave(comida, tempo){
  let comidaLowerCase = comida.toLowerCase();

  if (
    comidaLowerCase !== "pipoca" &&
    comidaLowerCase !== "macarrão" &&
    comidaLowerCase !== "carne" &&
    comidaLowerCase !== "feijão" &&
    comidaLowerCase !== "brigadeiro"
  ) {
    console.log("Prato inexistente");
  }

  if (comidaLowerCase === "pipoca" && tempo >= 10 && tempo < 20){
    console.log("Prato pronto, bom apetite!!!")
	} else if (comidaLowerCase === "pipoca" && tempo >= 20 && tempo < 30) {
    console.log("Sua comida queimou");
  } else if (comidaLowerCase === "pipoca" && tempo >= 30) {
    console.log("kabumm");
  } else if (comidaLowerCase === "pipoca" && tempo < 10) {
    console.log("Tempo insuficiente");
  }

if (comidaLowerCase === "carne" && tempo >= 15 && tempo < 30){
    console.log("Prato pronto, bom apetite!!!")
  } else if (comidaLowerCase === "carne" && tempo >= 30 && tempo < 45) {
    console.log("Sua comida queimou");
  } else if (comidaLowerCase === "carne" && tempo >= 45) {
    console.log("kabumm");
  } else if (comidaLowerCase === "carne" && tempo < 15) {
    console.log("Tempo insuficiente");
  }

	if (comidaLowerCase === "feijão" && tempo >= 12 && tempo < 24) {
    console.log("Prato pronto, bom apetite!!!");
  } else if (comidaLowerCase === "feijão" && tempo >= 24 && tempo < 36) {
    console.log("Sua comida queimou");
  } else if (comidaLowerCase === "feijão" && tempo >= 36) {
    console.log("kabumm");
  } else if (comidaLowerCase === "feijão" && tempo < 12) {
    console.log("Tempo insuficiente");
  }

	if (comidaLowerCase == "macarrão" || comidaLowerCase == "brigadeiro" && tempo >= 8 && tempo < 16) {
		console.log("Prato pronto, bom apetite!!!")
  } else if (comidaLowerCase == "macarrão" || comidaLowerCase == "brigadeiro" && tempo >= 16 && tempo < 24) {
    console.log("Sua comida queimou")
	} else if (comidaLowerCase == "macarrão" || comidaLowerCase == "brigadeiro" && tempo >= 24) {
    console.log("kabumm")
	} else if (comidaLowerCase == "macarrão" || comidaLowerCase == "brigadeiro" && tempo < 8) {
    console.log("Tempo insuficiente")
	}

}

superMicrowave(comida, tempo);
// Professor eu deixei os console.log e a chamada da função pra caso o você quiser visualizar, mas teria usado um return se não fosse isso
