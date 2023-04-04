const studenti = [
{
    name: 'Antonio',
    surname: 'Palermo',
    matricola: 84297,
},
{
    name: 'Francesco',
    surname: 'Bianchi',
    matricola: 45632,
},
{
    name: 'Elisa',
    surname: 'Ammirata',
    matricola: 68321,
},
{
    name: 'Pippo',
    surname: 'Mazzu',
    matricola: 94843,
},
{
    name: 'Kekka',
    surname: 'Pocchia',
    matricola: 91276,
},
{
    name: 'Igor',
    surname: 'Miti',
    matricola: 42617,
},

];
  
studenti.forEach(student => {
const {name, surname, matricola, } = student;

const output = document.getElementById('output');
output.innerHTML += `
<section id="studenti" class="pb-5">
    <div class="container">
        <div class="row" >
            <div class="card ">
                <div class="card-body text-center">
                    <h3 class="card-title p-5">${name} ${surname}</h3>
                    <p class="card-text">${name}-${surname} ${matricola}</p>
                </div>
            </div>
        </div>
    </div>
</section>
`
});
  
  