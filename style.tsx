import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  listItem: {
    backgroundColor: 'lightblue',
    paddingTop: 5,
    paddingBottom: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  header: {
    margin: 5,
    fontWeight: 'bold',
  },
  pokemonDetail: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    borderBlockColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
});
