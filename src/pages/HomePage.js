
import { Col, Row, Card } from "react-bootstrap";
import Sliders from "components/Sliders";
import IMAGES from '../assets/images/';

const HomePage = () => {
  const petsCard = [
    {
      name: "Dog's Food",
      img: IMAGES.dogfood
    },
    {
      name: "Cat's Food",
      img: IMAGES.catfood
    },
    {
      name: "Fish's Food",
      img: IMAGES.fishfood
    },
    {
      name: "Pet's Toy",
      img: IMAGES.petstoy
    }
  ]
  return (
    <div>
      <Sliders />
      <Row className="p-4 gx-2 cus-card">
        {
          petsCard.length && petsCard.map((item, _index) => {
            console.log('_index :>> ', _index);
            return (
              <Col key={_index} className='mx-2'>
                <a className="link" href="#">
                  <Card className="card-box">
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            )
          })
        }

      </Row>

    </div >
  )
}
export default HomePage;