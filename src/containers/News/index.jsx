import React, { Fragment } from "react";
import { Card } from "antd";
const News = () => {
  return (
    <Fragment>
      <div style={{ marginBottom: "2em" }}>
        <Card title="Kasus di Indonesia"></Card>
      </div>
      <div style={{ margin: "2em 0" }}>
        <Card title="Statistik Covid-19 Kota Salemba"></Card>
      </div>
      <div style={{ margin: "2em 0" }}>
        <Card title="Rapid Antigen"></Card>
      </div>
    </Fragment>
  );
};

export default News;
