import { Component } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";
import { Col } from "react-bootstrap";

const SingleBook = function (props) {
  return (
    <>
      <Col xl={4}>
        <Card
          className=" w-100"
          style={{
            border:
              props.asinLibroSelezionato === props.asin
                ? "2px solid red"
                : "1px solid gray",
          }}
        >
          <Card.Img
            variant="top"
            src={props.img}
            onClick={() => {
              // this.setState({
              //   selected: !this.state.selected, // toggle
              // })
              // devo anche utilizzare l'asin per cambiare lo stato di mio padre,
              // BookList! invoco la funzione che mi arriva dalle props
              props.cambiaAsin(props.asin); // invoca changeAsin in BookList
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-between bg-dark">
            <Card.Title className="text-center text-light">
              {props.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleBook;
