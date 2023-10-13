import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";
const CardPokemon = ({ pokemon }) => {
  const { name, stats, src, types } = pokemon;
  const navigate = useNavigate();
  const ClickPokemonts = () => {
    navigate(`/Pokemones`);
  };

  return (
    <section className="conteiner text-center">
      <Card
        style={{ with: 37 }}
        className=" mt-5 mx-auto text-center shadow-lg p-3 mb-5 bg-dark rounded text-white"
      >
        <Card.Img height="300" src={src} />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <span className="list-unstyled text start">
            <Card.Text className="fw-bold text-center">
              {stats?.map((stat, i) => (
                <li key={i}>
                  {stat.name}:{stat.base}
                </li>
              ))}
            </Card.Text>
          </span>
          <Card.Text className="bg-danger text-white p-2 rounded fw-bold text-center text capitalize mt-3 ">
            {types}
          </Card.Text>
        </Card.Body>
      </Card>
      <Button onClick ={ClickPokemonts}>

      </Button>
    </section>
  );
};

export default CardPokemon;
