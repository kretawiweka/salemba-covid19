import React, { Fragment } from "react";
import { Card } from "antd";
const Home = () => {
  return (
    <Fragment>
      <div style={{ marginBottom: "2em" }}>
        <Card title="Statistik Covid-19 Kota Salemba"></Card>
      </div>
      <div style={{ margin: "2em 0" }}>
        <Card title="Covid-19 di Indonesia"></Card>
      </div>
      <div style={{ margin: "2em 0" }}>
        <Card title="Vaksin Covid-19"></Card>
      </div>
    </Fragment>
  );
};

export default Home;
