
import { Col, Row, Card, Image, Button } from "react-bootstrap";
import Sliders from "components/Sliders";
import IMAGES from '../assets/images/';

const HomePage = () => {

  const petsCard = [
    {
      id: 'food1',
      name: "Dog's Food",
      img: IMAGES.dogfood
    },
    {
      id: 'food2',
      name: "Cat's Food",
      img: IMAGES.catfood
    },
    {
      id: 'food3',
      name: "Fish's Food",
      img: IMAGES.fishfood
    },
    {
      id: 'food4',
      name: "Pet's Toy",
      img: IMAGES.petstoy
    }
  ]
  const petsType = [
    {
      id: 'type1',
      typeName: "Dog",
      img: IMAGES.dogcartoon
    },
    {
      id: 'type2',
      typeName: "Cat",
      img: IMAGES.catcartoon
    },
    {
      id: 'type3',
      typeName: "Fish",
      img: IMAGES.fiscartoon
    },
    {
      id: 'type4',
      typeName: "Bird",
      img: IMAGES.birdcartoon
    },
    {
      id: 'type5',
      typeName: "Hamster",
      img: IMAGES.hamstercartoon
    }
  ]
  const petsNews = [
    {
      id: 'news1',
      title: "First-Time Dog Owner's Guide",
      img: IMAGES.dogwithowner,
      desc: `If you are looking to adopt a dog, then chances are you’re a thoughtful, caring person who understands that welcoming a furry friend into your relatively less furry family comes with a lot of responsibility. It’s easy to be caught off guard by all that goes into dog ownership.It’s also easy to be scared away from what could be a fulfilling and meaningful experience because you worry that you’re not up to the job.`,
    },
    {
      id: 'news2',
      title: "First-Time Cat Owner's Guide",
      img: IMAGES.catwithowner,
      desc: `If you are looking to adopt a cat, then chances are you’re a thoughtful, caring person who understands that welcoming a furry friend into your relatively less furry family comes with a lot of responsibility. It’s easy to be caught off guard by all that goes into dog ownership.It’s also easy to be scared away from what could be a fulfilling and meaningful experience because you worry that you’re not up to the job.`,
    },
    {
      id: 'news3',
      title: "First-Time Bird Owner's Guide",
      img: IMAGES.birdwithowner,
      desc: `If you are looking to adopt a cat, then chances are you’re a thoughtful, caring person who understands that welcoming a furry friend into your relatively less furry family comes with a lot of responsibility. It’s easy to be caught off guard by all that goes into dog ownership.It’s also easy to be scared away from what could be a fulfilling and meaningful experience because you worry that you’re not up to the job.`,
    },
  ]
  return (
    <div>
      <Sliders />
      <Col className="p-4">
        <Row className="gx-2 cus-card">
          {
            petsCard.length && petsCard.map(item => {
              return (
                <Col key={item.id} lg={3} xs={12} md={6} className="p-3">
                  <a className="link" href="#">
                    <Card className="card-box">
                      <div className="card-bg-img" style={{ backgroundImage: `url(${item.img})` }}></div>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              )
            })
          }
          <h1 className="my-4">Shop by pet</h1>
          {
            petsType.length && petsType.map(item => {
              return (
                <Col key={item.id} className='p-2 d-flex justify-content-center' >
                  <a className="link text-center " href="#">
                    <div className="circle-img d-flex align-item-center">
                      <Image src={item.img} alt={item.typeName} />
                    </div>
                    <span className="text-center">{item.typeName}</span>
                  </a>
                </Col>
              )
            })
          }
        </Row>
        <Row>
          <Col>
            <h2 className="my-4">Learn What You Need to Know About Your New Pets</h2>
            {
              petsNews.length && petsNews.map((item, _index) => {
                const indexEle = _index + 1;
                return (
                  <Row key={item.id} className="my-4">
                    <Col lg={{ order: (indexEle + 1) % 2 === 0 ? indexEle + 1 : indexEle, span: 6 }} xs={12}>
                      <div className="d-flex">
                        <Image src={item.img} alt={item.img} fluid />
                      </div>
                    </Col>
                    <Col lg={{ order: (indexEle + 1) % 2 === 0 ? indexEle - 1 : indexEle + 1 }}>
                      <div>
                        <h3 className="mb-4">{item.title}</h3>
                        <span>{item.desc}</span>
                        <Row className="my-4">
                          <Col>
                            <a className={`'link', ${indexEle}`} href="#" key={_index}> <Button>Read more</Button></a>
                          </Col>
                        </Row>
                      </div>
                    </Col >
                  </Row >
                )
              })
            }
          </Col >

        </Row >
      </Col >


    </div >
  )
}
export default HomePage;