import * as R from 'ramda';

export const parsePokemons = R.pipe(
  R.prop('data'),
  R.over(R.lensProp('results'), R.map(({ name, url }) => {
    const id = R.pipe(R.split('/'), R.reject(R.isEmpty), R.last)(url)
    return { id, name };
  })),
)