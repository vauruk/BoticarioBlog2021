import React, { useEffect, useCallback } from 'react';

import {
    Container,
    Content,
    Label,
    Title,
    ColA,
    ColB,
    Row,
    LabelLink,
    ActivityIndicatorVK,
} from './styles';
import { ImageVK } from '../../components';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SignInRoutes } from '../../routes/SignIn/types';
import { Props } from './types';
import { IconVK } from '../common/styles';
import vanderson from '../../assets/vanderson.png';

const Splash: React.FC<Props> = (props: Props) => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(SignInRoutes.Login);
        }, 5000);
    });
    const gitHub: string = 'https://github.com/vauruk';
    const handlePress = useCallback(async () => {
        await Linking.openURL(gitHub);
    }, [gitHub]);

    return (
        <Container>
            <Content>
                <ImageVK source={vanderson} width={250} height={300} />
                <Title>Vanderson de Moura Vauruk</Title>
                <Row>
                    <ColA flex={0.2}>
                        <IconVK name="at" size={30} />
                    </ColA>
                    <ColB flex={0.8}>
                        <Label>vauruk@gmail.com</Label>
                    </ColB>
                </Row>
                <Row>
                    <ColA flex={0.2}>
                        <IconVK name="github" size={30} />
                    </ColA>
                    <ColB flex={0.8}>
                        <LabelLink onPress={() => handlePress()}>
                            {gitHub}
                        </LabelLink>
                    </ColB>
                </Row>
                <ActivityIndicatorVK size="large" />
            </Content>
        </Container>
    );
};

export default Splash;
