import * as R from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import Container from "@mui/material/Container";
import Pokedex from "./Pokedex";
import Favoris from "./Favoris";
import { POKEDEX, FAVORIS } from '../constants';
import { selectTab } from '../selectors/app';
import Navbar from './Navbar';

const App = () => {
  const theme = useTheme()
  const tab = useSelector(selectTab);

  return (
    <Container maxWidth={false} disableGutters sx={{ padding: theme.spacing(0, 6), maxHeight: '100vh' }}>
      <Navbar />
      {(() => {
        switch (tab) {
          case POKEDEX:
            return <Pokedex />
          case FAVORIS:
            return <Favoris />
          default:
            return null
        }
      })()}
    </Container>
  );
}

export default App;
