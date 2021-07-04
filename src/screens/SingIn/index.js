import React from 'react';
import { Image, StyleSheet, TouchableOpacity ,Text ,View } from 'react-native';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomBottonText,
    SignMessagemButton,
    SignMessagemButtonText,
    SignMessagemButtonBold  
    
 } from './styles';

import SignInput from '../../components/SignInput';

const styles = StyleSheet.create({
    logoP: {
        width: 180,
        height: 160

    }
})

export default () => {
    return(
        <Container>
            <Image style={styles.logoP} source={require('../../assetss/barber.svg')} /> 
            <InputArea>
                <SignInput/>


                <SignInput/>

                
                <CustomButton>
                    <CustomBottonText>LOGIN</CustomBottonText>                    
                </CustomButton>        
            </InputArea>
            <SignMessagemButton>
                <SignMessagemButtonText>Ainda não possui uma conta?</SignMessagemButtonText>
                <SignMessagemButtonBold>Casdastre-se</SignMessagemButtonBold>
            </SignMessagemButton>
        
        </Container>
    );
}