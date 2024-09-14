import qrcodeImg from '../../images/icons/vaadin_qrcode.svg' 
import closeIcon from '../../images/icons/iwwa_delete.svg'
const QrCode = ({isPopUpActive, setIsPopUpActive})=>{
  return(
    <div className={`qrcode ${isPopUpActive ? "active" : ""}`}>
      <span className='close-button' onClick={()=>{setIsPopUpActive(false)}}><img src={closeIcon} alt="x" /></span>
      <wrapper className="qrcode__wrapper">
        <p className="qrcode__text">Scan the QR code with your phone. Within 1-3 seconds the AR function opens on your phone.</p>
        <hr className="qrcode__line"/>
        <div className="qrcode__image">
          <img src={qrcodeImg} alt="qrcode image" />
        </div>
      </wrapper>
    </div>
  )
}

export default QrCode