const students = [
    {
    id:119,
    nome: "Marco rossi",
    sommaVoti: 72,
    },
    {
    id: 187, 
    nome: "Riccardo Mastro",
    sommaVoti: 95,
    },
    {
    id: 100,
    nome: "Alessandro Aversa",
    sommaVoti: 85,
    },
    {
    id: 891,
    nome: "Teresa Sanf",
    sommaVoti: 99,
    },
    {
    id: 98,
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

const votes70 = students.filter(studente => studente.sommaVoti > 70);

votes70.forEach(studente =>{
    const{id, nome, sommaVoti} = studente;

    container2.innerHTML +=`
    <h1 class="card-title">${nome.toUpperCase()}</h1>
    <p class="card-text">Somma dei voti: ${sommaVoti}</p>
    <p class="card-text">Id Studente: ${id}</p>
    `
});

const id120 = votes70.filter(studente => studente.id > 120);

id120.forEach(studente =>{
    const{id, nome, sommaVoti} = studente;

    container3.innerHTML +=`
    <h1 class="card-title">${nome.toUpperCase()}</h1>
    <p class="card-text">Somma dei voti: ${sommaVoti}</p>
    <p class="card-text">Id Studente: ${id}</p>
    `
});

