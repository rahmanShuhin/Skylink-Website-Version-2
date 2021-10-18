import Lottie from "react-lottie";
import * as mobile from "../../assets/lottie files/34375-mobile-application.json";
import * as animationData from "../../assets/lottie files/74387-uiux.json";
const UiHome = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    };
    const defaultOptionsMobile = {
        loop: true,
        autoplay: true,
        mobile: mobile,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <div className="ui">
      <div className="ui_design">
        <div className="col-md-4">
          <h1 style={{ color: "white" }}>UI AND UX DESIGN SERVICES</h1>
          <br />
          <h4 style={{ color: "#D8D4E2 " }}>
            Want to build your product with a team that establishes a clear
            design process, meets deadlines, and delivers a spot-on end result?
            Turn to Intellectsoft’s UI and UX services. Our design team is a
            small design studio within a large software company that will help
            you build an engaging product easily and quickly.
          </h4>
        </div>
        <div className="col-md-8">
          <Lottie
            options={defaultOptions}
            style={{ marginBottom: "150px" }}
            height={400}
            width={400}
          />
        </div>
          </div>
          <div className='ui_service'>
              <h1>OUR UI AND UX DESIGN SERVICES AND CAPABILITIES</h1>
              <div className="col-md-3">
         
              </div>
              <div className="col-md-3">
       
              </div>
              <div className="col-md-3">
        
              </div>
              <div className="col-md-3">
          
              </div>
          </div>
    </div>
  );
};

export default UiHome;
