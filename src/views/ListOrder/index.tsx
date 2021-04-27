import React from 'react';
import { Container, Title, Label, Button } from './styles';
import { useNavigation } from '@react-navigation/native';
import IconFA from 'react-native-vector-icons/FontAwesome';

const ListOrder = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.openDrawer();
  };
  return (
    <Container>
      <Title>ListOrder</Title>
      <IconFA name="rocket" size={30} color="#900" />
      <Button onPress={onPress}>
        <Label>ButtonTitle</Label>
      </Button>
    </Container>
  );
};

export default ListOrder;
