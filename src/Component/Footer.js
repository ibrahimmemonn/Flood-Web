import React from "react";
import Image from "next/image";
import logo from "..//assets/logo.png";
import { createUseStyles } from "react-jss";
import { Col, Container, Row } from "react-bootstrap";
import {
  FacebookFilled,
  GooglePlusOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const Footer = () => {
  const styles = useStyles();
  return (
    <>
      <div
        style={{ backgroundColor: "#EFEFEF", marginTop: 80, paddingBottom: 50 }}
      >
        <Container>
          <div style={{ paddingTop: 60 }}>
            <Image src={logo} alt="logo" />
          </div>
          <Row style={{ fontFamily: "poppins", marginTop: 60 }}>
            <Col md={5}>
              <p
                style={{
                  fontSize: 15,
                }}
              >
                See the Realtime Pakistan and Worldwide COVID-19
                <br /> situation!!
              </p>
              <p
                style={{
                  fontSize: 15,
                  marginTop: 30,
                }}
              >
                Ministry of National Health Services Regulations & <br />{" "}
                Coordination.
              </p>
              <p
                style={{
                  fontSize: 15,
                  marginTop: 30,
                }}
              >
                Ministry of National Health Services Regulations & <br />{" "}
                Coordination, 3rd Floor Kohsar Block, Islamabad
              </p>
              <p
                style={{
                  fontSize: 15,
                  marginTop: 30,
                }}
              >
                +92 (51) 9255090
              </p>
              <p
                style={{
                  fontSize: 15,
                  marginTop: 30,
                }}
              >
                +92 (51) 9245717
              </p>
              <p
                style={{
                  fontSize: 15,
                  marginTop: 30,
                }}
              >
                contact@nhsrc.gov.pk{" "}
              </p>
            </Col>
            <Col md={3}>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 20,
                }}
              >
                NAVIGATE
              </p>
              <p
                className={styles.footer}
                style={{
                  cursor: "pointer",
                  marginTop: 30,
                  fontSize: 15,
                }}
              >
                Home
              </p>
              <p
                className={styles.footer}
                style={{
                  cursor: "pointer",
                  marginTop: 30,
                  fontSize: 15,
                }}
              >
                Flood
              </p>
              <p
                className={styles.footer}
                style={{
                  cursor: "pointer",
                  marginTop: 30,
                  fontSize: 15,
                }}
              >
                Guidlines
              </p>
              <p
                className={styles.footer}
                style={{
                  cursor: "pointer",
                  marginTop: 30,
                  fontSize: 15,
                }}
              >
                We Care
              </p>

              <p
                className={styles.footer}
                style={{
                  cursor: "pointer",
                  marginTop: 30,
                  fontSize: 15,
                }}
              >
                Contact US
              </p>
            </Col>
            <Col md={4}>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 20,
                }}
              >
                FIND US ON
              </p>
              <div
                style={{ flexDirection: "row", display: "flex", marginTop: 20 }}
              >
                <GooglePlusOutlined className={styles.icons} />
                <FacebookFilled className={styles.icons} />
                <InstagramOutlined className={styles.icons} />
              </div>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 20,
                  marginTop: 30,
                }}
              >
                Subscribe our Newsletter
              </p>
              <input placeholder="Enter Email" className={styles.input} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
const useStyles = createUseStyles({
  input: {
    backroundColor: "red",
    border: " none ",
    padding: 15,
    borderRadius: 25,
    width: "100%",
  },
  footer: {
    "&:hover": {
      color: "#B20000",
    },
  },
  icons: {
    fontSize: 50,
    marginRight: 20,
    "&:hover": {
      color: "#B20000",
    },
  },
});
export default Footer;
