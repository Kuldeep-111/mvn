import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "./Button/Button";
import Modal from "react-bootstrap/Modal";
import SecTitle from "./SecTitle/Index";
import * as CONFIG from '../config/config';
import Loader from "./Loader/loader";

const CustomModal = ({ show, hide, projectName, isOffer }) => {
  const [formDetails, setFormDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFormChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = `https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID=4804&qSenderName=${formDetails.name}"&qMobileNo=${formDetails.number}&qEmailID=${formDetails.email}&qQueryMessage=${formDetails.message}&qProjectName=${projectName}`;

    if (!formDetails.name || !formDetails.email || !formDetails.number || !formDetails.message) {
      alert("Please fill all details!");
    } else {
      setLoading(true);
      fetch(apiUrl, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json", 
        },
      })
        .then((data) => {
          console.log("Success:", data); 
          alert("Enquiry Details Sent Successfully!");
          const newTab = window.open("/thanks", "_blank");

          if (newTab) {
            window.close(); 
          }
          setFormDetails({});
          setLoading(false);
          hide();
        })
        .catch((error) => {
          console.error("Error:", error); 
          setLoading(false);
        });
    }
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        console.log('closed');
        hide();
      }
    };
    if (show) {
      document.addEventListener("mousedown", close);
    }
    return () => document.removeEventListener("mousedown", close);
  }, [show, hide]);

  if (isOffer) {
    return (
      <Modal show={show} className="enquire_form custom_modal offer_modal" aria-labelledby="contained-modal-title-vcenter" centered>
        <div ref={modalRef}>
          <Modal.Body>
            <div className="left">
              <img src={CONFIG.IMAGE_URL + 'offer/1.webp'} className="img-fluid offer_img" />
            </div>

            <div className="right">
              <SecTitle className="text-center color style1">
                <h4 className="title">Grab The Offer</h4>
              </SecTitle>

              <span
                className="close"
                onClick={hide}
                style={{ position: "absolute", top: 0, right: 10, fontSize: 30 }}
              >
                &times;
              </span>
              <Form onSubmit={loading ? () => null : handleSubmit}>
                <Row>
                  <Form.Group className="form-group" as={Col} xs="12">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Name:"
                      value={formDetails.name ?? ""}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="form-group" as={Col} xs="12">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="E-Mail:"
                      value={formDetails.email ?? ""}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="form-group" as={Col} xs="12">
                    <Form.Control
                      type="number"
                      name="number"
                      placeholder="Phone:"
                      value={formDetails.number ?? ""}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="form-group" as={Col} xs="12">
                    <Form.Control
                      type="text"
                      name="message"
                      placeholder="Message:"
                      value={formDetails.message ?? ""}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                </Row>

                <Button type="submit" className="btn_style3" disabled={loading ? true : false}>
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </Form>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    );
  }

  return (
    <Modal show={show} className="enquire_form custom_modal floor_plan_popup">
      <div ref={modalRef}>
        <Modal.Body>
          <Container style={{ position: "relative" }}>
            <SecTitle className="text-center color style1">
              <img src={CONFIG.IMAGE_URL + 'logo_white.webp'} alt="Logo" className="img-fluid headingIcon" />
              <h4 className="title">Get In Touch With Us</h4>
            </SecTitle>
            <span
              className="close"
              onClick={hide}
              style={{ position: "absolute", top: 0, right: 10, fontSize: 30 }}
            >
              &times;
            </span>
            <Form onSubmit={loading ? () => null : handleSubmit}>
              <Row>
                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name:"
                    value={formDetails.name ?? ""}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="E-Mail:"
                    value={formDetails.email ?? ""}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="number"
                    name="number"
                    placeholder="Phone:"
                    value={formDetails.number ?? ""}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="text"
                    name="message"
                    placeholder="Message:"
                    value={formDetails.message ?? ""}
                    onChange={handleFormChange}
                  />
                </Form.Group>
              </Row>

              <Button type="submit" className="btn_style3" disabled={loading ? true : false}>
                {loading ? "Sending..." : "Submit"}
              </Button>
            </Form>
          </Container>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default CustomModal;
