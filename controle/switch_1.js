
let nota = 8.3;

switch(Math.ceil(nota)) {
    case 10: case 9: case 8: case 7:
        console.log('Parabéns!');
        break;
    case 6: case 5:
        console.log('Recuperação');
        break;
    case 3:
        console.log('Reprovado!');
        break;
    default:
        console.log('Nota inválida!');
}

console.log('Fim!');
