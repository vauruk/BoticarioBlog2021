/**
 * @date 01/05/2021
 * @author Vanderson de Moura Vauruk
 * @email vauruk@gmail.com
 * @linkedin https://www.linkedin.com/in/vauruk/
 */

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../../../store';
import { Alert } from 'react-native';
import { setPostTextAction, addPost } from '../../../store/blog';
import {
    Container,
    ContentFooter,
    TextFooter,
    Row,
    ColA,
    ColB,
    IconSendVK,
} from './styles';

import { TextInput, ButtonSend } from './styles';
import { Config } from '../../../config';
const count: number = Number(Config.numChar);
const BlogSend = () => {
    const dispatch = useAppDispatch();
    const valueSize = count;
    const username = useTypedSelector(state => state.loginForm.fields.username);
    const [sizeText, setSizeText] = useState(valueSize);
    const [saveDisable, setSaveDisable] = useState(false);

    const textPost = useTypedSelector(state => state.blogForm.textPost);

    console.log('textPost', textPost);
    const handleSendPost = () => {
        if (textPost && sizeText <= valueSize) {
            // if (uid) {
            //     dispatch(editPostAction(textPost, uid));
            // } else {
            //     dispatch(savePostAction(textPost));
            // }
            dispatch(addPost({ value: textPost, email: username?.value }));
            setSizeText(valueSize);
            setSaveDisable(false);
            dispatch(setPostTextAction({ value: '' }));
        } else if (!textPost) {
            Alert.alert(
                'Error',
                'É necessário digitar uma mensagem para postar',
                [{ text: 'OK' }],
            );
        } else if (sizeText < valueSize) {
            Alert.alert(
                'Error',
                'Excedeu a quantidade de caracteres disponivel',
                [{ text: 'OK' }],
            );
        }
    };

    const handleChangeValue = value => {
        let newSize = valueSize - value.length;
        if (value) {
            setSizeText(newSize);
        } else {
            setSizeText(valueSize);
        }
        setSaveDisable(newSize <= 0);
        dispatch(setPostTextAction({ value }));
    };

    return (
        <Container>
            <Row>
                <ColA flex={0.8}>
                    <TextInput
                        autoFocus={saveDisable}
                        placeholder="Post"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        maxLength={count}
                        value={textPost}
                        onChangeText={text => handleChangeValue(text)}
                        onSubmitEditing={() => handleSendPost()}
                    />
                </ColA>
                <ColB flex={0.2}>
                    <ButtonSend
                        disabled={saveDisable}
                        onPress={() => handleSendPost()}>
                        <IconSendVK
                            name="send"
                            size={20}
                            disable={saveDisable}
                        />
                    </ButtonSend>
                </ColB>
            </Row>
            <ContentFooter>
                <TextFooter>{sizeText}</TextFooter>
            </ContentFooter>
        </Container>
    );
};

export default BlogSend;
