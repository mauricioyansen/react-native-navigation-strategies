import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { StackRouteProps } from "@/routes/StackRoutes";
import { BottomRouteProps } from "@/routes/BottomRoutes";
import { DrawerRouteProps } from "@/routes/DrawerRoutes";
import { View } from "react-native";

export function Home({ navigation }: DrawerRouteProps<"home">) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} />

        <Title>Home</Title>

        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate("product", { id: "123" })}
        />
      </Header>
    </View>
  );
}
