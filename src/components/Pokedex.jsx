import { useEffect, useState } from 'react'
import * as R from 'ramda'
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import usePokemons from '../hooks/usePokemons';
import Card from './Card';

const CardContainer = styled(Box)(({ theme }) => ({
  'display': 'grid',
  'gridTemplateColumns':' repeat(3, 1fr)',
  'gridTemplateRows': '1fr',
  'gridColumnGap': theme.spacing(1),
  'gridRowGap': theme.spacing(1),
}));

const offset = 20;

const App = () => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const { data: { count = 0, results: pokemons = [] } = {}, isLoading } = usePokemons({ offset: (page - 1) * offset });

  useEffect(() => {
    if (count !== 0) {
      setMaxPage(Math.round(count / offset));
    }
  }, [count]);

  return (
    <Box sx={{ maxWidth: 1280, minWidth: 480, margin: 'auto' }}>
      <Pagination count={maxPage} page={page} onChange={(_, page) => setPage(page)} showFirstButton showLastButton />
      <CardContainer>
        {R.map(({ id }) => (
          <Card
            key={`pokemon-${id}`}
            id={id}
          />
        ))(pokemons)}
      </CardContainer>
    </Box>
  )
}

export default App
