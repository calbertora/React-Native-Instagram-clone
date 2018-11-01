import React from 'react';
import {Text, View, Button} from 'react-native'
import { createStackNavigator } from 'react-navigation';

/*class SignIn extends React.Component{
    render(){
        return (
            
                <Text style={{flex:1, justifyContent:'center'}}> Sing IN </Text>
          
        );
        
    }
}*/
const SignIn = (props) => {
    
    return (
        <View>
            <Text>Sing IN</Text>
            <Button 
                title="Navegar al SignUp"
                onPress={() => props.navigation.navigate('SignUp')}
            />
        </View>
        
    );
}
const SignUp = () => <Text>Sing OUT</Text>;

export default NoAuthRoutes = createStackNavigator(
    {
        SignIn: {
            screen: SignIn
        },
        SignUp: {
            screen: SignUp
        },
    },
    {
        headerMode: 'none'
    }
);
