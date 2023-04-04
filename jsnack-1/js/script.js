const users =[
{
    name: "Samuele",
    surname:"Bumbello",
    age: 99
},
{
    name: "Francesco",
    surname:"Nulif",
    age: 75
},
{
    name: "Marco",
    surname:"rosito",
    age: 11
},
{
    name: "Andrea",
    surname:"giuffrida",
    age: 81
},
{
    name: "Alfonso",
    surname:"miccoli",
    age: 14
},
{
    name: "ludo",
    surname:"pezzini",
    age: 10
},
{
    name: "antonio",
    surname:"difresco",
    age: 17
},
{
    name: "Ludovica",
    surname:"Sereniti",
    age: 67
}
];

const primoContainer = document.getElementById('under18');
const secondoContainer = document.getElementById('over65');

const under18 = users.filter((user) =>{
    if(user.age < 18){
        primoContainer.innerHTML +=`
        <div class="card" style="width:20rem; text-align: center; padding:5px">
            <div class="card-body" style="color:white;">
                <h4 class="title">${user.name} ${user.surname}</h4>
                <p class="text">Età: ${user.age}</p>
            </div>
        </div>
        `
        return user;
    }
});

const over65 = users.filter((user) =>{
    if(user.age >= 65){
        secondoContainer.innerHTML +=`
        <div class="card" style="width:20rem; text-align: center; padding:5px">
            <div class="card-body" style="color:white;">
                <h4 class="title">${user.name} ${user.surname}</h4>
                <p class="text">Età: ${user.age}</p>
            </div>
        </div>
        `
        return user;
    }
});