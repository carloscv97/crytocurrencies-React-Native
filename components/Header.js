import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

const Header = () => {
   return (
      <Text style={styles.header}>Criyptocurrencies</Text>
   )
}

const styles = StyleSheet.create({
   header: {
      paddingTop: Platform.OS === 'ios' ? 50 : 10,
      fontFamily: 'Lato-Black',
      backgroundColor: '#522C7B',
      paddingBottom: 10,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: 20,
      color: '#fff',
   }
})

export default Header
