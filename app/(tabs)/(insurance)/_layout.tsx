import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name='crop-insurance' options={{ headerShown: false }} />
			<Stack.Screen name='animal-insurance' options={{ headerShown: false }} />
			<Stack.Screen name='farm-insurance' options={{ headerShown: false }} />
			<Stack.Screen name='insurance' options={{ headerShown: false }} />
		</Stack>
	);
}
