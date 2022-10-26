import React, { useState } from 'react';
import { FlatList, View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { images } from './images';

const dummyArray = [
  { id: 'd1', img: require('./assets/flamengo.png'), value: 'Flamengo' },
  { id: 'd2', img: require('./assets/vasco.png'), value: 'Vasco' },
  { id: 'd3', img: require('./assets/fluminense.png'), value: 'Fluminense' },
  { id: 'd4', img: require('./assets/botafogo.png'), value: 'Botafogo' },
];

const App = () => {
  const [listItems, setListItems] = useState(dummyArray);

  const ItemView = ({ item }) => {
    return (
      // FlatList Item

      <ImageBackground
        source={require('./assets/maracana.png')}
        style={styles.item}
      >

        <Image
          source={item.img}
          style={styles.logo}
        >
        </Image>
        <Text
          style={styles.text}
          onPress={() => getItem(item)}>
          {item.value}
        </Text>
      </ImageBackground>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8'
        }}
      />
    );
  };

  const getItem = (item) => {
    if (item.id == 'd1')
      alert('Campeonato Brasileiro (8 títulos) \n\n 1980, 1982, 1983, 1987, 1992, 2009, 2019 e 2020');
    if (item.id == 'd2')
      alert('Campeonato Brasileiro (4 títulos) \n\n 1974, 1989, 1997 e 2000');
    if (item.id == 'd3')
      alert('Campeonato Brasileiro (4 títulos) \n\n 1970, 1984, 2010 e 2012');
    if (item.id == 'd4')
      alert('Campeonato Brasileiro (1 título) \n\n 1995.');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listItems}
        //data defined in constructor
        ItemSeparatorComponent={ItemSeparatorView}
        //Item Separator View
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  item: {
    padding: 5,
    fontSize: 18,
    marginTop: 10,
    height: 110,
    color: '#000',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: '#fdf100',
    fontSize: 36,
    marginLeft: 20,
  },
  logo: {
    height: 80,
    width: 70,
    margin: 0,
  }
});

export default App;
