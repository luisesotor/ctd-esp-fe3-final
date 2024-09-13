import React from "react";
import Card from "../Components/Card";
import { useDentistsState } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useDentistsState();

  return (
    <section>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((dentist) => (
          <Card key={dentist.id} dentist = {dentist} />
        ))}
      </div>
    </section>
  );
};

export default Favs;
