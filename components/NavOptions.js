import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const data = [
  {
    title: "jdfsakj",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>kdjfska</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
