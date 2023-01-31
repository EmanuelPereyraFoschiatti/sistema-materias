var materiasHTML = document.querySelector(".materias");

const materias =[
    {
        nombre: "Fisica 1",
        nota:7
    },{
        nombre: "Calculo 3",
        nota:8
    },{
        nombre: " Base de datos 3",
        nota:7
    },{
        nombre: "Matematicas discretas 2",
        nota:8
    },{
        nombre: "Programacion 4",
        nota:9
    },
];

const obtenerMateria = (id)=>{
    return new Promise( (resolve,reject) =>{ 
        materia = materias[id];
        if (materia == undefined) reyect ("La materia no existe");
        else setTimeout (() => {resolve( materia)}, Math.random()*400);

    })
}
// obtenerMateria(1).then (res => console.log (res))
const devolverMaterias = async ()=> {
    let materia = [];
    for (let i = 0; i <materias.length; i++){
        console.log(materiasHTML)
        materia [i]= await obtenerMateria(i);
        let newHTMLCode =
        `<div class ="materia">`+
            `<div class="nombre">${materia[i].nombre}</div>`+
            `<div class="nota">${materia[i].nota}</div>`+
        `</div>`;
        materiasHTML.innerHTML += newHTMLCode;  
    }
}

devolverMaterias()