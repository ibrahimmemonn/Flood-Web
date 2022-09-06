import Image from "next/image";
import React from "react";
import map from "../../assets/Map.png";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { createUseStyles } from "react-jss";
import Map from "../Map";

const Banner = () => {
  const styles = useStyles();
  return (
    <Container>
      <Row>
        <Col md={6} lg={6} className={styles.colDiv}>
          <p className={styles.upperText}>SINDH</p>

          <h1 className={styles.mainText}>
            <CountUp end={89000} duration={1} separator="," />

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
        <Col style={{ marginTop: 200 }} lg={6}>
          {/* <Image src={map} /> */}
          <Map />
        </Col>
      </Row>
    </Container>
  );
};

const useStyles = createUseStyles({
  colDiv: {
    fontFamily: "poppins",
    marginTop: 250,
  },
  upperText: {
    fontWeight: 500,
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
  "@media (max-width: 992px)": {
    colDiv: {
      textAlign: "center",
    },
  },
});

export default Banner;
