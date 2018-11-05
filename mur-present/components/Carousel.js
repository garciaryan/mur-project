import React from 'react';
import { 
  Dimensions, 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground, 
  Platform, 
  TouchableOpacity 
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}


const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const entryBorderRadius = 8;
const IS_IOS = Platform.OS === 'ios';
const even = true;


export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

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
        },
        {
          title: 'Mur and Ry 3',
          subtitle: 'We 2 Nemos',
          pic: require('../assets/images/murandry3.jpg')
        },
        {
          title: 'Mur and Ry 4',
          subtitle: 'Us!',
          pic: require('../assets/images/murandry4.jpg')
        },
        {
          title: 'Mur and Ry 5',
          subtitle: 'Hey!',
          pic: require('../assets/images/murandry5.jpg'),
        },
        {
          title: 'Mur and Ry 6',
          subtitle: 'Hey!',
          pic: require('../assets/images/murandry6.jpg'),
        }
      ]
    };
  }
  _renderItem ({item, index}) {
      return (
        <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => { alert(`You've clicked '${item.title}'`); }}
        >
          <View style={styles.shadow} />
          <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
            <ImageBackground source={item.pic} style={styles.image}>
            </ImageBackground>
            <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
          </View>
          <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
              <Text style={styles.title}>{ item.title }</Text>
              <Text
                style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                numberOfLines={2}
              >
                  { item.subtitle }
              </Text>
          </View>
        </TouchableOpacity>
      );
  }

  render () {
      return (
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.images}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />
      );
  }
}

const styles = StyleSheet.create({
  slideInnerContainer: {
    flex: 1,
    width: itemWidth,
    height: 500,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18 // needed for shadow
  },
  shadow: {
      position: 'absolute',
      top: 0,
      left: itemHorizontalMargin,
      right: itemHorizontalMargin,
      bottom: 18,
      shadowColor: '#000',
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 10,
      borderRadius: entryBorderRadius
  },
  imageContainer: {
      flex: 1,
      marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
      backgroundColor: '#fff',
      borderTopLeftRadius: entryBorderRadius,
      borderTopRightRadius: entryBorderRadius
  },
  imageContainerEven: {
      backgroundColor: '#000'
  },
  image: {
      // ...StyleSheet.absoluteFillObject,
      flex: 1,
      height: '100%',
      width: '100%',
      borderRadius: IS_IOS ? entryBorderRadius : 0,
      borderTopLeftRadius: entryBorderRadius,
      borderTopRightRadius: entryBorderRadius
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: entryBorderRadius,
      backgroundColor: 'white'
  },
  radiusMaskEven: {
      backgroundColor: '#000'
  },
  textContainer: {
      justifyContent: 'center',
      paddingTop: 20 - entryBorderRadius,
      paddingBottom: 20,
      paddingHorizontal: 16,
      backgroundColor: 'white',
      borderBottomLeftRadius: entryBorderRadius,
      borderBottomRightRadius: entryBorderRadius
  },
  textContainerEven: {
      backgroundColor: '#000'
  },
  title: {
      color: '#fff',
      fontSize: 13,
      fontWeight: 'bold',
      letterSpacing: 0.5
  },
  titleEven: {
      color: 'white'
  },
  subtitle: {
      marginTop: 6,
      color: '#cea9a9',
      fontSize: 12,
      fontStyle: 'italic'
  },
  subtitleEven: {
      color: 'rgba(255, 255, 255, 0.7)'
  }
})