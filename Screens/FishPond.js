import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../DrawerScreens/AddFacility/style";
import { FloatingLabelInput } from "react-native-floating-label-input";

const FishPond = () => {
  const data = [
    {
        Fish_Pond_Facility_Information: {
        Number_Of_Fish_Ponds_In_System: "",
        Total_Surface_AreaOf_The_Pond: "",           //(mt2)
        Total_Volume_Of_The_Pond: "",                //(mt3)
        Select_Other_Users:"",
        Specify_Others:"",

          },
      },
  ];
  const [info, setInfo] = React.useState(data);
  const RenderFishPondSubDet = ({ info, setInfo }) => {
    const renderSubItem = ({ item, index }) => {
      return (
        <FloatingLabelInput
          label={`${item.replace(/_/g, " ")}`}
          hint={`${item.replace(/_/g, " ")}`}
          containerStyles={[styles.input]}
          inputStyles={{ color: "#2b0847", fontWeight: "500" }}
          labelStyles={{
            fontWeight: "bold",
            overflow: "hidden",
            width: "100%",
            textTransform: "capitalize",
          }}
        />
      );
    };

    const renderFishPond = ({ item, index }) => {
      const lable = Object.keys(item);
      return (
        <FlatList
          data={lable}
          keyExtractor={(_, i) => `key${i}`}
          renderItem={({ item, index }) => {
            return (
              <View style={{ margin: 5, padding: 5 }}>
                <View
                  style={{
                    margin: 5,
                    padding: 5,
                    backgroundColor: "skyblue",
                    borderRadius: 5,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>
                    {index + 1}. {item.replace(/_/g, " ")}
                  </Text>
                </View>
                <FlatList
                  data={Object.keys(info[0][item])}
                  keyExtractor={(_, i) => `KEY ${i}`}
                  renderItem={renderSubItem}
                />
              </View>
            );
          }}
        />
      );
    };
    return (
      <FlatList
        data={info}
        keyExtractor={(_, i) => `Key${i}`}
        renderItem={renderFishPond}
      />
    );
  };
  return <RenderFishPondSubDet info={info} setInfo={setInfo} />;
};

export default FishPond;
