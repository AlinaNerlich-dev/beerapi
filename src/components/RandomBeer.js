import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RandomBeer = (props) => {
  const [randomBeer, setRandomBeer] = useState(null);
  
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
    .then(res => res.json())
        .then( 
          (result) => {
            setRandomBeer(result)
          },
        )
  }, []);

  if (randomBeer) {
    const {
      name,
      image_url,
      tagline,
      first_brewed,
      attenuation_level,
      description,
    } = randomBeer;

    return (
      <>
        <div className="p-4 pb-20">
        <img className="w-1/4 m-auto" src={ image_url } alt=""/>
        <div className="text-left m-8 leading-relaxed">
            <h1 className="text-4xl font-bold">{name}</h1>
            <h2 className="text-yellow-400 my-4 font-bold">{ tagline }</h2>
            <div className="flex justify-between text-xs">
                <p>First brewed: </p>
                <p>{ first_brewed }</p>
            </div>
            <div className="flex justify-between text-xs"> 
                <p >Attenuation level:</p>
                <p> { attenuation_level }</p>
            </div>
            <p className="mt-4">{ description }</p>
            </div>
            <button onClick={(e) => window.location.reload()} className="bg-yellow-300 rounded-md text-white bold mt-4 p-2">New random beer</button>
        </div>
      </>
    );
  } else {
    return <h2>Loading</h2>;
  }
};

export default RandomBeer;

