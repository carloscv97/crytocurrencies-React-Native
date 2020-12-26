import axios from 'axios';
import React, { useState } from 'react';
import {
   Image,
   SafeAreaView,
   ScrollView,
   StyleSheet,
   View,
   ActivityIndicator
} from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import Quotation from './components/Quotation';


const App = () => {

   const [currency, setCurrency] = useState('');
   const [cryptocurrency, setCryptocurrency] = useState('');
   const [loading, setLoading] = useState(false);
   const [result, setResult] = useState({});

   const handleQuoteCryptocurrency = async () => {

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`

      try {
         const { data } = await axios.get(url)
         setResult(data.DISPLAY[cryptocurrency][currency]);
         setLoading(false);
      } catch (err) {
         console.log(err);
      }

   }

   return (
      <>
         <Header />
         <ScrollView style={styles.content}>
            <Image style={styles.principalImage} source={require('./assets/img/cryptomonedas.png')} />
            <View style={styles.body}>
               <Form
                  currency={currency}
                  cryptocurrency={cryptocurrency}
                  setCurrency={setCurrency}
                  setCryptocurrency={setCryptocurrency}
                  setLoading={setLoading}
                  handleQuoteCryptocurrency={handleQuoteCryptocurrency}
               />
            </View>
            <View style={{ marginTop: 20 }}>
               {
                  loading
                     ? <ActivityIndicator size="large" color="#522C7B" />
                     : <Quotation result={result} />
               }
            </View>
         </ScrollView>
      </>
   );
};

const styles = StyleSheet.create({
   principalImage: {
      width: '100%',
      height: 150,
      borderRadius: 5,
      marginTop: 20,
   },
   content: {
      flex: 1,
      backgroundColor: '#D0D2FD',
      paddingHorizontal: '2.5%'
   },
   body: {
      backgroundColor: 'white',
      marginTop: 10,
      borderRadius: 10,
      paddingHorizontal: 10,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
   }
});

export default App;
