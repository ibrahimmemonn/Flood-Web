import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar, Button, Modal } from "antd";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import review1 from "../assets/review1.png";
import pk from "../assets/pk.png";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { CheckCircleFilled, UserOutlined } from "@ant-design/icons";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-regular-svg-icons";

const Review = ({
  firstName,
  firstDate,
  firstCity,
  firstDesc,
  firstImage,
  firstImage2,
  firstImage3,
  firstImage4,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const styles = useStyles();
  return (
    <>
      <Container style={{ marginBottom: 100, marginTop: 100 }}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          style={{ width: "70%", height: 400 }}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.divPadding}>
              <div className={styles.divFlexRow}>
                <div style={{ marginTop: 5 }}>
                  <Avatar
                    size={64}
                    src={
                      <Image
                        width={100}
                        height={100}
                        alt="me"
                        layout="fill"
                        src={"/images/Avatar.png"}
                      />
                    }
                  />
                </div>
                <div style={{ marginLeft: 20 }}>
                  <div className={styles.divFlexRow}>
                    <div>
                      <p className={styles.mainText}>{firstName}</p>
                    </div>
                    <div>
                      <CheckCircleFilled className={styles.verifiedIcon} />
                    </div>
                  </div>

                  <p style={{ fontSize: 10 }}>{firstDate}</p>
                </div>
              </div>
              <div className={styles.reviewText}>
                <p>{firstDesc}</p>
                <Row>
                  <Col md={1} className={styles.cityIcon}>
                    <Image src={pk} />
                  </Col>

                  <Col style={{ marginTop: 53, padding: 0 }}>
                    <p>{firstCity}</p>
                  </Col>
                  <Col>
                    <div
                      onClick={showModal}
                      style={{
                        marginTop: 50,
                      }}
                    >
                      <p style={{ textAlign: "right" }}>
                        <FontAwesomeIcon
                          icon={faImages}
                          style={{ marginRight: 10 }}
                        />
                        View Images
                      </p>
                    </div>
                    <Modal
                      title="Images"
                      style={{
                        marginTop: 100,
                        fontFamily: "poppins",
                      }}
                      width={"70%"}
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      footer={null}
                    >
                      <Row>
                        <Swiper spaceBetween={20} slidesPerView={3}>
                          <Col>
                            <SwiperSlide>
                              <Image src={firstImage} alt="news" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image src={firstImage2} alt="news" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image src={firstImage3} alt="news" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image src={firstImage4} alt="news" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <Image src={firstImage} alt="news" />
                            </SwiperSlide>
                          </Col>
                        </Swiper>
                      </Row>
                    </Modal>{" "}
                  </Col>
                </Row>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.divPadding}>
              <div className={styles.divFlexRow}>
                <div style={{ marginTop: 5 }}>
                  <Avatar
                    size={64}
                    src={
                      <Image
                        width={100}
                        height={100}
                        alt="me"
                        layout="fill"
                        src={"/images/Avatar.png"}
                      />
                    }
                  />
                </div>
                <div style={{ marginLeft: 20 }}>
                  <div className={styles.divFlexRow}>
                    <div>
                      <p className={styles.mainText}>Ibrahim Memon</p>
                    </div>
                    <div>
                      <CheckCircleFilled className={styles.verifiedIcon} />
                    </div>
                  </div>

                  <p style={{ fontSize: 10 }}>29 August 2022 at 11:21 </p>
                </div>
              </div>
              <div className={styles.reviewText}>
                <p>
                  “Many districts are beginning to look like they’re part of the
                  ocean,” Rehman told German broadcaster DW News. “Our
                  helicopter sorties are not finding dry land to drop rations.”
                  With more than 30 million people affected across Pakistan --
                  the world’s fifth-most populous nation -- the navy has been
                  deployed for the first time, she added.
                </p>
                <Row>
                  <Col md={1} className={styles.cityIcon}>
                    <Image src={pk} />
                  </Col>

                  <Col style={{ marginTop: 53, padding: 0 }}>
                    <p> Mirpurkhas Sindh</p>
                  </Col>
                  <Col>
                    <div
                      onClick={showModal}
                      style={{
                        marginTop: 50,
                      }}
                    >
                      <p style={{ textAlign: "right" }}>
                        <FontAwesomeIcon
                          icon={faImages}
                          style={{ marginRight: 10 }}
                        />
                        View Images
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.divPadding}>
              <div className={styles.divFlexRow}>
                <div style={{ marginTop: 5 }}>
                  <Avatar
                    size={64}
                    src={
                      <Image
                        src={"/images/Avatar.png"}
                        width={100}
                        height={100}
                        alt="me"
                        layout="fill"
                      />
                    }
                  />
                </div>
                <div style={{ marginLeft: 20 }}>
                  <div className={styles.divFlexRow}>
                    <div>
                      <p className={styles.mainText}>Ibrahim Memon</p>
                    </div>
                    <div>
                      <CheckCircleFilled className={styles.verifiedIcon} />
                    </div>
                  </div>

                  <p style={{ fontSize: 10 }}>29 August 2022 at 11:21 </p>
                </div>
              </div>
              <div className={styles.reviewText}>
                <p>
                  “Many districts are beginning to look like they’re part of the
                  ocean,” Rehman told German broadcaster DW News. “Our
                  helicopter sorties are not finding dry land to drop rations.”
                  With more than 30 million people affected across Pakistan --
                  the world’s fifth-most populous nation -- the navy has been
                  deployed for the first time, she added.
                </p>
                <Row>
                  <Col md={1} className={styles.cityIcon}>
                    <Image src={pk} />
                  </Col>

                  <Col style={{ marginTop: 53, padding: 0 }}>
                    <p> Tando Mohammad Khan</p>
                  </Col>
                  <Col>
                    <div
                      onClick={showModal}
                      style={{
                        marginTop: 50,
                      }}
                    >
                      <p style={{ textAlign: "right" }}>
                        <FontAwesomeIcon
                          icon={faImages}
                          style={{ marginRight: 10 }}
                        />
                        View Images
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
};
const useStyles = createUseStyles({
  swiperSlide: {
    display: "flex",
    borderRadius: 25,
    color: "black",
    fontFamily: "poppins",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 39px rgba(0, 0, 0, 0.10)",
  },
  divPadding: {
    padding: 40,
    paddingTop: 40,
  },
  divFlexRow: {
    flexDirection: "row",
    display: "flex",
  },
  mainText: {
    fontWeight: "500",
    marginBottom: 0,
    fontSize: 20,
    marginTop: 15,
  },
  verifiedIcon: {
    color: "#62A376",
    marginTop: 25,
    fontSize: 12,
    marginLeft: 10,
  },
  reviewText: {
    marginTop: 30,
    fontSize: 15,
  },
  cityIcon: {
    marginTop: 55,
  },
});
export default Review;
