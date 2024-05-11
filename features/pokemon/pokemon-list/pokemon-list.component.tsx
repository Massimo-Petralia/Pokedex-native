import {View, Text, FlatList, Pressable} from 'react-native';
import {usePokemonListQuery} from '../services/pokemon.services';
import {style} from '../../../style';

export const PokemonList = ({
  onPokemonSelected,
}: {
  onPokemonSelected: (pokemonName: string) => void;
}) => {
  const {data, isLoading, isError, isUninitialized} = usePokemonListQuery();
  if (isLoading || isUninitialized) {
    return <Text>loading...</Text>;
  }
  if (isError) {
    return <Text>something went wrong</Text>;
  }

  let index: number = 0;
  return (
    <>
      <View>
        <Text style={style.header}>Overview</Text>
        <FlatList
          style={{marginTop: 5}}
          data={data.results}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>{index++}.</Text>
              <Pressable
                style={style.listItem}
                onPress={() => {
                  onPokemonSelected(item.name);
                }}>
                <Text style={style.text}>{item.name}</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </>
  );
};
