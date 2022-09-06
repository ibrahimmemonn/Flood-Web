import React from "react";
import news from "../../assets/news.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";
import news4 from "../../assets/news4.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
const BottomNews = () => {
  const styles = useStyles();
  return (
    <>
      <Container>
        <div className={styles.first}>
          <div className={styles.topSec}>
            <p
              style={{
                fontSize: 18,
                marginBottom: 0,
                marginTop: 10,
              }}
            >
              Happening near you
            </p>
            <p
              style={{
                fontWeight: 500,
                marginTop: 0,
                fontSize: 25,
                marginTop: 5,
              }}
            >
              Fundraisers in your local area
            </p>
          </div>
          <Row>
            <Container>
              <Swiper
                className={styles.swipeCard}
                spaceBetween={50}
                slidesPerView={3.5}
              >
                <Col className={styles.colCard} md={6}>
                  <SwiperSlide>
                    <Image src={news} />
                    <p
                      style={{
                        fontSize: 13,
                        color: "#B20000",
                        marginBottom: 0,
                        marginTop: 10,
                      }}
                    >
                      WEST NEW YORK, NJ
                    </p>
                    <p
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        marginTop: 0,
                        marginBottom: 5,
                      }}
                    >
                      Grief Recovery Fund
                    </p>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 300,
                        marginTop: 0,
                        marginBottom: 10,
                      }}
                    >
                      Hello, my name is Sumaiya, and I am raising funds for my
                      dear friend An Family with the...
                    </p>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        color: "#B20000",
                        marginTop: 0,
                        marginBottom: 10,
                      }}
                    >
                      98,089 raised . 62 donations
                    </p>
                  </SwiperSlide>
                </Col>
                <Col className={styles.colCard} md={6}>
                  <SwiperSlide>
                    <Image src={news2} />
                    <p
                      style={{
                        fontSize: 13,
                        color: "#B20000",
                        marginBottom: 0,
                        marginTop: 10,
                      }}
                    >
                      LONDON
                    </p>
                    <p
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        marginTop: 0,
                        marginBottom: 5,
                      }}
                    >
                      Pakistan Floods Appeal 2022
                    </p>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 300,
                        marginTop: 0,
                        marginBottom: 10,
                      }}
                    >
                      As part of the Nimsdai Foundation’s disaster relief
                      programme the charity off…
                    </p>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        color: "#B20000",
                        marginTop: 0,
                        marginBottom: 10,
                      }}
                    >
                      78,089 raised . 47 donations
                    </p>
                  </SwiperSlide>
                </Col>
                <Col className={styles.colCard} md={6}>
                  <SwiperSlide>
                    <Image src={news3} />
                    <p
                      style={{
                        fontSize: 13,
                        color: "#B20000",
                        marginBottom: 0,
                        marginTop: 10,
                      }}
                    >
                      LONDON, GREATER LONDON, UNITED KINGDOM
                    </p>
                    <p
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        marginTop: 0,
                        marginBottom: 5,
                      }}
                    >
                      Save Sindh. One Village A Time
                    </p>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 300,
                        marginTop: 0,
                        marginBottom: 10,
                      }}
                    >
                      Hi, We are Zain Rafiq (a student at The Ame- rican School
                      in London) a…
                    </p>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        color: "#B20000",
                        marginTop: 0,
                        marginBottom: 10,
                      }}
                    >
                      45,539 raised . 34 donations
                    </p>
                  </SwiperSlide>
                </Col>
                <Col className={styles.colCard} md={6}>
                  <SwiperSlide>
                    <Image src={news4} />
                    <p
                      style={{
                        fontSize: 13,
                        color: "#B20000",
                        marginBottom: 0,
                        marginTop: 10,
                      }}
                    >
                      WEST NEW YORK, NJ
                    </p>
                    <p
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        marginTop: 0,
                        marginBottom: 5,
                      }}
                    >
                      Grief Recovery Fund
                    </p>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 300,
                        marginTop: 0,
                        marginBottom: 10,
                      }}
                    >
                      Hello, my name is Sumaiya, and I am raising funds for my
                      dear friend An Family with the...
                    </p>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        color: "#B20000",
                        marginTop: 0,
                        marginBottom: 10,
                      }}
                    >
                      98,089 raised . 62 donations
                    </p>
                  </SwiperSlide>
                </Col>
              </Swiper>
            </Container>
          </Row>
        </div>
      </Container>

      <Container>
        <div className={styles.second}>
          <div className={styles.topSec}>
            <p
              style={{
                fontSize: 18,
                marginBottom: 0,
                marginTop: 10,
              }}
            >
              Happening near you
            </p>
            <p
              style={{
                fontWeight: 500,
                marginTop: 0,
                fontSize: 25,
                marginTop: 5,
              }}
            >
              Fundraisers in your local area
            </p>
          </div>
          <Row>
            <Col className={styles.colCard} md={4}>
              <Image src={news} />
              <p
                style={{
                  fontSize: 13,
                  color: "#B20000",
                  marginBottom: 0,
                  marginTop: 10,
                }}
              >
                WEST NEW YORK, NJ
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  marginTop: 0,
                  marginBottom: 5,
                }}
              >
                Grief Recovery Fund
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                Hello, my name is Sumaiya, and I am raising funds for my dear
                friend An Family with the...
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#B20000",
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                98,089 raised . 62 donations
              </p>
            </Col>
            <Col className={styles.colCard} md={4}>
              <Image src={news2} />
              <p
                style={{
                  fontSize: 13,
                  color: "#B20000",
                  marginBottom: 0,
                  marginTop: 10,
                }}
              >
                LONDON
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  marginTop: 0,
                  marginBottom: 5,
                }}
              >
                Pakistan Floods Appeal 2022
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                As part of the Nimsdai Foundation’s disaster relief programme
                the charity off…
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#B20000",
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                78,089 raised . 47 donations
              </p>
            </Col>
            <Col className={styles.colCard} md={4}>
              <Image src={news3} />
              <p
                style={{
                  fontSize: 13,
                  color: "#B20000",
                  marginBottom: 0,
                  marginTop: 10,
                }}
              >
                LONDON, GREATER LONDON, UNITED KINGDOM
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  marginTop: 0,
                  marginBottom: 5,
                }}
              >
                Save Sindh. One Village A Time
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                Hi, We are Zain Rafiq (a student at The Ame- rican School in
                London) a…
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#B20000",
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                45,539 raised . 34 donations
              </p>
            </Col>
            <Col className={styles.colCard} md={4}>
              <Image src={news4} />
              <p
                style={{
                  fontSize: 13,
                  color: "#B20000",
                  marginBottom: 0,
                  marginTop: 10,
                }}
              >
                WEST NEW YORK, NJ
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  marginTop: 0,
                  marginBottom: 5,
                }}
              >
                Grief Recovery Fund
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                Hello, my name is Sumaiya, and I am raising funds for my dear
                friend An Family with the...
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#B20000",
                  marginTop: 0,
                  marginBottom: 10,
                }}
              >
                98,089 raised . 62 donations
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
const useStyles = createUseStyles({
  first: {
    display: "contents",
  },
  second: {
    display: "none",
  },
  topSec: {
    fontFamily: "poppins",
  },
  swipeCard: {
    cursor: "pointer",
  },
  colCard: {
    fontFamily: "poppins",
  },
  "@media (max-width: 992px)": {
    first: {
      display: "none",
    },
    second: {
      display: "contents",
      padding: 100,
    },
  },
});
export default BottomNews;
