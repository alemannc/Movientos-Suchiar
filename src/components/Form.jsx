import React, { useState } from 'react';
import  firestore  from '../firebase'; // Asegúrate de importar correctamente tu instancia de Firestore
import { doc, setDoc } from 'firebase/firestore';

const Form = () => {
  const [alimento, setAlimento] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
  
    try {
      // Obtener referencia al documento en la colección "Carta de porte"
      const documentRef = doc(firestore, 'Carta de porte', '5634161670881280');
      console.log(documentRef)
      // Establecer los datos en el documento
      const response = await setDoc(documentRef, {
        Alimento: alimento,
        Cantidad: cantidad,
      });
      console.log(response, "RESPONSE")
      // Limpiar los campos después de enviar los datos
      setAlimento('');
      setCantidad('');
  
      // Mostrar un mensaje de éxito en la consola
      console.log('Datos enviados con éxito a la tabla Carga de Porte');
    } catch (error) {
      // Mostrar cualquier error en la consola
      console.error('Error al enviar los datos:', error);
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white border rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Carta de Porte</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Alimento:</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded"
            value={alimento}
            onChange={(e) => setAlimento(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Cantidad:</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Subir carta de porte
        </button>
      </form>
    </div>
  );
};

export default Form;
