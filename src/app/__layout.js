import { Stack } from "expo-router";

export default Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyles: {
          backgroundColor: "#2C3E50",
        }
      }}>
      <Stack.Screen name="homeScreen" options={{ title: "Home" }} />
      <Stack.Screen name="categoryScreen" options={{ title: "Categoria" }} />
      <Stack.Screen name="detailsScreen" options={{ title: "Detalhes" }} />
    </Stack>
  );
}
