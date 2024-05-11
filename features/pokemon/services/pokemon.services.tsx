import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {PokemonListing} from '../models';
import {PokemonDetailData} from '../models';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: build => ({
    pokemonList: build.query<PokemonListing, void>({
      query() {
        return {
          url: 'pokemon',
          params: {
            limit: 9,
          },
          method: 'GET',
        };
      },
    }),
    pokemonDetail: build.query<PokemonDetailData, {name: string}>({
      query: ({name}) => `pokemon/${name}/`,
    }),
  }),
});

export const {usePokemonListQuery, usePokemonDetailQuery} = pokemonApi;
