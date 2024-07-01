import { Component } from "react";
import { Accordion, Badge, Button, Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
    open: false,
  };
  render() {
    return (
      <Col xs="12" md="6" lg="4" xl="3">
        <Card
          type="button"
          className={this.state.selected ? "border-danger" : ""}
          style={{ width: "100%" }}
          /*           onClick={() => this.setState(prevState => ({ selected: !prevState.selected }))}
           */
        >
          <Card.Img variant="top" src={this.props.book.img} alt={this.props.book.title} style={{ height: "437px" }} />
          <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-2">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <Card.Title className="line-clamp m-0 fs-6">{this.props.book.title}</Card.Title>
              <Badge>{this.props.book.price}$</Badge>
            </div>
            <Button variant="primary" className="mb-5">
              Buy
            </Button>
          </Card.Body>
          <Accordion className="position-absolute bottom-0 w-100">
            <Accordion.Item eventKey="0">
              <Accordion.Header onClick={() => this.setState(prevState => ({ open: !prevState.open }))}>
                Comments
              </Accordion.Header>
              <Accordion.Body>{this.state.open && <CommentArea asin={this.props.book.asin} />}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
