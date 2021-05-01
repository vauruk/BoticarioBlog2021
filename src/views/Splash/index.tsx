import React, { useEffect } from 'react';

import { Container, Content, Label, Title } from './styles';
import { ImageVK, RowVK, ColVK } from '../../components';
import { ActivityIndicator } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { SignInRoutes } from '../../routes/SignIn/types';
import vanderson from '../../assets/vanderson.png';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            console.log('object timeout');
            navigation.navigate(SignInRoutes.Login);
        }, 5000);
    });

    return (
        <Container>
            <Content>
                <ImageVK source={vanderson} width={250} height={300} />
                <Title>Vanderson de Moura Vauruk</Title>
                <Label>vauruk@gmail.com</Label>
                <RowVK style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <ColVK flex={0.1}>
                        <IconFA name="save" size={30} color="#900" />
                    </ColVK>
                    <ColVK flex={0.9}>
                        <Label>http://github.com/vauruk</Label>
                    </ColVK>
                </RowVK>
                <ActivityIndicator size="large" color="#ec771a" />
            </Content>
        </Container>
    );
};

export default Splash;
