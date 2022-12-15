import { useQuery } from 'react-query';
import pokeApi from '../api/pokedex';

export default ({ id }) => {
  const ctx = {
    method: 'getPokemon',
    params: { id },
  };

  const queryKey = `@@agenda/${ctx.method}`;
  return useQuery([queryKey, id], () => pokeApi(ctx), { enabled: !!id });
};
