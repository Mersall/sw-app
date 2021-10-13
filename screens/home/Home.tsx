import React from "react";
import { PLANETS_QUERY } from "../../service/plantsGql";
import { useQuery } from "@apollo/client";
import Loader from "../../component/Loader";
import ErrorModal from "../../component/ErrorModal";
import InfoComponent from "../../component/InfroComponent";

const Home = () => {
  const { data, loading, error } = useQuery(PLANETS_QUERY);

  if (loading) return <Loader />;

  if (error) return <ErrorModal />;

  if (data || !loading) return <InfoComponent data={data} />;
};

export default Home;
