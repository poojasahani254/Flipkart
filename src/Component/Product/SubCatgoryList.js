import React, {Component} from 'react';
import ALlHeader from '../../Common/AllPageHeader';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {GetSubCategory, GetChildSubCategory} from '../../Action/CategoryAction';
import {connect} from 'react-redux';
import {BACKGROUND} from '../../Colors/Colors';
import {ScrollView} from 'react-navigation';

Icon.loadFont();
let swidth = Dimensions.get('window').width;
let sheigth = Dimensions.get('window').height;

class SubCategory extends Component {
  constructor() {
    super();
    this.state = {
      SubCategory: [],
      ChildSubCategory: [],
      VieWChildCategory: [],
      matchedId: [],
    };
  }

  componentDidMount(): void {
    const obj = {
      Category_id: '5e380674e967fc10a663e300',
    };

    this.props
      .GetSubCategory(obj)
      .then(response => {
        this.setState({SubCategory: response.data});

        this.props
          .GetChildSubCategory()
          .then(res => {
            this.setState({ChildSubCategory: res.data});
          })
          .catch(err => {
            console.log('Error While Getting Child Subcategory Data', err);
          });
        // console.log('Data' + this.state.SubCategory);
      })
      .catch(err => {
        console.log('Error Occured While Getting Data', err);
      });
  }

  render() {
    const {
      container,
      childcontainer,
      ListView,
      ListitemView,
      horizontalline,
      PlusView,
      subcategoryview,
      subcatgorylistline,
    } = styles;
    let {SubCategory, ChildSubCategory, VieWChildCategory} = this.state;
    let matchedId = [];

    ChildSubCategory &&
      ChildSubCategory.map((item, index) => {
        // console.log(item.SubCategory_id);
        if (matchedId.indexOf(item.SubCategory_id) === -1) {
          matchedId.push(item.SubCategory_id);
        }
      });

    return (
      <SafeAreaView style={container}>
        <View style={container}>
          <ALlHeader
            HeaderText={'Electronics'}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
          />
          <View style={childcontainer}>
            <ScrollView>
              {SubCategory &&
                SubCategory.map((item, index) => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          if (VieWChildCategory[0] == item._id) {
                            this.setState({
                              VieWChildCategory: [],
                            });
                          } else {
                            this.setState({
                              VieWChildCategory: [item._id],
                            });
                          }

                          if (!matchedId.includes(item._id)) {
                            const obj = {
                              Id: item._id,
                              SubCategorName: item.SubCategory_name,
                            };
                            this.props.navigation.navigate(
                              'AllProductDisplay',
                              {data: obj},
                            );
                            // alert(item._id);
                          }
                        }}>
                        <View style={ListView}>
                          <Text style={ListitemView}>
                            {item.SubCategory_name}
                          </Text>
                        </View>
                        {matchedId.map(item1 => {
                          if (item1 == item._id) {
                            return (
                              <View style={PlusView}>
                                <Icon name={'plus'} size={sheigth * 0.02} />
                              </View>
                            );
                          }
                        })}
                      </TouchableOpacity>
                      <View style={horizontalline} />

                      {matchedId.map((item1, index1) => {
                        if (item1 == item._id) {
                          return (
                            <View style={{backgroundColor: '#fff'}}>
                              {VieWChildCategory &&
                                VieWChildCategory.map(id => {
                                  if (id == item._id) {
                                    return (
                                      ChildSubCategory &&
                                      ChildSubCategory.map((item, index) => {
                                        if (item.SubCategory_id == item1) {
                                          return (
                                            <View>
                                              <TouchableOpacity
                                                style={subcategoryview}
                                                onPress={() => {
                                                  const obj = {
                                                    Id: item._id,
                                                    SubCategorName:
                                                      item.Child_SubCategory_name,
                                                  };
                                                  this.props.navigation.navigate(
                                                    'AllProductDisplay',
                                                    {data: obj},
                                                  );
                                                  // alert(
                                                  //   item.Child_SubCategory_name +
                                                  //     item._id,
                                                  // );
                                                }}>
                                                <Text style={ListitemView}>
                                                  {item.Child_SubCategory_name}
                                                </Text>
                                              </TouchableOpacity>
                                              <View
                                                style={subcatgorylistline}
                                              />
                                            </View>
                                          );
                                        }
                                      })
                                    );
                                  }
                                })}
                            </View>
                          );
                        }
                      })}
                    </View>
                  );
                })}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(
  null,
  {
    GetSubCategory,
    GetChildSubCategory,
  },
)(SubCategory);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  childcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: sheigth * 0.01,
  },
  ListView: {
    // backgroundColor: 'red',
    height: sheigth * 0.06,
    width: swidth * 0.88,
    flexDirection: 'row',
  },
  ListitemView: {
    fontSize: sheigth * 0.02,
    fontFamily: 'Roboto-Regular',
    alignSelf: 'center',
  },
  horizontalline: {
    height: sheigth * 0.001,
    width: swidth * 0.88,
    borderBottomWidth: 0.4,
    borderColor: 'gray',
  },
  PlusView: {
    position: 'absolute',
    right: swidth * 0.03,
    alignSelf: 'flex-end',
    marginTop: sheigth * 0.02,
  },
  subcategoryview: {
    // backgroundColor: 'green',
    height: sheigth * 0.06,
    width: swidth * 0.8,
    flexDirection: 'row',
    marginLeft: swidth * 0.05,
  },
  subcatgorylistline: {
    height: sheigth * 0.001,
    width: swidth * 0.8,
    borderBottomWidth: 0.4,
    borderColor: 'gray',
    marginLeft: swidth * 0.05,
  },
});
