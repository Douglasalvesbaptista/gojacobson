import React from 'react';
import styled from 'styled-components/native';
import { Image, StyleSheet, TouchableOpacity ,Text ,View } from 'react-native';

export const Container = styled.SafeAreaView`
    background-color: #63C2D1;
    flex: 1;
    justify-content: center;
    align-items: center;
`;


export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;
export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #268596;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomBottonText = styled.Text`
    font-size: 18px;
    color: #fff;
`;
export const SignMessagemButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;

`;
export const SignMessagemButtonText = styled.Text`
    font-size: 16px;
    color: #268596;
`;
export const SignMessagemButtonBold = styled.Text`
    font-size: 16px;
    color: #268596;
    font-weight: bold;
    margin-left: 5px;
`;


/*
Container,
    InputArea,
    CustomButton,
    CustomBottonText,
    SignMessagemButtonText,
    SignMessagemButtonBold
*/