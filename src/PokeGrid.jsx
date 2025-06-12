import poke from './assets/pokeapi_256.png'
import eevee from './assets/eevee.jpg'
import './PokeGrid.css'
import Menu from './Menu'
 
const PokeGrid = () => {
 
    return (
        <div>
            <Menu />
        <div className="PokeGrid">
            <img src={poke}/>
            <img src={eevee}/>
            <img src={poke}/>
            <img src={eevee}/>
            <img src={poke}/>
            <img src={eevee}/>
            <img src={poke}/>
            <img src={eevee}/>
            <img src={poke}/>
            <img src={eevee}/>
            <img src={poke}/>
            <img src={eevee}/>
        </div>
        </div>
    )
}
 
export default PokeGrid