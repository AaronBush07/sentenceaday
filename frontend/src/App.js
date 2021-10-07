import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Button,
  //Platform,
  useColorScheme,
} from 'react-native';

import {Container, Grid, TextField} from '@mui/material';
import {style} from '@mui/system';
import useHttp from './hooks/http';

//const isNative = Platform.OS !== 'web';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [sentences, setSentences] = useState(null);
  const [sentence, setSentence] = useState('');

  const printSentence = () => {
    console.log(sentence);
  };
  return (
    <SafeAreaView style={styles.scrollView}>
      <Container align="center">
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          contentContainerStyle={styles.scrollView}>
          <View>
            <h2 align="center">A Sentence a day</h2>
          </View>
          <View>
            <Grid container direction={'column'} spacing={2}>
              <Grid item xs={12} md={8}>
                <TextField
                  required
                  variant="standard"
                  multiline
                  fullWidth
                  value={sentence}
                  id="test"
                  onChange={e => setSentence(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Button onPress={printSentence} title="Submit" />
              </Grid>
            </Grid>
          </View>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    flex: 1,
  },
  sentence: {
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    //backgroundColor: '#282c34',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

export default App;
