import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ShakeEvent } from "../utilities/ShakeEvent";
import romanize from "../utilities/EpisodSchma";
export type Props = {
  data: any;
};

const InfoComponent = ({ data }: Props) => {
  const [dataIndex, setDataIndex] = useState(0);

  useEffect(() => {
    ShakeEvent.addListener(() => {
      let randomNumber = Math.floor(
        Math.random() * data.allPlanets.planets.length - 1,
      );
      setDataIndex(randomNumber);
    });
    () => ShakeEvent.removeListener();
  }, []);

  // console.log(dataIndex);

  let { films } = data.allPlanets.planets[dataIndex].filmConnection;

  const renderFilms = () => {
    let film = films.map(
      (res: { id: string; title: string; episodeID: string }) => {
        return (
          <View key={res.id} style={styles.films_container}>
            <Text key={res.id}>
              {res.title} ,{romanize(res.episodeID)}
            </Text>
          </View>
        );
      },
    );

    return film;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {data.allPlanets?.planets[dataIndex]?.name}
      </Text>
      {films.length ? renderFilms() : <Text>There is no episode here</Text>}
    </View>
  );
};

export default InfoComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    textAlign: "center",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "600",
  },
  films_container: {
    alignSelf: "center",
  },
});
