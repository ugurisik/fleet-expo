import { Stack } from 'expo-router/stack';

export default function Layout() {
    return (
        <>
            <Stack screenOptions={{
                headerShown: false
            }}>

                <Stack.Screen name="Imports/Components/Pages/Loginpage" />
                <Stack.Screen name="Imports/Components/Pages/Dashboard" options={{
                    gestureEnabled: false
                }} />

            </Stack>
        </>
    )
}
