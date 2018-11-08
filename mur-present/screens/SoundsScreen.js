import React from 'react';
import Expo from 'expo';

import { 
  Alert,
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

  constructor(){
    super();
    this.state = {
      sounds: [
        {
          clip: require('../assets/sounds/she_kissed_him.m4a')
        }
      ]
    };
  }  

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.viewContainer}>
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

  async _makeSound(){
    const sound = new Expo.Audio.Sound();
    let clip = this.state.sounds[0].clip; 
    console.log(clip);
    
    try {
      console.log(clip);
      
      await sound.loadAsync(clip)
      await sound.playAsync();
    }
    catch (error) {
      console.log(`ERROR: ${error}`);
    }
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
