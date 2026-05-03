import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { View } from "react-native";
import { StackRouteProps } from "@/routes/StackRoutes";
import { BottomRouteProps } from "@/routes/BottomRoutes";
import { DrawerRouteProps } from "@/routes/DrawerRoutes";

export function Product({ navigation, route }: DrawerRouteProps<"product">) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>Product {route.params?.id}</Title>
      </Header>
    </View>
  );
}
