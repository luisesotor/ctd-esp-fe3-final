import React, { useEffect, useState, state } from 'react';
import axios from "axios";
import Card from '../Components/Card';
import { ContextGlobal, useDentistsState } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useDentistsState();
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */
          state.dentists.map(( dentist ) => (<Card key={dentist.id} dentist ={dentist} />
          ))}
      </div>
    </main>
  );
};

export default Home