import { Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    query: "",
  };
  render() {
    return (
      <Container>
        <Form className="d-flex flex-column mb-3">
          <InputGroup>
            <InputGroup.Text>Filter</InputGroup.Text>
            <Form.Control
              aria-label="Filter"
              aria-describedby="inputGroup-sizing-big"
              type="text"
              value={this.state.query}
              onChange={e => this.setState({ query: e.target.value })}
            />
          </InputGroup>
        </Form>
        <Row className="gy-4 align-items-center">
          {this.props.genre
            .filter(book => book.title.toLowerCase().includes(this.state.query.toLowerCase()))
            .map(book => (
              <SingleBook
                key={book.asin}
                book={{
                  title: book.title,
                  img: book.img,
                  price: book.price,
                  asin: book.asin,
                }}
              />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
