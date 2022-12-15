import * as R from 'ramda';
import axios from 'axios';
import { parsePokemons } from './parsers';
import { pokemonUrl } from './constants';

const endpoint = path => `${pokemonUrl}${path}`;

const _get = (path, parser = R.prop('data')) => ({ params, headers }) => {
  if (R.is(Function, path)) return axios.get(endpoint(path(params)), { params, headers }).then(parser);
  return axios.get(endpoint(path), { params, headers }).then(parser);
};

const methods = {
  getPokemons: _get('/pokemon', parsePokemons),
  getPokemon: _get(({ id }) =>`/pokemon/${id}`),
};

const error = method => () => {
  throw new Error(`Unkown method: ${method}`);
};

const main = ({ method, ...rest }) => (methods[method] || error(method))(rest);

export default main;
