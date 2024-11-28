// el uso de fragment para poder agrupar html
//Podemos escribir variables aquí si es aquí no deben cambiar de Estado 
//ni deben depender de algún evento por el cliente


const nombre = 'Roldan';
const ar1 = [1, 2, 3, 4];
const obj1 = {
    nombre: "roldan"
}
const sumar = (a, b) => {
    return a + b;
}
export const SegundoComponente = () => {
    return (
        <>
            <h3>tu nombre es  {nombre}</h3>
            <h3>tu arreglo es  {ar1}</h3>
            <h2>tu objeto es {obj1.nombre}</h2>
            <h2>tu objeto en json  {JSON.stringify(obj1)}</h2>
            <code>{JSON.stringify(obj1)}</code>
            <p>
                el resultado es {sumar(8, 9)}
            </p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quam sint cum error atque, cumque amet voluptate maxime sequi excepturi deleniti ullam consequatur asperiores quaerat ratione ipsa incidunt, odit molestiae.</p>
        </>
    )
}
