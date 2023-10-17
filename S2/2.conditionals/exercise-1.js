const alumns = [

    {
        name: 'Pepe Viruela',
        T1: false, T2: false,
        T3: true,
        isApproved: false
    },

    {
        name: 'Lucia Aranda',
        T1: true, T2: false,
        T3: true,
        isApproved: false
    },

    {
        name: 'Abel Cabeza',
        T1: false,
        T2: true,
        T3: true,
        isApproved: false
    },

    {
        name: 'Alfredo Blanco',
        T1: false,
        T2: false,
        T3: false,
        isApproved: false
    },

    {
        name: 'Raquel Benito',
        T1: true,
        T2: true,
        T3: true,
        isApproved: false
    }
]

/*Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un 'console.log.*/
for (let index = 0; index < alumns.length; index++) {
    let aprobadas = 0
    if (alumns[index].T1 === true) {
        aprobadas++;
        
    }
    if (alumns[index].T2 === true) {
        aprobadas++;
        
    }
    if (alumns[index].T3 === true) {
        aprobadas++;
        
    }
    if (aprobadas >=2) {
        alumns[index].isApproved = true;
        console.log(alumns[index].name + "HA APROBADO");
        
        
    }else{
        console.log(alumns[index].name + "HA SUSPENDIDO");
    }
    
    
}