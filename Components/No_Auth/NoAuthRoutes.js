import React from 'react';
import {Text, View} from 'react-native'
import { createStackNavigator } from 'react-navigation';

/*class SignIn extends React.Component{
    render(){
        return (
            
                <Text style={{flex:1, justifyContent:'center'}}> Sing IN </Text>
          
        );
        
    }
}*/
const SignIn = () => <Text>Sing IN</Text>;
const SignOut = () => <Text>Sing OUT</Text>;

export default NoAuthRoutes = createStackNavigator({
    SignIn: {
        screen: SignIn
    },
    SignOut: {
        screen: SignOut
    }
});
