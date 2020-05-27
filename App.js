import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

const App = () => {
  return(
    <View style={Styles.container}>
      <Text>Yo</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center"
  },
})

export default App;