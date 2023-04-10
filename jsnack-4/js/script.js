const students = [
    {
    id:125,
    nome: "Marco rossi",
    sommaVoti: 72,
    },
    {
    id: 187, 
    nome: "Riccardo Mastro",
    sommaVoti: 95,
    },
    {
    id: 721,
    nome: "Alessandro Aversa",
    sommaVoti: 85,
    },
    {
    id: 891,
    nome: "Teresa Sanf",
    sommaVoti: 99,
    },
    {
    id: 174,
    nome: "Luigi Gambino",
    sommaVoti: 45,
    },
    {
    id: 987,
    nome: "Fabrizio Pinguino",
    sommaVoti: 84,
    },
    {
    id: 123,
    nome: "Giuseppe Crocchetta",
    sommaVoti: 78,
    }
];

const container1 = document.getElementById('class');
const container2 = document.getElementById('sum70');
const container3 = document.getElementById('sum70toid120');

students.forEach(studente =>{
    const{id, nome, sommaVoti} = studente;

    container1.innerHTML +=`
    <h1 class="card-title">${nome.toUpperCase()}</h1>
    <p class="card-text">Somma dei voti: ${sommaVoti}</p>
    <p class="card-text">Id Studente: ${id}</p>
    `

});



