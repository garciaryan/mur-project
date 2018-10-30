import React from 'react';
import { 
  Alert,
  ScrollView, 
  StyleSheet,
  View, 
  TouchableOpacity,
  Text 
} from 'react-native';
import MyCarousel from '../components/Carousel';
import Carousel from 'react-native-snap-carousel';

export default class SightsScreen extends React.Component {
  static navigationOptions = {
    title: 'Sights',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <MyCarousel></MyCarousel>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  board: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  button: {
    backgroundColor: '#4468b0',
    borderRadius: 6,
    padding: 15,
    margin: 5
  },
  btnText: {
    color: '#fff',
    fontSize: 16
  }
});
