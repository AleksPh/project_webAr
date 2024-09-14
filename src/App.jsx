import { useState } from 'react'
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import '../src/style/style.css'
import BackpackModel from './components/backpackViewer/backpackModel'
import QrCode from './components/backpackViewer/qrCode'
import Configurations from './components/configurations/configurations'
import ViewToggleButton from './components/controls/viewToggleButton'
import leatherTexture  from '/textures/leather_baseColor.jpg'
import fabricTexture  from '/textures/fabric_baseColor.jpg'
import denimTexture  from '/textures/denim_baseColor.jpg'
import metalColor from '/textures/metall_baseColor.jpg'
import metalNormal from '/textures/metall_normal.jpg'; 
import metalOcclusion from '/textures/metall_occlusionRoughnessMetallic.jpg';

function App() {
  const leather = useLoader(THREE.TextureLoader, leatherTexture);
  const fabric = useLoader(THREE.TextureLoader, fabricTexture);
  const denim = useLoader(THREE.TextureLoader, denimTexture);
  const [isPopUpActive, setIsPopUpActive] = useState(false)
  const [currentTexture, setCurrentTexture] = useState(leather);
  const [currentColor, setCurrentColor] = useState('#743f27');
  const [currentMetalColor, setCurrentMetalColor] = useState('#c0c0c0');

  return (
    <div className='wrapper'>
       <ViewToggleButton setIsPopUpActive={setIsPopUpActive} isPopUpActive={isPopUpActive}/>
       <BackpackModel currentTexture={currentTexture}  currentColor={currentColor}  metalColor={metalColor} metalNormal={metalNormal} metalOcclusion={metalOcclusion} currentMetalColor={currentMetalColor}/>
       <QrCode isPopUpActive={isPopUpActive} setIsPopUpActive={setIsPopUpActive}/>
       <Configurations currentTexture={currentTexture} setCurrentTexture={setCurrentTexture} leather={leather} fabric={fabric} denim={denim} currentColor={currentColor} setCurrentColor={setCurrentColor} currentMetalColor={currentMetalColor} setCurrentMetalColor={setCurrentMetalColor}/>
    </div>
  )
}

export default App
