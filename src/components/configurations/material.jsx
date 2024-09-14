import { useState } from "react"

const BodyMaterial = ({currentTexture, setCurrentTexture, denim, fabric, leather})=>{
  const [isLeatherChosen, setLeatherChosen] = useState(true)
  const [isFabricChosen, setFabricChosen] = useState(false)
  const [isDenimChosen, setDenimChosen] = useState(false)

  const LeatherClick = ()=>{
    setLeatherChosen(true)
    setDenimChosen(false)
    setFabricChosen(false)
    setCurrentTexture(leather);
  }
  const FabricClick = ()=>{
    setLeatherChosen(false)
    setDenimChosen(false)
    setFabricChosen(true)
    setCurrentTexture(fabric);
  }
  const DenimClick = ()=>{
    setLeatherChosen(false)
    setDenimChosen(true)
    setFabricChosen(false)
    setCurrentTexture(denim);
  }

  return(
    <div className="body-color">
      <p className="body-color__text">MATERIAL</p>
      <hr className="body-color__line"/>
      <div className="body-color__block">
        <button className={`material-button ${isLeatherChosen ? 'active' : ''}`} onClick={LeatherClick}>Leather</button>
        <button className={`material-button ${isFabricChosen ? 'active' : ''}`} onClick={FabricClick}>Fabric</button>
        <button className={`material-button ${isDenimChosen ? 'active' : ''}`} onClick={DenimClick}>Denim</button>
      </div>
    </div>
  )
}

export default BodyMaterial