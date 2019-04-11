import React, { Component } from 'react';
import {Text, View, Image, Button} from 'react-native';
import A from './style'

var imgShow = require('./img/tennis.jpg');

class Show extends Component{
    render() {
        return (
             <View style={A.container}>
                 <Image source={imgShow} style={A.imageStyle} />
                 <Button
                     title = "Back to Landing"
                     onPress= {() => this.props.switchScreen("landing")}>
                 </Button>
                 {console.log("test show")}
             </View>
        );
    }
}

export default Show;
