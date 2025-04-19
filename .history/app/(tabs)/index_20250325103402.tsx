/*import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});*/

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function App() 
{
  const [rakaat, setRakaat] = useState(2);
  const [sujud, setSujud] = useState(4);

  const resetCounter = () => 
  {
    setRakaat(0);
    setSujud(0);
  };

  return (
    <View style={styles.container}>

      <View style={styles.headerBox}>
        <Text style={styles.header}>iRakaat</Text>
      </View>
      
      <View style={styles.rakaatBox}>
        <Text style={styles.Number}>{rakaat}</Text>
        <Text style={styles.Label}>Rakaat</Text>
      </View>

      <View style={styles.sujoodBox}>
        <Text style={styles.Number}>{sujud}</Text>
        <Text style={styles.Label}>Sujood</Text>
      </View>

      <View style={styles.bottomBarBox}>
        <TouchableOpacity>
          <Text style={styles.Text}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetCounter}>
          <Text style={styles.Text}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // header
  headerBox: 
  {
    backgroundColor: '#21C2D2',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    width: '100%',
  },

  header: 
  {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf: 'center',
  },

  // counter
  rakaatBox: 
  {
    //flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  sujoodBox: 
  {
    //flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  Number: 
  {
    fontSize: 125,
    color: 'black',
  },

  Label: 
  {
    fontSize: 20,
    color: 'black',
  },

  // bottom bar
  bottomBarBox: 
  {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#21C2D2',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  Text: 
  {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
