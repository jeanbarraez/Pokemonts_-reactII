
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PokemontsContext } from "../context/PokemontsContext";
import Swal from "sweetalert2";
const Pokemones = () =>  {
  const { character,characterSelected, setCharacterSelected } = useContext(PokemontsContext);
  
  //const {characterSelected, setCharacterSelected} = useContext(PokemontsContext);
  const navigate = useNavigate();
  const handleClickDetails = async() => {
   characterSelected ? navigate(`/Pokemones/${characterSelected}`)
   :Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
  }

  
  return (
    <div className="container">
      <h1>Selecciona un Pokémons</h1>
      <div className="col-5 col-sm-3 col-lg-2 mx-auto">
        <select
          className="form-select text-center"
          value={characterSelected}
          onChange={({target}) => setCharacterSelected(target.value)}
        >
          <option value="" disabled>
            Pokemones
          </option>
          {character.map(({ name }, i) => (
            <option key={i} value={name}>
              {name}
            </option>
          ))}
         
        </select>
        <Button
          variant="dark"
          className="mt-3"
        onClick={handleClickDetails}
        >
          Details
        </Button>
      </div>
    </div>
  );
}
export default Pokemones; 