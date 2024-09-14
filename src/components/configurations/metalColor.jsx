import { useState } from "react"
import colorSilver from "../../images/metal-colors/metal_color_silver.svg"
import colorGold from "../../images/metal-colors/metal_color_gold.svg"
import colorDark from "../../images/metal-colors/metal-color_dark.svg"

const MetalColor = ({currentMetalColor, setCurrentMetalColor})=>{
  const [isMetalChosen, setMetalChosen] = useState(true)
  const [isGoldChosen, setGoldChosen] = useState(false)
  const [isDarkChosen, setDarkChosen] = useState(false)

  const metalClick = ()=>{
    setMetalChosen(true)
    setGoldChosen(false)
    setDarkChosen(false)
    setCurrentMetalColor('#ffff')
  }
  const goldClick = ()=>{
    setMetalChosen(false)
    setDarkChosen(false)
    setGoldChosen(true)
    setCurrentMetalColor('yellow')
  }
  const darkClick = ()=>{
    setGoldChosen(false)
    setDarkChosen(true)
    setMetalChosen(false)
    setCurrentMetalColor('black')
  }
  return(
    <div className="body-color">
      <p className="body-color__text">METAL COLOR</p>
      <hr className="body-color__line"/>
      <div className="body-color__block">
        <div className="body-color__color">
          <span className={`body-color__color-circle ${isMetalChosen ? 'active' : ''}`} onClick={metalClick}><img src={colorSilver} alt="color-silver"/></span>
          <p className="body-color__color-text">Silver</p>
        </div>
        <div className="body-color__color">
          <span className={`body-color__color-circle ${isGoldChosen ? 'active' : ''}`} onClick={goldClick}><img src={colorGold} alt="color-gold"/></span>
          <p className="body-color__color-text">Gold</p>
        </div>
        <div className="body-color__color">
          <span className={`body-color__color-circle ${isDarkChosen ? 'active' : ''}`} onClick={darkClick}><img src={colorDark} alt="color-black"/></span>
          <p className="body-color__color-text">Black</p>
        </div>
      </div>
    </div>
  )
}
export default MetalColor