import React from "react";
import * as R from "ramda";
import { useDispatch, useSelector } from "react-redux";
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import usePokemon from "../hooks/usePokemon";
import { addFavori, removeFavori } from "../ducks/favoris";

const pokeballUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';

const Card = ({ id }) => {
  const { data: pokemon = {}, isLoading } = usePokemon({ id });
  const dispatch = useDispatch();
  const isFavori = useSelector(state => R.has(id, state.favoris));
  const action = isFavori ? removeFavori : addFavori;

  const { sprites: { front_default: image } = {}, types = [], name } = pokemon;
  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton 
            aria-label="add to favori"
            onClick={() => dispatch(action(id))}
            sx={{
              filter: isFavori ? 'grayscale(0%)' : 'grayscale(100%)',
              '&:hover': {
                filter: 'grayscale(0%)',
              },
            }}
          >
            <img src={pokeballUrl} />
          </IconButton>
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign='center' sx={{ textTransform: 'capitalize'}}>
          {name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="name"
        image={image}
        sx={{ imageRendering: 'pixelated', width: 150, margin: 'auto' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" textAlign='center'>
          {R.join(' • ', R.map(({ type: { name } }) => name, types))}
        </Typography>
      </CardContent>
     
    </MuiCard>
  );
}

export default Card;