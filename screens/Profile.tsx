import React from 'react';
import {Text} from 'react-native';
import {Container, Contain, Name} from '../styles/styles';

const Profile = ({navigation, route}) => {
  return (
    <Container>
      <Contain source={{uri: 'https://wdeapc.com/wp-content/uploads/2016/01/user-placeholder.png'}} />
      <Name>{route.params.item.name}</Name>
      <Text>ID: {route.params.item.id}</Text>
      <Text>E-mail: {route.params.item.email}</Text>
      <Text>Telefone: {route.params.item.phone}</Text>
      <Text>Website: {route.params.item.website}</Text>
    </Container>
  );
};

export default Profile;
