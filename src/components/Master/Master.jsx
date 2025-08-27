import profilePicture from "../../assets/img/ProfilePicture.jpg"
import Loading from '../Master/Loading/Loading'
import MasterTopLeft from "./MasterComponenets/MasterTopLeft"
import MasterTopRight from "./MasterComponenets/MasterTopRight"
import MasterMiddleLeft from "./MasterComponenets/MasterMiddleLeft"
import MasterMiddleRight from "./MasterComponenets/MasterMiddleRight"
import MasterBottomLeft from "./MasterComponenets/MasterBottomLeft"
import MasterBottomRight from "./MasterComponenets/MasterBottomRight"
import '../../assets/css/master.css'


  export default function About(){
  return (
    <div className="masterClass"> 
      <div className="flexRow">
        <MasterTopLeft/>
        <MasterTopRight/>
      </div>
      <div className="flexRow">
        <MasterMiddleLeft />
        <a href="https://github.com/Valleyleaf" target="_blank" rel="noopener noreferrer">
          <img className="profileImg" src={profilePicture} alt="" />
        </a>
        <MasterMiddleRight/>
      </div>

      <div className="flexRow">
        <MasterBottomLeft />
        <MasterBottomRight />
      </div>
    </div>
  );
};
