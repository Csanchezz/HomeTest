import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, ImageBackground, Dimensions } from 'react-native';
import { Header, List, ListItem } from 'react-native-elements';

const remote = './src/watermelon.jpg';

export default class App extends React.Component {
  render() {
    const resizeMode = 'center';
    const text = 'This is some text inlaid in an <Image />';
    const list = [
      {
        title: 'Brand 1',
        icon: 'add-circle-outline'
      },
      {
        title: 'Brand 2',
        icon: 'add-circle-outline'
      },
      {
        title: 'Brand 3',
        icon: 'add-circle-outline'
      },
      {
        title: 'Brand 4',
        icon: 'add-circle-outline'
      },
      {
        title: 'Brand 5',
        icon: 'add-circle-outline'
      },
      {
        title: 'Brand 6',
        icon: 'add-circle-outline'
      },
      {
        title: 'Brand 7',
        icon: 'add-circle-outline'
      },

      // more items
    ];
    return (
      <ScrollView>

        <ImageBackground source={require('./src/watermelon.jpg')} style={styles.backgroundImage} >
          <StatusBar
            barStyle='light-content'
          />

          <Header
            backgroundColor='rgba(0, 0, 0, 1)'
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />

          <List>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                />
              ))
            }
          </List>

          <Text 
            style={{
              height: Dimensions.get('window').height,
              flex: 1,

            }}

          >
            Hola putos!
          </Text>



          

        </ImageBackground>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  backgroundImage: {
    flex: 1,
    // width: undefined,
    // height: undefined,
    // flexDirection: 'column',
    // backgroundColor:'transparent',
    // justifyContent: 'flex-start',


  },
});
