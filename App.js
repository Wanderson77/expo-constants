import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

Constants.app.config.extra.fact === 'kittens are cool';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{expoConfig}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
