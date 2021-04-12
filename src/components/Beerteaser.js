import { Link } from "react-router-dom";

const Beerteaser = (props) => {

    const {image_url, name, tagline, _id} = props.beer;
    console.log(_id)

    return ( 
        <div className="flex m-8 items-center border-b-2 pb-6 border-gray-300">
            <img className="w-1/5" src={image_url} alt="'Bild' + {name}"/>
            <div className=" block ml-8 text-left">
                <h2 className="text-2xl font-bold">{name}</h2>
                <h3>{tagline}</h3>
                <Link to={"/beersdetails/" + _id} >
                    <button className="bg-yellow-300 rounded-md text-white bold mt-4 p-2"
                    >More Infos</button></Link>
            </div>
        </div>
     );
}
 
export default Beerteaser;