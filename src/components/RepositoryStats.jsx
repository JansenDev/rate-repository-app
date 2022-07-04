import {  View } from "react-native";
import StyledText from "./StyledText";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

function RepoStats(props) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View>
        <StyledText fontWeight="bold"> Starts </StyledText>
        <StyledText align="center">
          {parseThousands(props.stargazersCount)}
        </StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold">ForksCount</StyledText>
        <StyledText align="center">
          {parseThousands(props.forksCount)}
        </StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold"> ReviewCount </StyledText>
        <StyledText align="center"> {props.reviewCount}</StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold"> Ratings </StyledText>
        <StyledText align="center"> {props.ratingAverage}</StyledText>
      </View>
    </View>
  );
}


export default RepoStats;
