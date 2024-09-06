import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, handlePress }) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			className={`bg-white  ju`}
			style={{
				minHeight: 60,
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "white",
				margin: "auto",
				borderRadius: 15,
				marginTop: 65,
				padding: 9,
				width: 350,
			}}>
			<Text style={{ color: "#1D7707", fontWeight: 800, fontSize: 30 }}>
				{" "}
				{title}
			</Text>
			<StatusBar backgroundColor='white' style='dark' />
		</TouchableOpacity>
	);
};

export default CustomButton;
