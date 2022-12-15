import { useQuery } from 'react-query';
import pokeApi from '../api/pokedex';

export default ({ offset = 0 }) => {
  const ctx = {
    method: 'getPokemons',
    params: {
      offset,
      limit: 20,
    },
  };

  const queryKey = `@@agenda/${ctx.method}`;
  return useQuery([queryKey, offset], () => pokeApi(ctx));
};
