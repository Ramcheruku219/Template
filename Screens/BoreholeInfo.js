import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../DrawerScreens/AddFacility/style";
import { FloatingLabelInput } from "react-native-floating-label-input";

const BoreholeInfo = () => {
  
  const data = [
    {
        Borehole_Facility_Information: {
        Volume_Of_Facility: "",              //(mt3)
        Attach_Permit_Files: "",             //choosefile
        Borehole_Number: "",    
        Volume_Of_Water_Abstraction_Permitted:"",
        Volume_Of_Water_Abstraction:"",
        Coverage_Area:"",                  //(mt2)
        Number_Of_Households:"",
        Water_Use:"",

      },
    },
  ];
  const [info, setInfo] = React.useState(data);
  const RenderBoreholeInfoSubDet = ({ info, setInfo }) => {
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

    const renderBoreholeInfo = ({ item, index }) => {
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
        renderItem={renderBoreholeInfo}
      />
    );
  };
  return <RenderBoreholeInfoSubDet info={info} setInfo={setInfo} />;
};

export default BoreholeInfo;
