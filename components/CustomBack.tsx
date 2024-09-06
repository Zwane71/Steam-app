import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const CustomBack = ({ title, handlePress, place, track }) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			style={{
				height: 153,

				backgroundColor: "white",
				marginTop: 15,
				borderRadius: 15,
				marginLeft: 25,

				width: 155,
			}}>
			<Text
				style={{
					color: "black",
					fontWeight: 600,
					fontSize: 20,
					padding: 15,
				}}>
				{" "}
				{title}
			</Text>
			<Text style={{ display: "flex", flexDirection: "row", marginLeft: 10 }}>
				<Image source={track} />
				{place}
			</Text>
			<StatusBar backgroundColor='white' style='dark' />
		</TouchableOpacity>
	);
};

export default CustomBack;
