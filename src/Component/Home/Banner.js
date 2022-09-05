import Image from "next/image";
import React from "react";
import map from "../../assets/Map.png";
import { Col, Container, Row } from "react-bootstrap";

import { createUseStyles } from "react-jss";

const Banner = () => {
  const styles = useStyles();
  return (
    <Container>
      <Row>
        <Col md={6} style={{ fontFamily: "poppins", marginTop: 250 }}>
          <p className={styles.upperText}>SINDH</p>

          <h1 className={styles.mainText}>
            89,000
            <br />
            <span style={{ color: "#891717" }}>DEATHS!</span>
          </h1>
          <div>
            In the center of the picture, a large area of dark blue shows the
            Indus overflowing and flooding an area around 100 kilometers (62
            miles) wide, turning what were once gricultural fields into a giant
            inland lake.
          </div>
        </Col>
        <Col style={{ marginTop: 200 }}>
          <Image src={map} />
        </Col>
      </Row>
    </Container>
  );
};

const useStyles = createUseStyles({
  margin: {},
  upperText: {
    fontSize: 35,
    lineHeight: 1,
    marginBottom: 0,
  },
  mainText: {
    marginTop: 0,
    fontSize: 94,
    fontWeight: 700,
    lineHeight: 1,
  },
});

export default Banner;
