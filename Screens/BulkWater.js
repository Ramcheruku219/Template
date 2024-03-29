import React from "react";
import { View, Text, FlatList,TouchableOpacity} from "react-native";
import styles from "../DrawerScreens/AddFacility/style";
import { FloatingLabelInput } from "react-native-floating-label-input";

import DropDownSearch from "../CustomComponents/DropDownSearch";
import LocalData from "../Constants"
import { Entypo, AntDesign } from '@expo/vector-icons';

const BulkWater  = () => {
  const [drpIndex, setDrpIndex] = React.useState(null);
  const data = [
    {
        Bulk_Water_Scheme_Facility_Information: {
        Permit_Number:"",
        Attach_Permit_Files: "",                    //choose file
        Volume_Of_Water_Abstraction_Permitted: "",
        Volume_Of_Water_Abstraction:"",
        Volume_Of_Water_Used:"",
        Volume_Of_Water_Wastage_Permitted:"",
        Volume_Of_Waste_Water:"",
        Total_Amount_Water_Required:"",
        Coverage_Area:"",
        Number_Of_Households:"",
        Water_use:"",                              //dropdown},
 },}
  ];
  const [info, setInfo] = React.useState(data);
 
 
  const handleChangeText = (category, item, text) => {
    const updateData = [...info];
    updateData[0][category][item] = text;
    setInfo(updateData);
  };
  

  const renderSubItem = (item, index, category) => {
    const validSubstrings = ["Water_use"];
    const DropDown = validSubstrings.some((substring) =>
      item.includes(substring)
    );
      return (
        <>
        <FloatingLabelInput
          label={`${item.replace(/_/g, " ")}`}
          hint={`${item.replace(/_/g, " ")}`}
          containerStyles={[styles.input]}
          value={info[0][category][item]}
          inputStyles={{ color: "#2b0847", fontWeight: "500" }}
          labelStyles={{
            fontWeight: "bold",
            overflow: "hidden",
            width: "100%",
            textTransform: "capitalize",
          }}
          readOnly={DropDown ? true : false}
          keyboardType={
            item.toLowerCase().includes("number") ? "numeric" : "default"
          }
          rightComponent={
            DropDown && (
              <TouchableOpacity onPress={() => setDrpIndex(index)}>
                <AntDesign name="down-square-o" size={24} color="#134484" />
              </TouchableOpacity>
            )
          }
          onChangeText={(v) => handleChangeText(category, item, v)}
        />
       {
          DropDown && drpIndex == index && (
          <DropDownSearch
            isVisible={drpIndex}
            setIsVisible={setDrpIndex}
            dummyData={LocalData[item]}
            value={info[0][category][item]}
            setValue={(v) => handleChangeText(category, item, v)}
          />
       ) }
      </>
     
 
      
      );
    };

    const renderBulkWater  = ({ item, index }) => {
      const lable = Object.keys(item);
      const category = lable[index];
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
                  renderItem={({ item, index }) =>
                  renderSubItem(item, index, category)
                }
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
        renderItem={renderBulkWater }
      />
    );
  };
 

export default BulkWater;
