import { Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

function Bell() {
<<<<<<< HEAD
  // new rebase
=======
  // this is rebase test 5 remote and local
>>>>>>> ea1558c9580961b0c94e0394f21b60f53e1f3c80
  return (
    <View className="w-[100%] my-5">
      <View className="w-[90%] mx-auto my-5 flex-row items-center justify-between">
        <Text
          style={{
            color: "gray",
            fontSize: 14,
            fontWeight: "bold",
            flexGrow: 1,
            marginRight: 4,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          commodi, eius sit at pariatur dolores.
        </Text>
        <EvilIcons name="trash" size={35} color="gray" />
      </View>
      <View className="w-[90%] mx-auto h-[1px] my-3 bg-slate-600" />
    </View>
  );
}

export default Bell;
