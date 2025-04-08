import { Col, Container, Row, Form, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook";
import { useState } from "react";

const BookList = function (props) {
  // state = {
  //   search: "",
  //   asin: "",
  // };

  const [search, setSearch] = useState("");
  const [asin, setAsin] = useState("");

  const changeAsin = function (newAsin) {
    // questa funzione verrà eseguita da ogni SingleBook cliccato
    // serve a ricevere l'asin del libro da SingleBook e a salvarlo dentro lo
    // stato di BookList
    // this.setState({
    //   asin: newAsin,
    // });
    setAsin(newAsin);
  };
  console.log(asin);

  return (
    <>
      <div className=" d-flex  justify-content-center mb-3 mt-3">
        <Form className=" w-75 shadow-sm">
          <Form.Control
            type="text"
            placeholder="Search"
            className="me-2"
            value={search}
            onChange={(e) => {
              // this.setState({ search: e.target.value });
              setSearch(e.target.value);
            }}
          />
        </Form>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Row>
              {props.book
                .filter((libro) => {
                  if (libro.title.includes(search)) {
                    return true;
                  } else {
                    return false;
                  }
                })
                .map((sbook) => {
                  return (
                    <SingleBook
                      key={sbook.asin}
                      img={sbook.img}
                      title={sbook.title}
                      asin={sbook.asin}
                      cambiaAsin={changeAsin}
                      asinLibroSelezionato={asin}
                    />
                  );
                })}
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <CommentArea asin={asin} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookList;
