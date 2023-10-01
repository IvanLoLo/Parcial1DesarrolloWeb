import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import ListaCafes from "./ListaCafes";
import Detail from "./Detail";

function Home(){

    const [selectedCoffee, setSelectedCoffee] = useState(null);

    return(
        <Container fluid className="p-3">
            <Row>
                <Col className="col-8">
                    <ListaCafes onCoffeeSelect={setSelectedCoffee}/>
                </Col>
                <Col className="col-4">
                    <Detail coffee={selectedCoffee}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;