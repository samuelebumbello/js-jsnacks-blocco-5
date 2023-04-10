const biciCorsa = [
    {
        nome: "sportiva",
        peso: 15,
    },
    {
        nome: "cross",
        peso: 11,
    },
    {
        nome: "passeggio",
        peso: 8,
    },
    {
        nome: "montagna",
        peso: 18,
    },
    {
        nome: "stradale",
        peso: 16,
    },
    {
        nome: "ruote grosse",
        peso: 10,
    },
    {
        nome: "ruote sottili",
        peso: 19,
    },
    {
        nome: "senza marcia",
        peso: 10,
    },
];

const container1 = document.getElementById("bici");
const container2 = document.getElementById("pesoMin");


const pesoMin = biciCorsa.reduce( (obiettivo, numero) => obiettivo.peso < numero.peso ? obiettivo : numero);

console.log(pesoMin);

container1.innerHTML +=`
<h1 class="card-title">Nome Bici: ${pesoMin.nome}</h1>
<h1 class="card-text">Peso: ${pesoMin.peso}Kg</h1>
`
