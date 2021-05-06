import React, { useEffect } from 'react';
import { Container, ScrollViewAppVk } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useTypedSelector } from '../../store';
import { ItemNewsVK } from '../../components';
import { fetchNewsList } from '../../store/news';

const NewsList = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const newsList = useTypedSelector(state => state.newsForm.newsList);

    useEffect(() => {
        if (!newsList) {
            dispatch(fetchNewsList());
        }
    }, [newsList]);

    return (
        <Container>
            <ScrollViewAppVk>
                {newsList &&
                    newsList.map((item, index) => (
                        <ItemNewsVK news={item} key={index} />
                    ))}
            </ScrollViewAppVk>
        </Container>
    );
};

export default NewsList;
