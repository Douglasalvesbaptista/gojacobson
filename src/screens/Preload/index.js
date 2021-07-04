import React ,{ useEffect } from 'react';
import { Image , StyleSheet , ActivityIndicator } from 'react-native';
import { Container } from './styles';
import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation } from '@react-navigation/native'; 

const styles = StyleSheet.create({
    logoP: {
        width: 160,
        height: 160

    },
    Icon: {
        marginTop: 50
    }
   
})

export default () => {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                //validar token
            } else {
                navigation.navigate('SingIn');
            }

        }
        checkToken();

    }, []);



    return(
        <Container>                           
                  <Image style={styles.logoP} source={require('../../assetss/barber.svg')} /> 
                  <ActivityIndicator style={styles.Icon} size="large" color="#FFFFFF" />   
        </Container>
    );
}