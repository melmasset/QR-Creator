import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-svg';


import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    Text
} from 'react-native';
 
class QRScreen extends Component {
  state = {
    text: '',
  };
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, justifyContent:'center', alignItems: 'center'}}>QR Creator</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
        />
        {/* <QRCode
      value={this.state.text}
    /> */}
        <QRCode
          value={this.state.text.length > 0 ? this.state.text : "health app"}
          size={200}
          bgColor='#000000'
          fgColor='#FFFFFF'/>
          
      </View>
    );
  };
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
        width: 200
    }
});
 
AppRegistry.registerComponent('QRScreen', () => QRScreen);
 
export default QRScreen;