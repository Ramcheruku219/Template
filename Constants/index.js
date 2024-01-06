const length = 5;
const year = new Date().getFullYear() - length;
export default LocalData = {
    facility_Type: ["Valley Tank",
        "Rural Industry",
        "Irrigation Scheme",
        "GFS",
        "Fish Pond",
        "Earth Dam",
        "Bulk Water",
        "Borehole Information"],
    operational_status: ["Opeational 1", "Operational 2", "Opearational 3"],
    zone: ["zone 1", "zone 2", "zone 3", "zone 4"],
    basin: ["Basin 1", "Basin 2", "Basin 4", "Basin 5"],
    Finalcial_Year: [...Array(length).keys()].map(v => `${year + v}/${year + v + 1}`),
    year_Of_Construction: [...Array(length).keys()].map(v => `${year + v}`),
    Type_Of_Ownership: ["ownership 1", "ownership 2", "ownership 3"],
    Source_Of_Funding_Type: ["Funding 1", "Funding 2", "Funding 3"],
    Type_Of_Land_Ownership: ["Land Ownership 1", "Land Ownership 2", "Land Ownership 3"],
    Type_Of_Construction_Equipment: ["Construction 1", "Construction 2", "Construction 3"],
    Type_Of_Management: ["Management 1", "Management 2", "Management 3"],
    Abstraction_Method:["Abstraction 1","Abstraction 2","Abstraction 3"],
    Type_Of_Industry:["Type Industry 1","Type Industry 2","Type Industry 3"],
   
    Other_Uses:["Other Item 1","Other Item 2","Other Item 3"],
    Size_Of_Irrigation:["Size Of Irrigation 1","Size Of Irrigation 2","Size Of Irrigation 3"],
    Type_Of_System:["Type Of System 1","Type Of System 2","Type Of System 3"],
    Type_Of_Crop_Irrigation:["Type Of Crop Irrigation 1","Type Of Crop Irrigation 2","Type Of Crop Irrigation 3"],
    Water_Source:["Water Source 1","Water Source 2","Water Source 3"],
    Type_Of_Measurment_Devices:["Type Of Measurment Devices1","Type Of Measurment Devices 2","Type Of Measurment Devices 3"],
    Other_Users:["Other Item 1","Other Item 2","Other Item 3"],
    Water_use:["Water Use 1","Water Use 2","Water Use 3"],

    


}