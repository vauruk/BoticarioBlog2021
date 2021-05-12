import React, { useEffect } from 'react';
import { Container, ScrollViewAppVk } from './styles';
import { useAppDispatch, useTypedSelector } from '../../store';
import { ItemNewsVK } from '../../components';
import { fetchNewsList } from '../../store/news';
import { News } from '../../store/news/types';

const NewsList = () => {
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
                    newsList.map((item: News, index: number) => (
                        <ItemNewsVK news={item} key={index} />
                    ))}
            </ScrollViewAppVk>
        </Container>
    );
};

export default NewsList;
