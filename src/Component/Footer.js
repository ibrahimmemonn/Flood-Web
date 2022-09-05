import {
  FacebookFilled,
  GooglePlusOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "..//assets/logo.png";

const Footer = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#EFEFEF", marginTop: 80, paddingBottom: 50 }}
      >
        <Container>
          <div style={{ paddingTop: 60 }}>
            <Image src={logo} />
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
                style={{
                  marginTop: 30,
                  fontSize: 15,
                }}
              >
                Home
              </p>
              <p
                style={{
                  marginTop: 30,
                  fontSize: 15,
                }}
              >
                Flood
              </p>
              <p
                style={{
                  marginTop: 30,
                  fontSize: 15,
                }}
              >
                Guidlines
              </p>
              <p
                style={{
                  marginTop: 30,
                  fontSize: 15,
                }}
              >
                We Care
              </p>

              <p
                style={{
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
                style={{ flexDirection: "row", display: "flex", marginTop: 30 }}
              >
                <GooglePlusOutlined style={{ fontSize: 50, marginRight: 20 }} />
                <FacebookFilled style={{ fontSize: 50, marginRight: 20 }} />
                <InstagramOutlined style={{ fontSize: 50 }} />
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
              <input
                placeholder="Enter Email"
                style={{
                  backroundColor: "red",
                  border: " none ",
                  padding: 15,
                  borderRadius: 25,
                  width: "100%",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
