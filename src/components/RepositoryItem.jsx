import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "./theme";

function RepositoryItemHeader(props) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image style={style.image} source={{ uri: props.ownerAvatarUrl }} />
      <View style={style.box}>
        <StyledText fontSize="subheading" fontWeight="bold">
          {props.fullName}
        </StyledText>

        <StyledText style={style.description}>{props.description}</StyledText>

        <StyledText style={style.languaje}>{props.language}</StyledText>
      </View>
    </View>
  );
}

function RepositoryItem(props) {
  // console.log(JSON.stringify(props));
  return (
    <View style={style.container} key={props.id}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: 15,
    marginBottom: 10,
    marginHorizontal: "5%",
    // backgroundColor: "red",

    // borderColor: "red",
    borderRadius: 1,
    borderStyle: "dotted"
  },
  box: {
    marginLeft: 10,
    marginBottom: 2,
    // backgroundColor: "green",
    // flex:1,
    width: "70%"
  },
  languaje: {
    backgroundColor: Platform.OS === "android" ? theme.colors.primary : "red",
    borderRadius: 3,
    color: Platform.select({
      android: "#fff",
      ios: "#000",
      web: "yellow"
    }),
    alignSelf: "flex-start",
    paddingVertical: 3,
    paddingHorizontal: 4,
    marginTop: 1
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginTop: 5
  },
  description: {
    // backgroundColor: "skyblue",
    // width: 250
    flex: 1
  }
});

export default RepositoryItem;
