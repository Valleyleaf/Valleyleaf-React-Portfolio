import PortfolioProject1 from "./Portfolio";
import PortfolioProject2 from "./Portfolio";
import PortfolioProject3 from "./Portfolio";
import PortfolioProject4 from "./Portfolio";


export default function Portfolio(){

    return (
      <div className='center-content flex-container-rows'>
        <div>
          <PortfolioProject1/>
          <PortfolioProject2/>
        </div>
      </div>
    );
  }


