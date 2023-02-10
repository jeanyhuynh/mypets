import { Image } from 'react-bootstrap';
import IMAGES from '../assets/images';
import Icon from './Icon';

const Footer = () => {
  return (
    <footer className='d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top bg-footer'>
      <div>
        <a href='#'>
          <Image className='logo' src={IMAGES.logo} alt='' />
        </a>
        <span className='title-xs'>© 2023 Company, Inc</span>
      </div>
      <ul className='list-unstyled d-flex mb-0'>
        <li className='ms-3'>
          <a className='text-muted' href='/'>
            <Icon
              iconName="Facebook"
              color="white"
              size={16}
              className="align-center"
            />
          </a>
        </li>
        <li className='ms-3'>
          <a className='text-muted' href='/'>
            <Icon
              iconName="Twitter"
              color="white"
              size={16}
              className="align-center"
            />
          </a>
        </li>
        <li className='ms-3'>
          <a className='text-muted' href='/'>
            <Icon
              iconName="Instagram"
              color="white"
              size={16}
              className="align-center"
            />
          </a>
        </li>
      </ul>
    </footer>
  )
}
export default Footer;