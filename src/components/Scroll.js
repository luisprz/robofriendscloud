import React from 'react';

/* 
learned about 
props que son propiedades que son la forma que tiene react para pasar parametros de un componente padre a los hijos, son inmutables no modificar ni actualizar solo para modo lectura.
state: junto con props es de los 2 tipos de data que controlan el componente. mientras props son seteado por los padres y son fixed, necesitamos usar state para datos que van a cambiar. se inicializa state en el constructor y se llama setState cuando se quiera cambiar algo.
, and now children is  viene siendo cualquier cosa dentro de una etiqueta jsx y se llama como props.children*/

/* 
const element = <h1>Hello, world!</h1>;
Esta curiosa sintaxis de etiquetas no es ni un string ni HTML.

Se llama JSX, y es una extensión de la sintaxis de JavaScript. Recomendamos usarlo con React para describir cómo debería ser la interfaz de usuario. JSX puede recordarte a un lenguaje de plantillas, pero viene con todo el poder de JavaScript.

*/

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '500px'}}> {/* aqui se usa diuble curly brackets por que este estilo de atributo y jsx puede agregarse estilos porque es una expresion de javascript y puede devolver la propiedad css overflow-y u overflowY para jsx */} 
            {props.children}
        </div>
    );
};

export default Scroll;