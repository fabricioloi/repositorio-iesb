let numeros = [10, 20, 30, 40, 50];
numeros.push(60);
numeros.shift();
console.log(Math.max(...numeros), Math.min(...numeros));
