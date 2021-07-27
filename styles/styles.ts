import styled from 'styled-components/native';

const Container = styled.View`
  padding-top: 0; 
`;

const ListHeader = styled.View`
    flex: none;
    margin-right: 0;
    margin-left: 0;
    margin-top: 0;
    background-color: #E0E0E0;
    padding: 10px;
    border-radius: 0;
`;

const ListItem = styled.View`
    flex: none;
    margin-right: 0;
    margin-left: 0;
    margin-top: 0;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 0;
`;

const Contain = styled.Image`
    width: 100%;
    height: 200px;
    resize-mode: contain;
    margin-bottom: 30px;
`;

const Name = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
`;

export {Container, ListHeader, ListItem, Contain, Name};
