import { useState } from "react"
import colorBrown from "../../images/body-color/body_color_brown.svg"
import colorBlue from "../../images/body-color/body_color_blue.svg"
import colorBlack from "../../images/body-color/body_color_black.svg"

const BodyColor = ({ currentColor, setCurrentColor})=>{
  const [isBrownChosen, setBrownChosen] = useState(true)
  const [isBlueChosen, setBlueChosen] = useState(false)
  const [isBlackChosen, setBlackChosen] = useState(false)

  const brownClick = ()=>{
    setBrownChosen(true)
    setBlueChosen(false)
    setBlackChosen(false)
    setCurrentColor('#743f27')
  }
  const blackClick = ()=>{
    setBrownChosen(false)
    setBlueChosen(false)
    setBlackChosen(true)
    setCurrentColor('black')
  }
  const blueClick = ()=>{
    setBrownChosen(false)
    setBlueChosen(true)
    setBlackChosen(false)
    setCurrentColor('#0f80ad')
  }
  return(
    <div className="body-color">
      <p className="body-color__text">BODY COLOR</p>
      <hr className="body-color__line"/>
      <div className="body-color__block">
        <div className="body-color__color">
          <span className={`body-color__color-circle ${isBrownChosen ? 'active' : ''}`} onClick={brownClick}><img src={colorBrown} alt="color-brown"/></span>
          <p className="body-color__color-text">Brown</p>
        </div>
        <div className="body-color__color">
          <span className={`body-color__color-circle ${isBlackChosen ? 'active' : ''}`} onClick={blackClick}><img src={colorBlack} alt="color-black"/></span>
          <p className="body-color__color-text">Black</p>
        </div>
        <div className="body-color__color">
          <span className={`body-color__color-circle ${isBlueChosen ? 'active' : ''}`} onClick={blueClick}><img src={colorBlue} alt="color-blue"/></span>
          <p className="body-color__color-text">Blue</p>
        </div>
      </div>
    </div>
  )
}

export default BodyColor