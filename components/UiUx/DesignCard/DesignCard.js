import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';


const DesignCard = () => {
    return (
        <div className='designCard'>
          <Card sx={{ maxWidth: 280 }} className=' card col-md-3'>
      <CardActionArea>
        <CardMedia className='cardMedia'
          component="img"
          height="140"
          image="/mobile.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mobile App design
              </Typography>
              {/* color="text.secondary" */}
          <Typography variant="body2"  className='paragraph'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
            </Card>
            
            {/* card 2 */}
            <Card sx={{ maxWidth:280 }} className= ' card col-md-3'>
      <CardActionArea>
        <CardMedia className='cardMedia'
          component="img"
          height="140"
          image="/ui-ux.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           UiUx design
              </Typography>
              {/* color="text.secondary" */}
          <Typography variant="body2"  className='paragraph'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
            </Card>
            
            {/* card 3 */}

            <Card sx={{ maxWidth: 280 }} className=' card col-md-3'>
      <CardActionArea>
        <CardMedia className='cardMedia'
          component="img"
          height="140"
          image="/webdesign.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Web design
              </Typography>
            {/* color="text.secondary" */}
          <Typography variant="body2"  className='paragraph'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
            </Card>
            {/* card 4 */}
            <Card sx={{ maxWidth: 280 }} className=' card col-md-3'>
      <CardActionArea>
        <CardMedia className='cardMedia'
          component="img"
          height="140"
          image="/graphic-design .png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Graphic design
          </Typography>
          <Typography variant="body2"  className='paragraph'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
     );
}
 
export default DesignCard;