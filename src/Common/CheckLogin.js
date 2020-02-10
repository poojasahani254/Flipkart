import AsyncStorage from '@react-native-community/async-storage';
export const getAsyncdata = async () => {
  try {
    const value = await AsyncStorage.getItem('data');
    if (value !== null) {
      // console.log('Getting Async Data page' + JSON.parse(value).status);
      // console.log('Getting Async Data page1' + JSON.stringify(value));
      let stat = JSON.parse(value).status;
      // console.log('Status' + stat);
      if (!stat) {
        return Promise.resolve(false);
      } else {
        return Promise.resolve(true);
      }
    } else {
      return Promise.resolve(false);
    }
  } catch (e) {
    console.log('Error While getting Async Data' + e);
  }
};
