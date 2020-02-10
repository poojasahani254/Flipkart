import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProductPageHeader from '../../Common/ProductPageHeader';
import {BACKGROUND} from '../../Colors/Colors';
import {connect} from 'react-redux';
import {GetAllProduct} from '../../Action/ProductAction';
import {NavigationEvents} from 'react-navigation';

Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;
const iconcolor = '#fff';

class AllProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.opacity = new Animated.Value(0);
    this.state = {
      fetch_from_server: false,
      productData: [],
      isdata: true,
      loading: false,
      page: 1,
    };
  }

  componentDidMount(): void {
    this.GettingProductData();
  }

  GettingProductData = async () => {
    this.setState({loading: true});
    const {params} = this.props.navigation.state;
    const obj = {
      Category_id: params.data.Id,
      page: this.state.page,
    };
    debugger;
    this.props
      .GetAllProduct(obj)
      .then(response => {
        if (response != false) {
          console.log(response.data);
          this.setState({
            productData: [...this.state.productData, ...response.data],
            isdata: true,
            loading: false,
          });
        } else {
          this.setState({isdata: false, productData: []});
          // console.log('Else' + this.state.isdata);
        }
      })
      .catch(err => {
        console.log('Error Occured While Getting Product Details', err);
      });
  };

  renderMoreData = async () => {
    // let data = this.state.productData.slice(
    //   this.offset * 9,
    //   (this.offset + 1) * 9 - 1,
    // );
    // this.offset = this.offset + 1;
    console.log('hello');
    this.setState(
      state => ({page: this.state.page + 1}),
      () => this.GettingProductData(),
    );
    console.log(this.state.page);
  };
  flatlistitemRender = (item, index) => {
    const {
      ItemView,
      itemheader,
      ItemImageView,
      imagstyle,
      itemdetailsview,
      itemtitle,
      itemdescription,
      offtext,
      fonfamliy,
      offRupee,
      flexdire,
      ratingview,
      ratingtext,
      flipkartassuredStyle,
      DigitRating,
    } = styles;
    return (
      <TouchableOpacity
        style={ItemView}
        onPress={() => {
          const {state} = this.props.navigation;
          this.props.navigation.navigate('ProductDetails', {
            navigation: this.props.navigation,
          });
        }}>
        <View style={itemheader}>
          <TouchableOpacity>
            <Icon name={'heart'} size={sheigth * 0.05} color={'gray'} />
          </TouchableOpacity>
        </View>
        <View style={ItemImageView}>
          <Image
            source={require('../../Assets/Product/shoes1.jpeg')}
            style={imagstyle}
            resizeMode={'cover'}
          />
        </View>
        <View style={itemdetailsview}>
          <Text style={itemtitle} numberOfLines={1}>
            {index + 1}
            {item.Product_name}
          </Text>
          <Text style={itemdescription} numberOfLines={1}>
            Running Shoe Running Shoes
          </Text>
          <View style={flexdire}>
            <Text style={fonfamliy}>{'\u20B9'}1,797</Text>
            <Text style={[fonfamliy, offRupee]}>3,995</Text>
            <Text style={[offtext, fonfamliy]}>55% Off</Text>
          </View>
          <View style={[flexdire, {marginTop: sheigth * 0.01}]}>
            <View style={ratingview}>
              <Text style={[ratingtext, fonfamliy]}>3.7</Text>
              <MaterialIcons
                name={'star'}
                size={swidth * 0.03}
                color={iconcolor}
              />
            </View>
            <Text style={DigitRating}>(19627)</Text>
            <Image
              source={require('../../Assets/Image/flipkartAssured.png')}
              style={flipkartassuredStyle}
              resizeMode={'contain'}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const {params} = this.props.navigation.state;
    const {productData, isdata, loading} = this.state;

    // alert(params.data.SubCategorName);
    const changeOpcity1 = this.opacity.interpolate({
      inputRange: [0, sheigth * 0.1],
      outputRange: [sheigth * 0.07, 0],
      extrapolate: 'clamp',
    });

    const {
      container,
      Childcontainer,
      filterview,
      fliterconatiner,
      verticalborder,
      fliterfonttext,
      flexdire,
      nodataimage,
    } = styles;
    return (
      <SafeAreaView style={container}>
        <NavigationEvents
          onDidFocus={() => {
            this.componentDidMount();
          }}
          onWillFocus={() => {
            this.componentDidMount();
          }}
        />
        <Animated.View style={{height: changeOpcity1}}>
          <ProductPageHeader
            HeaderText={params.data.SubCategorName}
            onPress={() => {
              this.props.navigation.navigate('SubCategory');
            }}
          />
        </Animated.View>

        <View style={filterview}>
          <TouchableOpacity
            style={[fliterconatiner, verticalborder]}
            onPress={() => alert('dsfdf')}>
            <Icon name={'sort'} size={sheigth * 0.02} />
            <Text style={fliterfonttext}>Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity style={fliterconatiner}>
            <MaterialIcons name={'filter-list'} size={sheigth * 0.02} />
            <Text style={fliterfonttext}>Filter</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          scrollEventThrottle={1}
          style={Childcontainer}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: this.opacity}}},
          ])}>
          {isdata ? (
            <View style={Childcontainer}>
              <FlatList
                data={productData}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) =>
                  this.flatlistitemRender(item, index)
                }
                onEndReachedThreshold={0}
                refreshing={false}
                onMomentumScrollEnd={() => {
                  this.renderMoreData();
                }}
                ListFooterComponent={() =>
                  !loading && (
                    <ActivityIndicator animating={'true'} size={'large'} />
                  )
                }
                // onRefresh={() => {
                //   this.renderIntialData();
                // }}
              />
            </View>
          ) : (
            <View style={Childcontainer}>
              <Image
                source={require('../../Assets/Image/nodatafound.png')}
                style={nodataimage}
              />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect(
  null,
  {
    GetAllProduct,
  },
)(AllProductDisplay);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  Childcontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  filterview: {
    // backgroundColor: 'green',
    height: sheigth * 0.07,
    flexDirection: 'row',
  },
  flexdire: {
    flexDirection: 'row',
  },
  fliterconatiner: {
    backgroundColor: '#fff',
    height: sheigth * 0.07,
    width: swidth / 2,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 5,
    shadowOffset: {width: 0, height: 0.15},
    shadowColor: 'gray',
    shadowOpacity: 1.0,
  },
  verticalborder: {
    borderRightWidth: 0.5,
    borderRightColor: 'gray',
  },
  fliterfonttext: {
    fontSize: sheigth * 0.02,
    fontFamily: 'Roboto-Bold',
    marginLeft: swidth * 0.02,
  },
  ItemView: {
    backgroundColor: '#fff',
    height: sheigth * 0.4,
    width: swidth / 2,
    // borderWidth: 0.5,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: 'gray',
  },
  itemheader: {
    // backgroundColor: 'pink',
    height: sheigth * 0.07,
    alignItems: 'flex-end',
    padding: sheigth * 0.01,
  },
  ItemImageView: {
    // backgroundColor: 'yellow',
    height: sheigth * 0.18,
    alignItems: 'center',
  },
  imagstyle: {
    height: sheigth * 0.18,
    width: swidth * 0.49,
  },
  itemdetailsview: {
    // backgroundColor: 'red',
    height: sheigth * 0.15,
    padding: sheigth * 0.02,
    // paddingLeft: swidth * 0.02,
  },
  itemtitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: sheigth * 0.02,
  },
  itemdescription: {
    fontFamily: 'Roboto-Regular',
    color: 'gray',
    fontSize: swidth * 0.03,
  },
  fonfamliy: {
    fontFamily: 'Roboto-Bold',
  },
  offtext: {
    color: '#4caf50',
    marginLeft: swidth * 0.01,
  },
  offRupee: {
    textDecorationLine: 'line-through',
    color: 'gray',
    marginLeft: swidth * 0.01,
  },
  ratingview: {
    backgroundColor: 'green',
    padding: sheigth * 0.002,
    width: swidth * 0.13,
    alignItems: 'center',
    borderRadius: swidth * 0.11,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ratingtext: {
    fontSize: swidth * 0.03,
    color: iconcolor,
  },
  flipkartassuredStyle: {
    height: sheigth * 0.02,
    width: swidth * 0.15,
  },
  DigitRating: {
    color: 'gray',
    fontSize: swidth * 0.03,
    marginLeft: swidth * 0.01,
    marginRight: swidth * 0.01,
  },
  nodataimage: {
    height: sheigth * 0.3,
    width: swidth * 0.7,
    alignSelf: 'center',
    marginTop: sheigth * 0.2,
  },
});
