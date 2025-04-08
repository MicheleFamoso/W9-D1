import books from "../assets/books/history.json";

import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

function CardBook() {
  return (
    <>
      <Container className=" mt-3 mb-3">
        <Row className=" g-5">
          {books.map((book) => {
            return (
              <Col xs={12} md={4} lg={3} key={book.asin}>
                <Card className=" h-100 shadow-lg ">
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body className=" d-flex flex-column justify-content-between bg-dark ">
                    <Card.Title className=" text-center text-light">
                      {book.title}
                    </Card.Title>
                    <Card.Text className=" d-flex  justify-content-around text-light">
                      <small className=" text-info">{book.category}</small>{" "}
                      {book.price}$
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default CardBook;
