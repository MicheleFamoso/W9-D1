import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const Url = "https://striveschool-api.herokuapp.com/api/comments/";

const CommentArea = function (props) {
  // state = {
  //   recensioni: [],
  // };
  const [recensioni, setRecensioni] = useState([]);

  useEffect(() => {
    if (props.asin) {
      getRece();
    }
  }, [props.asin]);

  const getRece = function () {
    fetch(Url + props.asin, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2ZjNjFkNDM2ZTAwMTVkYTI3MjAiLCJpYXQiOjE3NDM2ODM1MjYsImV4cCI6MTc0NDg5MzEyNn0.rxE_OUjsSq3JbBKF0_8uZjrZD-Tl6XhoPN5yFmV3ziI",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel recupero");
        }
      })
      .then((data) => {
        console.log(data);
        // this.setState({ recensioni: data });
        setRecensioni(data);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
  // componentDidMount() {
  //   {
  //     this.getRece();
  //   }
  // }
  // componentDidUpdate = (prevProps) => {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.getRece();
  //   }
  // };

  return (
    <div className=" position-fixed w-25">
      <AddComment asin={props.asin} />
      <CommentList rec={recensioni} />
    </div>
  );
};

export default CommentArea;
