import Lottie from "react-lottie";
import * as animationData from "../../assets/lottie files/74387-uiux.json";
import Works from "./Works/Works";

// import DesignCard from './DesignCard';
const UiHome = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="ui">
        <div className="ui_design">
          <div className="col-md-4">
            <h1>UI AND UX DESIGN SERVICES</h1>
            <br />
            <h4>
              Want to build your product with a team that establishes a clear
              design process, meets deadlines, and delivers a spot-on end
              result? Turn to Intellectsoft’s UI and UX services. Our design
              team is a small design studio within a large software company that
              will help you build an engaging product easily and quickly.
            </h4>
            <br/>
            <button className='btn'>Hire Us</button>
          </div>

          <div className="col-md-8 lottie__file">
            <Lottie
              options={defaultOptions}
              style={{ marginBottom: "150px" }}
              height={550}
              width={550}
            />
          </div>
        </div>

        {/* Design add */}
        
        <Works />
      </div>
    </>
  );
};

export default UiHome;
