import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detail, setDetail] = useState({})
  const{ id } = useParams();
  console.log("User ID:", id);
  const url = `https://jsonplaceholder.typicode.com/users/${id}` ;
  useEffect(() => {
    axios(url)
    .then((res) => {
      console.log(res.data);
      setDetail(res.data);
    })
    .catch((error) => {
      console.error("Error user data:", error); 
      });
  }, []);
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <section className='detail'>
      <h1>Detail Dentist id </h1>      
      <div>
        <img className="foto" src="/public/images/doctor.jpg" alt="" />
        <h3>{detail.name} </h3>
        <h3>{detail.email} </h3>
        <h3>{detail.phone} </h3>
        <h3>{detail.website} </h3>
      </div>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </section>
  )
}

export default Detail