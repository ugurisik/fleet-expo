import { Stack } from "expo-router/stack";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>

      <Stack
        screenOptions={{
            headerShown: false,
        }}
      >

        
        <Stack.Screen name="Imports/Components/Pages/Loginpage" />
        <Stack.Screen
          name="Imports/Components/Pages/Dashboard"
          options={{
            gestureEnabled: false,
          }}
        />
      </Stack>
    </>
  );
}
