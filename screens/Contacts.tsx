import React, {useEffect} from 'react';
import {TouchableHighlight, Text, SectionList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getContacts} from '../redux/actions';
import {Container, ListHeader, ListItem} from '../styles/styles';

const Contacts = ({navigation}) => {
  const {contacts} = useSelector(state => state.contactsReducer);
  const dispatch = useDispatch();
  const fetchContacts = () => dispatch(getContacts());

  useEffect(() => {
    fetchContacts();
  });

  // return array of contacts to be used with SectionList
  const getData = () => {
    let contactsArr = [];
    let aCode = 'A'.charCodeAt(0);

    for (let i = 0; i < 26; i++) {
      let currChar = String.fromCharCode(aCode + i);
      let obj = {
        title: currChar,
      };

      let currContacts = contacts.filter(item => {
        return item.name[0].toUpperCase() === currChar;
      });

      if (currContacts.length > 0) {
        currContacts.sort((a, b) => a.name.localeCompare(b.name));
        obj.data = currContacts;
        contactsArr.push(obj);
      }
    }

    return contactsArr;
  };

  return (
    <Container>
      <SectionList
        sections={getData()}
        renderSectionHeader={({section}) => (
          <ListHeader>
            <Text>{section.title}</Text>
          </ListHeader>
        )}
        renderItem={({item}) => (
          <TouchableHighlight
            onPress={() => navigation.navigate('Profile', {item})}>
            <ListItem>
              <Text>{item.name}</Text>
            </ListItem>
          </TouchableHighlight>
        )}
      />
    </Container>
  );
};

export default Contacts;
