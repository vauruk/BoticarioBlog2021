import React from 'react';
import { Container, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { BlogList, BlogSend } from '../../views';

const Home = () => {
    //const navigation = useNavigation();
    return (
        <Container>
            <BlogSend />
            <BlogList />
        </Container>
    );
};

export default Home;
