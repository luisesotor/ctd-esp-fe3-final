import React from "react";
import { Link } from "react-router-dom";
import { useDentistsState } from "./utils/global.context";
import { FaStar } from "react-icons/fa";

const Card = ({ dentist }) => {
  const {state, dispatch} = useDentistsState();
  const isFav = state.favs.find((fav) => fav.id == dentist.id);

  const addFav = ()=>{
    dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: dentist });
  }

  return (
    <div className="card">

      <img className="foto" src="/images/doctor.jpg" alt="" />
      <Link to={`/detail/${dentist.id}` }>
      <h3> {dentist.name} </h3>
      </Link>
      <h3>User:{dentist.username} </h3>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <FaStar
        color={isFav ? 'gold' : 'gray'}
        onClick={addFav}
        size="24px"
        style={{ cursor: 'pointer' }}
      />
      <button onClick={addFav} className="favButton">
        {isFav ? 'Remove from fav' : 'Add to fav'}
      </button>
    </div>
  );
};

export default Card;
