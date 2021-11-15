
// const DesignTool = () => {
//     return (

//        <>
//         <div className='design_tool'>
           
//            <h1>What design tools we use</h1>
//            </div>
              
//             <div className="col-md-3">
//             <img src="/figma-logo.png" /> 
//             </div>
//             <div className="col-md-3">
//             <img src="/sketch-logo.png" />
//             </div>
//             <div className="col-md-3">
//             <img src="/pinterest-logo-5.png" />
//             </div>
//              <div className="col-md-3">
//                <img src="/marvel-logo-2.png" />
//             </div>
           
//    </>
           
        
    
//      );
// }
 
// export default DesignTool;
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

const DesignTool = () => {
  return (
    <div className="approach ">
      <h1 className="h1">What design tools we use</h1>
      <div className="approach_item ">
        <Card variant="outlined" sx={{ maxWidth: 345 }} className=" card col-md-4">
          <CardActionArea>
            <CardMedia
              className="cardMedia"
              component="img"
              height="140"
              image="/figmap.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography className="typo"  gutterBottom variant="h5" component="div">
                Figma
              </Typography>
              {/* <Typography variant="body2" className="paragraph">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>

        {/* card 2 */}
        <Card variant="outlined" sx={{ maxWidth: 345 }} className=" card col-md-4">
          <CardActionArea>
            <CardMedia
              className="cardMedia"
              component="img"
              height="140"
              image="/sketch-logo.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography className="typo" gutterBottom variant="h5" component="div">
                Sketch
              </Typography>
              {/* <Typography variant="body2" className="paragraph">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>

        {/* card 3 */}

        <Card variant="outlined" sx={{ maxWidth: 345 }} className=" card col-md-4">
          <CardActionArea>
            <CardMedia
              className="cardMedia"
              component="img"
              height="140"
              image="/pinterest-logo-5.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography className="typo" gutterBottom variant="h5" component="div">
               Pinterest
              </Typography>
              {/* <Typography variant="body2" className="paragraph">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>

         {/* card 4 */}

         <Card variant="outlined" sx={{ maxWidth: 345 }} className=" card col-md-4">
          <CardActionArea>
            <CardMedia
              className="cardMedia"
              component="img"
              height="100"
              image="/marveld.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography className="typo" className="text-center" gutterBottom variant="h5" component="div">
               Marvel
              </Typography>
              {/* <Typography variant="body2" className="paragraph">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default DesignTool;
