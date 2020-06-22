import React from "react";

import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const FavoritesScreen = (props) => {
  const FavMeals = MEALS.filter((meal) => meal);

  return <MealList listData={FavMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default FavoritesScreen;
