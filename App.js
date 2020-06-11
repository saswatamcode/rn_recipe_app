import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function App() {

  const Recipes = [
    {
      name: "Pad Thai",
      info: "45 min | 2 servings",
      image: require("./assets/img/salad.jpeg")
    },
    {
      name: "Pad Thai",
      info: "45 min | 2 servings",
      image: require("./assets/img/salad.jpeg")
    },
    {
      name: "Pad Thai",
      info: "45 min | 2 servings",
      image: require("./assets/img/salad.jpeg")
    },
  ]
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <RecipeBackground source={require("./assets/img/spish.jpeg")}>
        <SafeAreaView>
          <MenuBar>
            <Back>
              <AntDesign name="arrowleft" size={27} color="#FFF" />
              <Text large style={{ marginLeft: 10 }}>
                Ingredients
              </Text>
            </Back>
            <AntDesign name="heart" size={27} color="#FFF" />
          </MenuBar>
          <MainRecipe>
            <Text title heavy>
              Salad
            </Text>
            <Divider />
            <Text small bold>
              80 Calories per 100g serving
            </Text>
            <Text small bold>
              10g fat | 45g protein | 45g carbs
            </Text>
          </MainRecipe>
          <Button>
            <Text bold small>
              LEARN MORE
            </Text>
          </Button>
        </SafeAreaView>
      </RecipeBackground>
      <RecipesContainer>
        <Text dark heavy large>
          Recipes
        </Text>
        <Text dark>18 Recipes Available</Text>
        <Recipes></Recipes>
      </RecipesContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  color: #fff;
`;

const Text = styled.Text`
  color: ${(props) => (props.dark ? "#000" : "#FFF")};
  font-family: "AvenirNext-Regular";
  font-weight: 500;

  ${({ title, large, small }) => {
    switch (true) {
      case title:
        return "font-size: 32px";
      case large:
        return "font-size: 20px";
      case small:
        return "font-size: 13px";
    }
  }}

  ${({ bold, heavy }) => {
    switch (true) {
      case bold:
        return "font-weight: 600";
      case heavy:
        return "font-weight: 700";
    }
  }}
`;

const RecipeBackground = styled.ImageBackground`
  width: 100%;
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const Back = styled.View`
  flex-direction: row;
  align-content: center;
`;

const MainRecipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;

const Divider = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`;

const Button = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: rgba(255, 255, 255, 0.3);
  align-self: flex-start;
  padding: 6px 18px;
  border-radius: 100px;
`;

const RecipesContainer = styled.View`
  margin-top: -24px;
  padding: 32px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const Recipes = styled.View`
  margin-top: 18px;
`;

const Recipe = styled.View``;