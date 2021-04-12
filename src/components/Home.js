import home1 from './../assets/home1.png';
import home2 from './../assets/home2.png';
import {Link} from "react-router-dom";
import './../App.js';
const Home = () => {

    return ( 
        <section className="p-6">
            <Link className="w-8" to="/beers"><div>
                <img className="w-full" 
                    src={home1} alt="Alle Biere"/>
                <h2 className="w-full bg-yellow-300 text-left text-white pl-2 text-lg font-bold	" 
                >All beers</h2>
                <p className="text-justify " 
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere commodi, sunt vel consectetur odit hic minima.</p>
            </div></Link>
            <Link className="w-8" to="/randombeer"><div className="my-8">
                <img className="w-full"  
                    src={home2} alt="Verschiedene Biere"/>
                <h2 className="w-full bg-yellow-300 text-left text-white pl-2 text-lg font-bold	" 
                >Random beer</h2>
                <p className="text-justify " 
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere commodi, amet consectetur odit hic minima.</p>
            </div></Link>
        </section>
        
     );
}
 
export default Home;