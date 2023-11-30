console.log("Calculadora de média acadêmica");

const materia1 = "Lógica de programação"
    let provaMateria1 = 6;
    let atividadeMateria1 = 8;
    let n1Materia1 = (provaMateria1 + atividadeMateria1) / 2;
    let prova2Materia1 = 7;
    let atividade2Materia1 = 7.5;
    let n2Materia1 = (prova2Materia1 + atividade2Materia1) / 2;
    let mfMateria1 = (n1Materia1 * 0.4) + (n2Materia1 * 0.6);
const materia2 = "JavaScript"
    let provaMateria2 = 8;
    let atividadeMateria2 = 10;
    let n1Materia2 = (provaMateria2 + atividadeMateria2) / 2;
    let prova2Materia2 = 6;
    let atividade2Materia2 = 5.5;
    let n2Materia2 = (prova2Materia2 + atividade2Materia2) / 2;
    let mfMateria2 = (n1Materia2 * 0.4) + (n2Materia2 * 0.6);
const materia3 = "Administração"
    let provaMateria3 = 9;
    let atividadeMateria3 = 5.5;
    let n1Materia3 = (provaMateria3 + atividadeMateria3) / 2;
    let prova2Materia3 = 7;
    let atividade2Materia3 = 6;
    let n2Materia3 = (prova2Materia3 + atividade2Materia3) / 2;
    let mfMateria3 = (n1Materia3 * 0.4) + (n2Materia3 * 0.6);
const materia4 = "Gestão de projetos"
    let provaMateria4 = 10;
    let atividadeMateria4 = 0;
    let n1Materia4 = (provaMateria4 + atividadeMateria4) / 2;
    let prova2Materia4 = 6;
    let atividade2Materia4 = 7.5;
    let n2Materia4 = (prova2Materia4 + atividade2Materia4) / 2;
    let mfMateria4 = (n1Materia4 * 0.4) + (n2Materia4 * 0.6);
 
console.log(`Na matéria ${materia1} sua média final foi ${mfMateria1.toFixed(2)}`);
    if (materia1 < 6){
        console.log("Você está reprovado.")
    } else {
        console.log ("Você está aprovado.")
    }
console.log(`Na matéria ${materia2} sua média final foi ${mfMateria2.toFixed(2)}`);
    if (materia2 < 6){
        console.log("Você está reprovado.")
    } else {
        console.log ("Você está aprovado.")
    }
console.log(`Na matéria ${materia3} sua média final foi ${mfMateria3.toFixed(2)}`);
    if (materia3 < 6){
        console.log("Você está reprovado.")
    } else {
        console.log ("Você está aprovado.")
    }
console.log(`Na matéria ${materia4} sua média final foi ${mfMateria4.toFixed(2)}`);
    if (materia4 < 6){
        console.log("Você está reprovado.")
    } else {
        console.log ("Você está aprovado.")
    }