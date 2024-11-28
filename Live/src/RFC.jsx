export const  RFC_calculador=({nombre,paterno,materno,Fecha_Nacimiento} )=>{

    let Paterno = paterno.toLocaleUpperCase();
    let Materno = materno.toLocaleUpperCase();
    let Nombre =nombre.toLocaleUpperCase();
    let Fecha =Fecha_Nacimiento;
    
    let Dos
    let Letras=Paterno.split("");
    
    for(let i=0; i<Letras.length; i++){
            if( Letras[i]=="A"||
                Letras[i]=="E"||
                Letras[i]=="I"||
                Letras[i]=="O"||
                Letras[i]=="U"){
                Dos=Letras[i];
                break;
            }   
    }
    let Uno,Tres,Cuatro,Año,Dia,Mes;
    Uno =Paterno.slice(0,1);
    Tres=Materno.slice(0,1);
    Cuatro=Nombre.slice(0,1);
    Año=Fecha.substring(8,10);
    Dia=Fecha.substring(0,2);
    Mes=Fecha.substring(3,5);
    console.log(Año,Dia,Mes,Fecha)
    let rfc=Uno.concat(Dos,Tres,Cuatro,Año,Mes,Dia)
    //console.log(rfc)
    document.getElementById("R").value=rfc;
    
    console.log(rfc)
    
    return false;
    }