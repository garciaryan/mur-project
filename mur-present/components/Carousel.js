import React from 'react';
import { Dimensions, View, Text, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
export const sliderWidth = viewportWidth;
export const sliderHeight = viewportHeight / 2;
export const itemWidth = viewportWidth;
export default class MyCarousel extends React.Component {

  constructor() {
    super();
    this.state = {
      images: [
        {
          title: 'Mur and Ry 1',
          subtitle: 'It\'s us!',
          pic: require('../assets/images/murandry1.jpg') 
        },
        {
          title: 'Mur and Ry 2',
          subtitle: 'Us again!',
          pic: require('../assets/images/murandry2.jpg')
        }
      ]
    };
  }
  _renderItem ({item, index}) {
      return (
          <View style={styles.slide}>
            <Image source={item.pic} />
            <Text style={styles.title}>{ item.title }</Text>
            <Text style={styles.subtitle}>{ item.subtitle }</Text>
          </View>
      );
  }

  render () {
      return (
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.images}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            sliderHeight={sliderHeight}
            itemWidth={itemWidth}
          />
      );
  }
}

const styles = StyleSheet.create({
  slide: {

  },
  title: {

  }
})