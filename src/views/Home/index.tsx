import React from 'react';
import { Container } from './styles';
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
