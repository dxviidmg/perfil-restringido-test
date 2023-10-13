import React, { useState, useEffect } from 'react';

const MiComponente = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Token 6f80e8207c1e9c4a4167fc135d8a02bf1597c749");
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        const respuesta = await fetch("https://userspre.faisan.app/saam/perfil-usuario-restringido/46?org=774", requestOptions);
        const datosJson = await respuesta.text();
        setDatos(datosJson);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };

    fetchData();
  }, []); // El segundo argumento vacío asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <div>
      {datos ? (
        <div>
          {/* Aquí puedes mostrar los datos obtenidos de la API */}
          <p>{datos}</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default MiComponente;
