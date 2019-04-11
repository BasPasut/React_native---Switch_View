import React, { Component } from 'react';
import {Text,View,Image,Button} from 'react-native';
import A from './style'

var img = require('./img/logo.jpg');

class Landing extends Component{
    render(){
        return(
            <View style={A.container}>
                <Image source={img} style={A.imageStyle} />
                <Text> Hello It's me</Text>
                {console.log("Landing is working!!")}
                <Button
                    title="Go to Show view"
                    onPress={() => this.props.switchScreen("screen")}
                    >
                </Button>
            </View>
           
        )
    }
}

export default Landing; 