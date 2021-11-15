import Approach from "../Approach/Approach";
import DesignCard from "../DesignCard/DesignCard";
import DesignTool from "../DesignTool/DesignTool";
import MidFooter from "../MidFooter/MidFooter";

const Works = () => {
  return (
    <div className="ui_service">
      <h1>OUR UI AND UX DESIGN SERVICES AND CAPABILITIES</h1>
      <div className="design">
        <DesignCard />

        <MidFooter />

        <DesignTool />

        <Approach />
      </div>
    </div>
  );
};

export default Works;
