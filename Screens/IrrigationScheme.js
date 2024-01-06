import React from "react";
import { View, Text, FlatList,TouchableOpacity } from "react-native";
import styles from "../DrawerScreens/AddFacility/style";
import { FloatingLabelInput } from "react-native-floating-label-input";
import DropDownSearch from "../CustomComponents/DropDownSearch";
import LocalData from "../Constants"
import { Entypo, AntDesign } from '@expo/vector-icons';

const IrrigationScheme = () => {
  const [drpIndex, setDrpIndex] = React.useState(null);
  const data = [
    {
        Irrigation_Scheme_Facility_Information: {
         Size_Of_Irrigation: "",                //dropdown
         Acreage: "",
         Type_Of_System: "",                    //dropdown
         Type_Of_Crop_Irrigation:"",            //dropdown
         Water_Source:"",                       //dropdown
         Number_Of_Water_Source:"",
       },
        Water_Usese_and_Abstraction_Information: {
        Permit_Number: "",
        Attach_Permit_Documents: "",                //choose file
        Volume_Of_WaterSourcePermitted: "",
        No_Of_Irrigation_Week_Permited: "",
        No_Of_Irrigation_Per_Week: "",
        Amt_Of_Water_Abstraction_Permitted:"",
        Amt_Of_Water_Abstraction: "",              //(mt3)
        Amt_Per_Day_Crop_Permitted: "",
        Amt_Per_Day_Crop_Abstracted: "",
        Abstraction_Method:"",                      //dropdown
        Area_Of_Each_Crop:"",                      //(mt2)
        Presence_Flower_Measurment_Devices:"",     //yes or no
        Type_Of_Measurment_Devices:"",             //dropdown
        Records_Of_Measurment:"",
        Average_Figure:"",                         //(per plot per day)
        Other_Users:""  ,                           //dropdown
        Volume_Other_Use:"",                        //(mt3)
        Specifiy_Other:"",
    },
      
    },
  ];
  const [info, setInfo] = React.useState(data);

  const handleChangeText = (category, item, text) => {
    const updateData = [...info];
    updateData[0][category][item] = text;
    setInfo(updateData);
  };
  

  const renderSubItem = (item, index, category) => {
    const validSubstrings = [
      "Size_Of_Irrigation",
      "Type_Of_System",
      "Type_Of_Crop_Irrigation",
      "Water_Source",
      "Abstraction_Method",
      "Type_Of_Measurment_Devices",
      "Other_Users",
    ];
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
          DropDown && drpIndex == index &&(
          <DropDownSearch
            isVisible={drpIndex}
            setIsVisible={setDrpIndex}
            dummyData={LocalData[item]}
            value={info[0][category][item]}
            setValue={(v) => handleChangeText(category, item, v)}
          />
        )}
      </>
       
      );
    };

    const renderIrrigationScheme= ({ item, index }) => {
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
        renderItem={renderIrrigationScheme}
      />
    );
  };

export default IrrigationScheme;
