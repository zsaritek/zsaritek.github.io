
import "./style.css";
import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { meta } from "../../content_option";

export const MyResume = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> My Resume | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> My Resume </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
      </Container>

      <div>
        <h2>Download PDF</h2>
        <a href={process.env.PUBLIC_URL + '/files/cv.pdf'} download='cv.pdf'>
          Download PDF
        </a>
      </div>
    </HelmetProvider>
  );
};
