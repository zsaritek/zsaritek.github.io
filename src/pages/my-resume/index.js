
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

export const MyResume = () => {
  const handleSave = () => {
    const filePath = '/files/cv.pdf'; // Replace with your actual file path
    const url = `${process.env.PUBLIC_URL}${filePath}`;

    const a = document.createElement('a');
    a.href = url;
    a.download = 'cv.pdf'; // Replace with the desired file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleClick = () => {
    const userConfirmed = window.confirm('Double-check my downloaded CV to ensure it is the hero you expected?');

    if (userConfirmed) {
      handleSave();
    }
  };

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
        <Row>
          <h2>Ready to dive into my professional journey? Download my CV with a click, and let's connect on a whole new level.</h2>
        </Row>
        <Row>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <button onClick={handleClick} className="btn btn-light mb-2 mt-2 border border-dark ">Download My Resume</button>
          </div>
        </Row>
        <Row>
          <h2 className="d-flex justify-content-center align-items-center">Your curiosity is the key – unlock my story and explore the possibilities! </h2>
        </Row>
      </Container>

    </HelmetProvider>
  );
};
