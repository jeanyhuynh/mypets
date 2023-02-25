
import { Row, Col } from "react-bootstrap";
import Banner from "components/Banner";
import IMAGES from '../assets/images';
const LessonInstallingZSH = () => {

  return (
    <div>
      <Banner bgImage={IMAGES.ohmyzsh} />
      <Col className="p-4">
        <Row className="gx-2">
          <h1 className="title-text my-4">Which Training Class is Right for My Dog?</h1>
          <p><b>At first, dog training can seem pretty overwhelming, especially if this is your first dog. The truth is that training your dog is a very big project. If you take it step by step, you will find the task to be far less daunting. Here is some information to help get you started:</b>
            <ul>
              <li>
                Start a Dog Obedience Program: Learn how to set a basic foundation before you begin to train your dog.
              </li>
              <li>
                Train Your Dog Using Games: Training your dog should be fun! Everyone knows it's easier to learn when you are having a good time, so try implementing some games into your dog training regimen.
              </li>
              <li>
                Six Weeks to a Well-Trained Dog: Using this schedule as a guide, you can teach your dog the basics in about six weeks.
              </li>
              <li>
                Positive Reinforcement: There are many different ways to train a dog, but most dog professionals agree that the positive way is the best for both the dog and trainer.
              </li>
            </ul>
          </p>
          <h5>
            Consider Rewards From Your Dog’s Point of View
          </h5>
          <p>You might think dog biscuits are the best treat, but if your dog finds them boring, you won’t be reinforcing anything by using them in your training. Make sure you choose something truly rewarding from your dog’s point of view. Rewards can even be praise, a toy, or a chance to play a game: anything your dog loves makes a great reinforcement.</p>
        </Row>
      </Col>
    </div >
  )
}
export default LessonInstallingZSH;
