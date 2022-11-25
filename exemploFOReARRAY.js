let listaDeNomes = ['Joana', 'Maria', 'Lucas'];

for (let index = 0; index < listaDeNomes.length; index++) {
    let mensagem = 'Boas vindas, ' + listaDeNomes[index] + '!';
    console.log(mensagem);
}

console.log('');

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index++) {
    console.log(groceryList[index]);
}

console.log('');

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let nome of names) {
    console.log(nome);
}