import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import chart from "../../assets/highChart.png";
import chart2 from "../../assets/highChart2.png";
import chart3 from "../../assets/highChart3.png";
import chart4 from "../../assets/highChart4.png";
import CountUp from "react-countup";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import { ArrowUpOutlined } from "@ant-design/icons";

const Infography = () => {
  const styles = useStyles();
  return (
    <>
      <Container>
        <div className={styles.headText}>
          <h1 style={{ fontWeight: "bold ", fontSize: 50, marginBottom: 0 }}>
            Pakistan Live
          </h1>
          <p style={{ letterSpacing: 10, marginTop: 0, paddingTop: 0 }}>
            Statistics
          </p>
        </div>
        <Row style={{ marginTop: 40 }}>
          <Col className={styles.colCard}>
            <p style={{ marginBottom: 0 }}>CONFIRMED</p>
            <p style={{ fontSize: 35, marginBottom: 0, fontWeight: 500 }}>
              <CountUp end={167564} duration={1} separator="," />
            </p>

            <p style={{ color: "#B20000" }}>
              <ArrowUpOutlined style={{ padding: 5 }} />
              <CountUp end={4302} duration={1} separator="," />
            </p>

            <Image src={chart} />
          </Col>
          <Col className={styles.colCard}>
            <p style={{ marginBottom: 0 }}>CONFIRMED</p>
            <p style={{ fontSize: 35, marginBottom: 0, fontWeight: 500 }}>
              <CountUp end={287000} duration={1} separator="," />
            </p>
            <p style={{ color: "#1F5DAB" }}>
              {" "}
              <ArrowUpOutlined style={{ padding: 5 }} />
              <CountUp end={6546} duration={1} separator="," />
            </p>
            <Image src={chart2} />
          </Col>
          <Col className={styles.colCard}>
            <p style={{ marginBottom: 0 }}>CONFIRMED</p>
            <p style={{ fontSize: 35, marginBottom: 0, fontWeight: 500 }}>
              <CountUp end={520232} duration={1} separator="," />
            </p>
            <p style={{ color: "#62A376" }}>
              <ArrowUpOutlined style={{ padding: 5 }} />
              <CountUp end={4302} duration={1} separator="," />
            </p>
            <Image src={chart3} />
          </Col>
          <Col className={styles.colCard}>
            <p style={{ marginBottom: 0 }}>CONFIRMED</p>
            <p style={{ fontSize: 35, marginBottom: 0, fontWeight: 500 }}>
              <CountUp end={200000} duration={1} separator="," />
            </p>
            <p style={{ color: "#EA9161" }}>
              {" "}
              <ArrowUpOutlined style={{ padding: 5 }} />
              <CountUp end={6546} duration={1} separator="," />
            </p>
            <Image src={chart4} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
const useStyles = createUseStyles({
  headText: {
    textAlign: "center",
    fontFamily: "poppins",
    marginTop: 130,
  },
  colCard: {
    fontFamily: "poppins",
    margin: 15,
    padding: 20,
    paddingBottom: 30,
    paddingTop: 30,
    borderRadius: 25,

    boxShadow: "0px 4px 23px 3px rgba(0, 0, 0, 0.15)",
  },
});
export default Infography;
