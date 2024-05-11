import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {style} from './style';
import {Provider} from 'react-redux';
import {store} from './state/pokemon.store';
import {PokemonList} from './features/pokemon/pokemon-list/pokemon-list.component';
import {PokemonDetails} from './features/pokemon/pokemon-details/pokemon-details';

function App() {
  const [selectedPokemon, selectPokemon] = React.useState<string | undefined>(
    undefined,
  );
  return (
    <React.StrictMode >
      <Provider store={store}>
        <View>
        <View>
          <Text style={style.header}>My Pokedex</Text>
        </View>
        <View>
          {selectedPokemon ? (
            <View style={{alignSelf: 'flex-start'}}>
              <PokemonDetails pokemonName={selectedPokemon} />
              <Pressable
                style={style.listItem}
                onPress={() => selectPokemon(undefined)}>
                <Text style={{textAlign: 'center'}}>back</Text>
              </Pressable>
            </View>
          ) : (
            <>
              <PokemonList onPokemonSelected={selectPokemon} />
            </>
          )}
        </View>
        </View>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
