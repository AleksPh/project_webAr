import buttonImage from '../../images/icons/cube_icon.svg';

const ViewToggleButton = ({ setIsPopUpActive, isPopUpActive }) => {
  const togglePopUp = () => {
    setIsPopUpActive(prev=>!prev)
  };

  return (
    <div className="toggle-button">
      <button className="toggle-button__button" onClick={togglePopUp}>
        <img className="toggle-button__image" src={buttonImage} alt="cube"/>
        <p className="toggle-button__text">See in real life</p>
      </button>
    </div>
  );
};

export default ViewToggleButton;
