import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import icon from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import { createUseStyles } from "react-jss";
import { Col, Container, Row } from "react-bootstrap";

const Infographics = () => {
  const styles = useStyles();
  return (
    <>
      <Container>
        <div className={styles.headText}>
          <h1 className={styles.mainText}>DAMAGE OF INFRASTRUCTURE</h1>
          <p className={styles.subText}>and Private Properties</p>
        </div>
        <Row style={{ marginTop: 40 }}>
          <Col className={styles.colCard} md={5}>
            <Row>
              <Col>
                <p className={styles.cardNumbers}>
                  <CountUp end={1000} duration={1} />
                </p>
                <p className={styles.cardText}>Road</p>
                <p className={styles.cardNumbers}>
                  <CountUp end={1600} duration={1} />
                </p>
                <p className={styles.cardText}>Bridge</p>
              </Col>
              <Col>
                <Image src={icon} alt="icon" />
              </Col>
            </Row>
          </Col>
          <Col className={styles.colCard} md={5}>
            <Row>
              <Col>
                <p className={styles.cardNumbers}>325,000</p>
                <p style={{ color: "#1F5DAB" }}>Masjid</p>
                <p className={styles.cardNumbers}>733,000</p>
                <p style={{ color: "#1F5DAB" }}>Houses</p>
              </Col>
              <Col>
                <Image src={icon2} alt="icon" />
              </Col>
            </Row>
          </Col>
          <Col className={styles.colCard} md={5}>
            <Row>
              <Col style={{ marginTop: 20 }}>
                <Image src={icon3} alt="icon" />
              </Col>
              <Col
                style={{
                  marginTop: 20,
                  textAlign: "right",
                  marginRight: 30,
                }}
              >
                <p style={{ fontSize: 35, marginBottom: 0, fontWeight: 500 }}>
                  325,000
                </p>
                <p style={{ color: "#62A376" }}>Shop</p>
                <p style={{ fontSize: 35, marginBottom: 0, fontWeight: 500 }}>
                  733,000
                </p>
                <p style={{ color: "#62A376" }}>Hotels</p>
              </Col>
            </Row>
          </Col>
          <Col className={styles.colCard} md={5}>
            <Row>
              <Col style={{ marginTop: 20 }}>
                <Image src={icon4} alt="icon" />
              </Col>
              <Col
                style={{
                  marginTop: 20,
                  textAlign: "right",
                  marginRight: 30,
                }}
              >
                <p style={{ fontSize: 35, marginBottom: 0, fontWeight: 500 }}>
                  325,000
                </p>
                <p style={{ color: "#EA9161" }}>Livestoc lost</p>
                <p style={{ fontSize: 35, marginBottom: 0, fontWeight: 500 }}>
                  733,000
                </p>
                <p style={{ color: "#EA9161" }}>Power Houses</p>
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
  mainText: {
    fontWeight: "bold ",
    fontSize: 40,
    marginBottom: 0,
  },
  subText: { letterSpacing: 10, marginTop: 0, paddingTop: 0 },
  cardNumbers: { fontSize: 35, marginBottom: 0, fontWeight: 500 },
  cardText: {
    color: "#B20000",
  },

  colCard: {
    fontFamily: "poppins",
    margin: 10,
    padding: 40,
    width: "48%",
    borderRadius: 25,
    cursor: "pointer",
    boxShadow: "0px 4px 23px 3px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      boxShadow: "0px 4px 23px 3px rgba(0, 0, 0, 0.2)",
    },
  },
  "@media (max-width: 720px)": {
    colCard: {
      width: "95% ",
    },
  },
});
export default Infographics;
