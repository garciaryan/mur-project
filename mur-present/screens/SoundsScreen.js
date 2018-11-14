import React from 'react';
import Expo from 'expo';

import { 
  ScrollView, 
  StyleSheet,
  View, 
  TouchableOpacity,
  Text 
} from 'react-native';

export default class SoundsScreen extends React.Component {
  static navigationOptions = {
    title: 'Sounds',
    headerStyle: { 
      backgroundColor: '#EF946C',
      borderBottomColor: '#EF946C',
    },
    headerTitleStyle: { color: '#fff' }
  };
  
  async _makeSound(byte){
    const sound = new Expo.Audio.Sound();    

    try {
      await sound.loadAsync(byte)
      await sound.playAsync();
    }
    catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }

  render() {
    let clips = [
      {
        id: 1,
        sound: require('../assets/sounds/she_kissed_him.m4a'),
        text: 'kiss'
      },
      {
        id: 2,
        sound: require('../assets/sounds/she_kissed_him.m4a'),
        text: 'sound2'
      }
    ];
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.viewContainer}>
        <View style={styles.board}>
          {clips.map((prop, key) => {
            return (
              <TouchableOpacity 
                style={styles.button}
                onPress={() => this._makeSound(prop.sound)} key={key}>
                <Text style={styles.btnText}>{prop.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.board}>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.board}>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={this._makeSound}>
            <Text style={styles.btnText}>Press me!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#EF946C',
    flex: 1,
  },
  board: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  button: {
    backgroundColor: '#604D53',
    borderRadius: 6,
    padding: 15,
    margin: 5
  },
  btnText: {
    color: '#fff',
    fontSize: 16
  }
});
