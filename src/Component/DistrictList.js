import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Col, Container, Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";

const DistrictList = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const styles = useStyles();
  return (
    <Container>
      <div className={styles.colCard}>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <div md={1} onClick={handleClick}>
            <Hamburger color="#B20000" />
          </div>
          <Col style={{ marginLeft: 20 }}>
            <h1
              style={{
                fontSize: 25,
                marginTop: 10,
                padding: 0,
              }}
            >
              List of Districts in Sindh
            </h1>

            {isShown && (
              <div>
                <Row
                  style={{
                    marginTop: 50,
                    marginBottom: 10,
                  }}
                >
                  <Col md={3}>
                    1 Badin
                    <br /> 2 Dadu
                    <br /> 3 Ghotki
                    <br /> 4 Hyderabad
                    <br /> 5 Jacobabad
                    <br /> 6 Jamshoro
                    <br /> 7 Karachi Central
                    <br /> 8 Karachi East
                    <br /> 9 Karachi South
                    <br /> 10 Karachi West
                  </Col>
                  <Col md={3}>
                    11 Kashmore <br /> 12 Keamari <br /> 13 Khairpur Mirs <br />{" "}
                    14 Korangi <br /> 15 Larkana <br /> 16 Malir <br /> 17
                    Matiari <br /> 18 Mirpur Khas <br /> 19 Naushahro Feroze{" "}
                    <br /> 20 Qambar-Shahdadkot
                  </Col>
                  <Col md={3}>
                    21 Sangha
                    <br /> 22 Shaheed Benazir Abad
                    <br /> 23 Shikarpur
                    <br /> 24 Sujawal
                    <br /> 25 Sukkur
                    <br /> 26 Tando Allahyar
                    <br /> 27 Tando Muhammad Khan
                    <br /> 28 Tharparkar
                    <br /> 29 Thatta
                    <br /> 30 Umerkot
                  </Col>
                </Row>
              </div>
            )}
          </Col>
        </div>
      </div>
    </Container>
  );
};
const useStyles = createUseStyles({
  colCard: {
    fontFamily: "poppins",
    margin: 10,
    padding: 25,
    marginTop: 30,
    marginBottom: 50,
    paddingLeft: 30,
    borderRadius: 25,
    cursor: "pointer",
    boxShadow: "0px 2px 15px 3px rgba(0, 0, 0,  0.1)",
    // "&:hover": {
    //   boxShadow: "0px 4px 23px 3px rgba(0, 0, 0, 0.2)",
    // },
  },
});
export default DistrictList;
