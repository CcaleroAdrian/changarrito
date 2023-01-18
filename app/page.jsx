'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { love_ya_like_a_sister } from './fonts';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const styles = {
    paperContainer: {
      backgroundImage: `url(${"home.jpg"})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
};


export default function Home() {
  return (
    <Box style={styles.paperContainer} sx={{ height:'80vh'}}>
        <Typography variant="h1" component="h2" className={love_ya_like_a_sister.className} sx={{ pl: 35, pt:10, width: '80%'}} >
          Busca comida 
        </Typography>
        <Typography variant="h1" component="h2" className={love_ya_like_a_sister.className} sx={{ pl: 50, width: '80%'}} >
          cerca de tí...
        </Typography>
        <Grid container spacing={0.5} >
          <Grid item md={1}>
              <LunchDiningOutlinedIcon color='primary' fontSize='50' sx={{ ml: 1, mt: 3 }} />
          </Grid>
          <Grid item md={5}>
            <TextField id="input-buscar" sx={{width: '100%',}} label="Tacos, comida, etc..." type="search"/>
          </Grid>
          <Grid item md={2}>
            <Button variant="contained" color='primary' fullWidth='true' size="large">Buscar</Button>
          </Grid>
        </Grid>
    </Box>
  )
}
