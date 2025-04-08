import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
function AlertC() {
  return (
    <Container className="mt-3">
      <Alert variant={"info"} className=" text-center fs-2 font-monospace">
        Eventi, personaggi e storie che hanno segnato il mondo.
      </Alert>
    </Container>
  );
}
export default AlertC;
