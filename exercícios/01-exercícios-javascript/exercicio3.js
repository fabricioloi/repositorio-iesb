const verificaIdade = (idade) => {
    if (idade < 18) console.log("Menor de idade");
    else if (idade >= 65) console.log("Idoso");
    else console.log("Maior de idade");
};
verificaIdade(70);