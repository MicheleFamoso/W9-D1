import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const CommentList = function (props) {
  return (
    <ListGroup>
      {props.rec.length === 0 && (
        <ListGroup.Item>Nessuna recensione</ListGroup.Item>
      )}
      {props.rec.map((comment) => {
        return (
          <ListGroup.Item
            key={comment._id}
            className="  d-flex justify-content-between mt-1 shadow-sm"
          >
            <p>{comment.comment}</p>
            <p>{comment.rate}/5</p>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default CommentList;
