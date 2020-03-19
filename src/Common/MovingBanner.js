import React, {Component} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-navigation';
import Api from '../Service/Api';
Icon.loadFont();
let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
let pagesize;
const imageurl = '/getbanner';
export default class Layout2 extends Component {
  constructor() {
    super();
    this.opacity = new Animated.Value(0);
    this.state = {
      fadeValue: new Animated.Value(0),
      isApply: false,
      value: 0,
      allData: [],
      loader: false,
    };
  }

  componentDidMount(): void {
    debugger
    Api(imageurl, '', 'get')
      .then(response => {
        this.setState({allData: response.data, loader: true});
        // console.log(this.state.allData);
      })
      .catch(err => {
        console.log('Error Occured While', err);
      });

    try {
      setInterval(() => {
        this._Next();
      }, 1000);
    } catch (e) {
      console.log('Error While loading banner' + e);
    }
  }
  _Next = () => {
    // console.log('Index' + (Math.round(JSON.stringify(pagesize)) + 1));
    if (Math.round(JSON.stringify(pagesize)) + 1 == 8) {
      this._Last();
    } else {
      this.scrollview_ref &&
        this.scrollview_ref.scrollTo({
          x: (Math.round(JSON.stringify(pagesize)) + 1) * width,
          y: 0,
          animated: true,
        });
    }
  };
  _Last = () => {
    // console.log('Last index' + (Math.round(JSON.stringify(pagesize)) + 1));
    this.scrollview_ref &&
      this.scrollview_ref.scrollTo({
        x: (Math.round(JSON.stringify(pagesize)) - 8) * width,
        y: 0,
        animated: true,
      });
  };
  _divid = () => {
    pagesize = Animated.divide(this.opacity, width);
    // console.log(pagesize);
  };
  render() {
    const {container, modal, container1, circle, outerCircle} = styles;
    this._divid();

    const animations = this.state.allData.map(a => {
      // console.log('Image' + a.BannerImage);
      return (
        <Image
          source={{
            uri: 'http://192.168.0.123:3000/images/Image/' + a.BannerImage,
          }}
          resizeMode={'cover'}
          style={modal}
        />
      );
    });
    const RoundView = this.state.allData.map((a, index) => {
      const changeOpcity = pagesize.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.3, 1, 0.5],
        extrapolate: 'clamp',
      });
      return (
        <TouchableOpacity
          onPress={() => {
            this.scrollview_ref &&
              this.scrollview_ref.scrollTo({
                x: index * width,
                y: 0,
                animated: true,
              });
          }}>
          <Animated.View style={[circle, {opacity: changeOpcity}]} />
        </TouchableOpacity>
      );
    });
    return this.state.loader ? (
      <View style={container1}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          scrollEventThrottle={1}
          ref={ref => {
            this.scrollview_ref = ref;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: this.opacity}}}],
            {},
          )}>
          {animations}
        </ScrollView>
        <View style={outerCircle}>{RoundView}</View>
      </View>
    ) : (
      <ActivityIndicator />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    alignItems: 'center',
  },
  modal: {
    height: height * 0.23,
    width: width,
    borderColor: '#fff',
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  circle: {
    height: height * 0.008,
    width: height * 0.008,
    borderRadius: (height * 0.5) / 2,
    backgroundColor: 'white',
    marginRight: width * 0.01,
  },
  outerCircle: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: width * 0.28,
    height: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.2,
    bottom: height * 0.03,
  },
});
