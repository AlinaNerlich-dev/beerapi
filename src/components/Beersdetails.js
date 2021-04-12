import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Beersdetails = (props) => {
    const { id } = useParams();
    const {image_url, name, tagline, description, attenuation_level, first_brewed} = props.getBeer(id)[0]; // Postion 0 weil Rückgabe ist en Array!!!
  
    return ( 
        <div className="my-20">
        <img className="w-1/4 m-auto" src={ image_url } alt=""/>
        <div className="text-left m-8 leading-relaxed">
            <h1 className="text-4xl font-bold">{name}</h1>
            <h2 className="text-yellow-400 my-4">{ tagline }</h2>
                <div className="flex justify-between text-xs">
                <p>First brewed: </p>
                <p>{ first_brewed }</p>
                </div>
                <div className="flex justify-between text-xs"> 
                    <p >Attenuation level:</p>
                    <p> { attenuation_level }</p>
                </div>
            <p className="mt-4">{ description }</p>
            <Link to="/beers"><button className="bg-yellow-300 rounded-md text-white bold mt-4 p-2">Back to beers</button></Link>
        </div>
        </div>
     );
}
 
export default Beersdetails;