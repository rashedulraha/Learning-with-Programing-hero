import React from "react";
import Container from "./Container";
import { useLoaderData } from "react-router";

const Details = () => {
  const details = useLoaderData();
  console.log(details);

  return (
    <div>
      <Container>
        <h2>Details</h2>
      </Container>
    </div>
  );
};

export default Details;
