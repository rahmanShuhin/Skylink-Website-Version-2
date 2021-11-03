import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Approach = () => {
  return (
    <div className="ui_approach ">
      <h1>Our approach</h1>
      <div className="ui_item ">
        <Card sx={{ maxWidth: 345 }} className=" card col-md-4">
          <CardActionArea>
            <CardMedia
              className="cardMedia"
              component="img"
              height="140"
              image="/discovery.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography  gutterBottom variant="h5" component="div">
                Discovery
              </Typography>
              <Typography variant="body2" className="paragraph">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* card 2 */}
        <Card sx={{ maxWidth: 345 }} className=" card col-md-4">
          <CardActionArea>
            <CardMedia
              className="cardMedia"
              component="img"
              height="140"
              image="/prototype.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Prototype
              </Typography>
              <Typography variant="body2" className="paragraph">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* card 3 */}

        <Card sx={{ maxWidth: 345 }} className=" card col-md-4">
          <CardActionArea>
            <CardMedia
              className="cardMedia"
              component="img"
              height="140"
              image="/delivery.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Delivery
              </Typography>
              <Typography variant="body2" className="paragraph">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Approach;
