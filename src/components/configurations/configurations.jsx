import BodyColor from "./bodyColor"
import BodyMaterial from "./material"
import MetalColor from "./metalColor"

const Configurations = ({currentTexture, setCurrentTexture, denim, fabric, leather, currentColor, setCurrentColor, currentMetalColor, setCurrentMetalColor})=>{
  return(
    <div className="configuration">
    <BodyColor currentColor={currentColor} setCurrentColor={setCurrentColor}/>
    <MetalColor currentMetalColor={currentMetalColor} setCurrentMetalColor={setCurrentMetalColor}/>
    <BodyMaterial currentTexture = {currentTexture} setCurrentTexture = {setCurrentTexture} denim={denim} fabric={fabric} leather={leather}/>
    </div>
  )
}

export default Configurations