import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const colors = ["green", "blue", "brown", "yellow", "red", "black"];

const HomeScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("white");

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Increase" color="green" onPress={() => setCount(count + 1)} />
      <Button title="Decrease" color="blue" onPress={() => setCount(count - 1)} />
      <Button title="Go to Colors" onPress={() => navigation.navigate("Colors", { setBgColor })} />
    </View>
  );
};

const ColorScreen = ({ route }) => {
  const { setBgColor } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose Background</Text>
      {colors.map((color) => (
        <TouchableOpacity
          key={color}
          style={[styles.button, { backgroundColor: color }]}
          onPress={() => setBgColor(color)}
        >
          <Text style={styles.buttonText}>{color.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Colors" component={ColorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 30, marginBottom: 20, color: "black" },
  button: { width: "80%", padding: 10, margin: 5, alignItems: "center" },
  buttonText: { color: "white", fontSize: 20 },
});