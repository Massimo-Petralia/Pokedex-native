import {View, Text, Image} from 'react-native';
import {usePokemonDetailQuery} from '../services/pokemon.services';
import {style} from '../../../style';

export const PokemonDetails = ({pokemonName}: {pokemonName: string}) => {
  const {data, isLoading, isError, isUninitialized} = usePokemonDetailQuery({
    name: pokemonName,
  });

  if (isLoading || isUninitialized) {
    return <Text>loading...</Text>;
  }
  if (isError) {
    return <Text>something went wrong</Text>;
  }

  return (
    <View>
      <Text style={style.header}>{data.name}</Text>
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: `${data.sprites.front_default}`,
        }}
      />
      <View style={{marginTop: 5}}>
        <Text>- id : {data.id}</Text>
        <Text>- height: {data.height}</Text>
        <Text>- weight: {data.weight}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>- types: </Text>
          {data.types.map((pokemon, index) =>
            index !== data.types.length - 1 ? (
              <Text key={pokemon.type.name}>{pokemon.type.name + ', '}</Text>
            ) : (
              <Text key={pokemon.type.name}>{pokemon.type.name + '.'}</Text>
            ),
          )}
        </View>
      </View>
    </View>
  );
};
