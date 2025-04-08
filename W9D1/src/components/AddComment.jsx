import { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  ListGroup,
  ListGroupItem,
  FormControl,
  Button,
} from "react-bootstrap";

const AddComment = function (props) {
  // state = {
  //   review: {
  //     comment: "",
  //     rate: "2",
  //     elementId: this.props.asin,
  //   },
  // };
  const [review, setReview] = useState({
    comment: "",
    rate: "2",
    elementId: props.asin,
  });

  const invia = function (e) {
    e.preventDefault();
    console.log("Review inviata:", review); // DEBUG
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2ZjNjFkNDM2ZTAwMTVkYTI3MjAiLCJpYXQiOjE3NDM2ODM1MjYsImV4cCI6MTc0NDg5MzEyNn0.rxE_OUjsSq3JbBKF0_8uZjrZD-Tl6XhoPN5yFmV3ziI",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Inviato!!!");
        } else {
          throw new Error("Non Inviato!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(props.asin, "asinooooo");
  return (
    <ListGroup className="mb-3 shadow-sm">
      <ListGroupItem>
        <Form onSubmit={invia} className=" mb-3">
          <FormGroup>
            <FormLabel>Recensione</FormLabel>
            <FormControl
              type="text"
              className=" mb-3"
              placeholder="Recensisci"
              value={review.comment}
              required
              onChange={(e) => {
                // this.setState({
                //   review: {
                //     ...this.state.review,
                //     comment: e.target.value,
                //   },
                // });
                setReview({
                  ...review,
                  comment: e.target.value,
                });
              }}
            />
          </FormGroup>
          <Form.Group>
            <Form.Label>Voto</Form.Label>
            <Form.Select
              value={review.rate}
              onChange={(e) => {
                // this.setState({
                //   review: {
                //     ...this.state.review,
                //     rate: e.target.value,
                //   },
                // });
                setReview({
                  ...review,
                  rate: e.target.value,
                });
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>

          <Button className="mt-3" variant="success" type="submit">
            Invia
          </Button>
        </Form>
      </ListGroupItem>
    </ListGroup>
  );
};

export default AddComment;
