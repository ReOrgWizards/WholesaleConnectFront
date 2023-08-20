import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
const WCCustomizeAccordion = ({ title }) => {
  return (
    <Accordion defaultActiveKey="0" className="accordin__main__wrapper">
      <Accordion.Item eventKey="0" className="accordin__item">
        <Accordion.Header className="title">{title}</Accordion.Header>
        <Accordion.Body>
          <Form.Check
            className="my-2"
            type={`checkbox`}
            id={`default-checkbox`}
            label={"Fashion (358)"}
          />
          <Form.Check
            className="my-2"
            type={`checkbox`}
            id={`default-checkbox`}
            label={"Sale (39)"}
          />
          <Form.Check
            className="my-2"
            type={`checkbox`}
            id={`default-checkbox`}
            label={"Selection (355)"}
          />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

WCCustomizeAccordion.propTypes = {
  title: PropTypes.string,
};

export default WCCustomizeAccordion;
