import React from 'react';
import { Container, Title, Label, Button } from './styles';
import { useNavigation } from '@react-navigation/native';
import IconFA from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.openDrawer();
  };
  return (
    <Container>
      <Title>Home</Title>
      <Title>Home</Title>
      <Title>Home</Title>
      <IconFA name="rocket" size={30} color="#900" />
      <Button onPress={onPress}>
        <Label>Button</Label>
      </Button>
    </Container>
  );
};

export default Home;
