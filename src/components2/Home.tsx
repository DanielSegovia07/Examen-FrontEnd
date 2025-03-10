import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
      
          <div className="card shadow-sm mb-3" style={{ borderRadius: '8px', padding: '15px' }}>
            <div className="card-body">
              <h5 className="card-title text-success" style={{ fontSize: '1.2rem' }}>Ejercicio 1: Componente de Botón</h5>
              <p className="card-text" style={{ fontSize: '0.95rem' }}>
                El objetivo de este ejercicio es crear un componente que muestre un botón que cambie su texto al hacer clic. 
                El botón mostrará el texto "Presionar", y al hacer clic en él, el texto cambiará a "Presionado". 
                Se utilizará el hook <code>useState</code> para manejar el estado del texto y se tiparán correctamente el estado y las props usando TypeScript.
              </p>
            </div>
          </div>

        
          <div className="card shadow-sm mb-3" style={{ borderRadius: '8px', padding: '15px' }}>
            <div className="card-body">
              <h5 className="card-title text-success" style={{ fontSize: '1.2rem' }}>Ejercicio 2: Contador Simple</h5>
              <p className="card-text" style={{ fontSize: '0.95rem' }}>
                Este ejercicio tiene como objetivo crear un contador que incremente y disminuya su valor al hacer clic en los botones correspondientes. 
                Se debe mostrar el valor actual del contador, con botones para incrementar y disminuir el valor. 
                Se utilizará <code>useState</code> para manejar el estado del contador y se tiparán adecuadamente tanto el estado como las funciones usando TypeScript.
              </p>
            </div>
          </div>

          
          <div className="card shadow-sm mb-3" style={{ borderRadius: '8px', padding: '15px' }}>
            <div className="card-body">
              <h5 className="card-title text-success" style={{ fontSize: '1.2rem' }}>Ejercicio 3: Lista Estática</h5>
              <p className="card-text" style={{ fontSize: '0.95rem' }}>
                El objetivo de este ejercicio es mostrar una lista estática de nombres. 
                Se debe crear un array con al menos 5 nombres y mostrarlos en una lista usando el método <code>map</code>. 
                Además, se debe definir correctamente los tipos para el array y los elementos utilizando TypeScript.
              </p>
            </div>
          </div>

        
          <div className="card shadow-sm mb-3" style={{ borderRadius: '8px', padding: '15px' }}>
            <div className="card-body">
              <h5 className="card-title text-success" style={{ fontSize: '1.2rem' }}>Ejercicio 4: CRUD con API</h5>
              <p className="card-text" style={{ fontSize: '0.95rem' }}>
                En este ejercicio, se debe consumir la API <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">https://jsonplaceholder.typicode.com/</a> 
                para realizar operaciones CRUD sobre los recursos de 'posts'. 
                El objetivo es obtener una lista de posts desde la API, permitir la creación de un nuevo post (solo simulado), editar el título de un post existente (simulado) 
                y eliminar un post (simulado). Se utilizarán los hooks <code>useEffect</code> y <code>useState</code> para manejar la obtención y actualización de los datos, 
                y se tiparán las respuestas y estados usando TypeScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
