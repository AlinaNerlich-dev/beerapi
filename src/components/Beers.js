import Beerteaser from "./Beerteaser";

const Beers = (props) => {

    return ( 
       <div>
           <h2 className="bg-yellow-300 text-white bold text-lg" >Overview</h2>
           <div>
               {props.beers.map((beer, index) =>
               <Beerteaser key={index} beer={beer} /> )}
           </div>
       </div>
     );
}
 
export default Beers;