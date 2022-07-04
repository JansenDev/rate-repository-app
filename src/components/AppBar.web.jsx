import StyledText from "./StyledText";
import Constants from "expo-constants";
import { StyleSheet, ScrollView, View } from "react-native";
import theme from "./theme";
import { Link, useLocation } from "react-router-native";

const AppBarTab = ({ children, to }) => {
  const location = useLocation();

  const active = location.pathname === to;
  const appBarTab = [style.text, active && style.appBarTab];

  return (
    <Link to={to}>
      <StyledText fontWeight="bold" style={appBarTab}>
        {children}
      </StyledText>
    </Link>
  );
};

function AppBar() {
  return (
    <View style={style.container}>
      <ScrollView horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Signin</AppBarTab>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "red",
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    color:"green"
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
    paddingBottom: 5
  },
  appBarTab: {
    color: theme.appBar.textPrimary
  }
});

export default AppBar;
