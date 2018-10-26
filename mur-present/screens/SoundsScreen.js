import React from 'react';
import { 
  Alert,
  ScrollView, 
  StyleSheet,
  View, 
  Button 
} from 'react-native';

export default class SoundsScreen extends React.Component {
  static navigationOptions = {
    title: 'Sounds',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.board}>
          <Button 
            style={styles.button}
            title="Press Me!"
            onPress={this._makeSound}>
          </Button>
        </View>
      </ScrollView>
    );
  }

  _makeSound(){
    Alert.alert('hi!');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  board: {

  },
  button: {

  }
});
