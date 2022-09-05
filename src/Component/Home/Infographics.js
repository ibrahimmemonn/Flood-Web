import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import CountUp from "react-countup";
import { createUseStyles } from "react-jss";
import Image from "next/image";

const Infographics = () => {
  const styles = useStyles();
  return (
    <>
      <Container>
        <div className={styles.headText}>
          <h1 style={{ fontWeight: "bold ", fontSize: 50, marginBottom: 0 }}>
            Pakistan Flood
          </h1>
          <p style={{ letterSpacing: 10, marginTop: 0, paddingTop: 0 }}>
            Situation Report
          </p>
        </div>
        <Row style={{ marginTop: 40 }}>
          <Col className={styles.colCard} md={5}>
            <Row>
              <Col>
                <p style={{ fontSize: 35, marginBottom: 0, fontWeight: 500 }}>
                  1,000+
                </p>
                <p style={{ color: "#B20000" }}>Deaths</p>
                <p style={{ fontSize: 35, marginBottom: 0, fontWeight: 500 }}>
                  <CountUp end={1600} duration={1} />
                </p>
                <p style={{ color: "#B20000" }}>Injureds</p>
              </Col>
              <Col>
                <Image src={icon} />
              </Col>
            </Row>
          </Col>
          <Col className={styles.colCard} md={5}>
            <Row>
              <Col>
                <p style={{ fontSize: 35, marginBottom: 0, fontWeight: 500 }}>
                  325,000
                </p>
                <p style={{ color: "#1F5DAB" }}>House Destroyed</p>
                <p style={{ fontSize: 35, marginBottom: 0, fontWeight: 500 }}>
                  733,000
                </p>
                <p style={{ color: "#1F5DAB" }}>House Damaged</p>
              </Col>
              <Col>
                <Image src={icon2} />
              </Col>
            </Row>
          </Col>
          <Col className={styles.colCard} md={5}>
            <Row>
              <Col>
                <Image src={icon3} />
              </Col>
              <Col>
                <p
                  style={{
                    fontSize: 35,
                    marginBottom: 0,
                    fontWeight: 500,
                    marginTop: 50,
                    marginLeft: 30,
                  }}
                >
                  735,000
                </p>

                <p style={{ color: "#62A376", marginLeft: 30 }}>
                  Livestoc lost
                </p>
              </Col>
            </Row>
          </Col>
          <Col className={styles.colCard} md={5}>
            <Row>
              <Col>
                <Image src={icon4} />
              </Col>
              <Col>
                <p
                  style={{
                    fontSize: 35,
                    marginBottom: 0,
                    fontWeight: 500,
                    marginTop: 50,
                    marginLeft: 30,
                  }}
                >
                  200,000
                </p>
                <p style={{ color: "#EA9161", marginLeft: 30 }}>
                  Acres of crops affected
                </p>
              </Col>
            </Row>
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
    marginTop: 100,
  },
  colCard: {
    fontFamily: "poppins",
    margin: 10,
    padding: 40,
    width: "48%",
    borderRadius: 25,

    boxShadow: "0px 4px 23px 3px rgba(0, 0, 0, 0.15)",
  },
});
export default Infographics;
