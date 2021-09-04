import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    title: "jdfsakj",
    image: "https://links.papareact.com/3pn",
    title: "Get a Ride",
    screen: "MapScreen",
  },

  {
    title: "jdfsakj",
    image: "https://links.papareact.com/28w",
    title: "order food",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6  pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon name="arrowright" color="white" type="antdesign" />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
