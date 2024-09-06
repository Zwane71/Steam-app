import { Tabs } from "expo-router";
import { View, Text, Image } from "react-native";

// Define the icon function to return icons
const icons = {
	home: require("../../assets/icons/home.png"),
	explore: require("../../assets/icons/globe.png"),
	community: require("../../assets/icons/feather.png"),
	profile: require("../../assets/icons/profile.png"),
	educate: require("../../assets/icons/education.png"),
	weather: require("../../assets/icons/cloud.png"),
	wallet: require("../../assets/icons/wallet.png"),
	insurance: require("../../assets/icons/insurance.png"),
};

const TabIcon = ({ color, icon }) => {
	return (
		<View className='items-center justify-center gap-2'>
			<Image
				source={icon}
				resizeMode='contain'
				style={{ width: 24, height: 24, tintColor: color }}
			/>
		</View>
	);
};

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#FFA001",
				tabBarInactiveTintColor: "#CDCDE0",
				tabBarStyle: {
					backgroundColor: "#161622",
					borderTopWidth: 1,
					borderTopColor: "#232533",
					height: 84,
				},
			}}>
			<Tabs.Screen
				name='home'
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon color={color} icon={icons.home} />
					),
				}}
			/>
			<Tabs.Screen
				name='explore'
				options={{
					title: "Explore",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon color={color} icon={icons.explore} />
					),
				}}
			/>
			<Tabs.Screen
				name='community'
				options={{
					title: "Community",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon color={color} icon={icons.community} />
					),
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon color={color} icon={icons.profile} />
					),
				}}
			/>
			<Tabs.Screen
				name='education'
				options={{
					title: "Education",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon color={color} icon={icons.educate} />
					),
				}}
			/>
			<Tabs.Screen
				name='weather'
				options={{
					title: "Weather",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon color={color} icon={icons.weather} />
					),
				}}
			/>
			<Tabs.Screen
				name='wallet'
				options={{
					title: "Wallet",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon color={color} icon={icons.wallet} />
					),
				}}
			/>
			<Tabs.Screen
				name='(insurance)'
				options={{
					title: "insurance",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon color={color} icon={icons.insurance} />
					),
				}}
			/>
		</Tabs>
	);
}
