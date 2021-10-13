import React from "react";
import { ActivityIndicator, View } from "react-native";
export default function Loader() {
  return (
    <View style={{ alignSelf: "center" }}>
      <ActivityIndicator size='large' />
    </View>
  );
}
