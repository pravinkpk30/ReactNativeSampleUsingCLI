import { StyleSheet, View, Text, SafeAreaView, Platform } from "react-native";
import CustomButton from "./CustomButton.ios";

export default function App() {

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
          <CustomButton title="Press Me" onPress={() => console.log("Pressed!")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum", 
    marginTop: Platform.OS === "ios" ? 25 : 0,
  },
  safeContainer : { flex: 1, backgroundColor: "plum" },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "blue",
        fontSize: 30,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});