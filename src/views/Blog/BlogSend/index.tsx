/**
 * @date 01/05/2021
 * @author Vanderson de Moura Vauruk
 * @email vauruk@gmail.com
 * @linkedin https://www.linkedin.com/in/vauruk/
 */

import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { useAppDispatch, useTypedSelector } from '../../../store';
import { Alert } from 'react-native';
import { setPostTextAction, addPost, saveEditPost } from '../../../store/blog';
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
    const blog = useTypedSelector(state => state.blogForm.blog);
    const [sizeText, setSizeText] = useState(valueSize);
    const [saveDisable, setSaveDisable] = useState(false);

    const textPost = useTypedSelector(state => state.blogForm.textPost);

    const handleSendPost = () => {
        if (textPost && sizeText <= valueSize) {
            if (blog?.message.uuid && blog?.message.uuid > 0) {
                dispatch(
                    saveEditPost({ value: textPost, email: username?.value }),
                );
            } else {
                dispatch(addPost({ value: textPost, email: username?.value }));
            }
            setSizeText(valueSize);
            setSaveDisable(false);
            dispatch(setPostTextAction({ value: '' }));
            Keyboard.dismiss();
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

    const handleChangeValue = (value: string) => {
        let newSize = valueSize - value.length;
        if (value) {
            setSizeText(newSize);
        } else {
            setSizeText(valueSize);
        }
        setSaveDisable(newSize <= 0);
        dispatch(setPostTextAction({ value: value }));
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
