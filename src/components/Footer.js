import { Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-footer'>
      <Col md="auto"><span className='title-xs'>© 2023 Company, Inc</span></Col>
      <Col>
        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'>
            <a className='text-muted' href='/'>
              <svg className='bi' width={24} height={24}>
                <use xlinkHref='#twitter' />
              </svg>
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href='/'>
              <svg className='bi' width={24} height={24}>
                <use xlinkHref='#instagram' />
              </svg>
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href='/'>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img">
                <path fill-rule="evenodd" d="M10.92 2.24H8.75c-.28 0-.63.07-.63.56v2.24h2.8v2.24h-2.8V14H5.88V7.28h-2.8V5.04h2.8V3.08C5.88 1.05 6.86 0 8.75 0h2.17v2.24z"></path></svg>
            </a>
          </li>
        </ul>
        {/* <ul class="up-footer-social-list">
          <li class="up-footer-social-list-item">
            <a href="https://www.facebook.com/upwork" title="Visit Upwork on Facebook" target="_blank" rel="noopener noreferrer" class="up-footer-social-list-link">
              <span class="sr-only">Visit Upwork on Facebook</span>
              <div class="up-icon" data-test="up-c-icon-v2">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img">
                  <path fill-rule="evenodd" d="M10.92 2.24H8.75c-.28 0-.63.07-.63.56v2.24h2.8v2.24h-2.8V14H5.88V7.28h-2.8V5.04h2.8V3.08C5.88 1.05 6.86 0 8.75 0h2.17v2.24z"></path></svg></div></a></li><li class="up-footer-social-list-item">
            <a href="https://www.linkedin.com/company/upwork" title="Read Upwork company news on LinkedIn" target="_blank" rel="noopener noreferrer" class="up-footer-social-list-link">
              <span class="sr-only">Read Upwork company news on LinkedIn</span>
              <div class="up-icon" data-test="up-c-icon-v2">
                
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img">
                  
                  <path fill-rule="evenodd" d="M3.08 13.93H.07V4.27h3.01v9.66zM1.54 3.08C.63 3.08 0 2.45 0 1.61S.63.14 1.61.14c.98 0 1.54.63 1.54 1.47s-.56 1.47-1.61 1.47zM14 13.93h-3.01V8.61c0-1.26-.42-2.1-1.54-2.1-.84 0-1.33.56-1.54 1.12-.07.21-.07.49-.07.77v5.53H4.83V7.35c0-1.19-.07-2.17-.07-3.08h2.59l.14 1.33h.07c.42-.63 1.33-1.54 2.94-1.54 1.96 0 3.43 1.33 3.43 4.13v5.74H14z"></path>
                </svg></div>
            </a></li>
          <li class="up-footer-social-list-item">
            <a href="https://twitter.com/Upwork" title="Follow @Upwork on Twitter" target="_blank" rel="noopener noreferrer" class="up-footer-social-list-link">
              <span class="sr-only">Follow @Upwork on Twitter</span>
              <div class="up-icon" data-test="up-c-icon-v2"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img">
                <path fill-rule="evenodd" d="M12.6 4.13v.35c0 3.78-2.87 8.19-8.19 8.19-1.61 0-3.15-.49-4.41-1.26.21 0 .49.07.7.07 1.33 0 2.59-.49 3.57-1.26-1.26 0-2.31-.84-2.66-1.96.21 0 .35.07.56.07.28 0 .56 0 .77-.07C1.61 7.98.7 6.86.7 5.46v-.07c0 .21.77.35 1.26.35C1.19 5.25.63 4.34.63 3.36c0-.56.14-1.05.42-1.47C2.45 3.64 4.55 4.76 7 4.9c-.14-.28-.21-.49-.21-.7 0-1.61 1.26-2.87 2.87-2.87.84 0 1.54.35 2.1.91.63-.14 1.26-.35 1.82-.7-.21.7-.7 1.26-1.26 1.61.56-.07 1.12-.21 1.68-.42-.42.49-.84.98-1.4 1.4z"></path></svg></div></a></li><li class="up-footer-social-list-item">
            <a href="https://www.youtube.com/channel/UCvxGFOnwUBDHHcxuPqhe4CQ" title="Watch Upwork videos on YouTube" target="_blank" rel="noopener noreferrer" class="up-footer-social-list-link"><span class="sr-only">Watch Upwork videos on YouTube</span>
              <div class="up-icon" data-test="up-c-icon-v2"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path d="M13.707 3.608a1.76 1.76 0 00-1.237-1.246C11.379 2.068 7 2.068 7 2.068s-4.378 0-5.47.294A1.764 1.764 0 00.292 3.608C0 4.707 0 7 0 7s0 2.293.292 3.392a1.76 1.76 0 001.238 1.245c1.092.295 5.47.295 5.47.295s4.378 0 5.469-.295a1.755 1.755 0 001.237-1.245C14 9.293 14 7 14 7s0-2.293-.293-3.392zM5.568 9.082V4.918L9.228 7l-3.66 2.082z"></path></svg></div></a></li><li class="up-footer-social-list-item"><a href="https://www.instagram.com/upwork/" title="Follow Upwork on Instagram" target="_blank" rel="noopener noreferrer" class="up-footer-social-list-link"><span class="sr-only">Follow Upwork on Instagram</span> <div class="up-icon" data-test="up-c-icon-v2"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><g fill-rule="evenodd"><path d="M7 1.263c1.868 0 2.09.007 2.828.04.682.032 1.053.146 1.3.242.326.127.559.278.804.523s.396.478.523.805c.096.246.21.617.241 1.3.034.737.04.958.04 2.827 0 1.868-.006 2.09-.04 2.828-.031.682-.145 1.053-.24 1.3-.128.326-.28.559-.524.804a2.168 2.168 0 01-.805.523c-.247.096-.617.21-1.3.241-.737.034-.958.04-2.827.04s-2.09-.006-2.828-.04c-.682-.031-1.052-.145-1.3-.24a2.168 2.168 0 01-.804-.524 2.168 2.168 0 01-.523-.805c-.096-.247-.21-.617-.241-1.3-.034-.737-.04-.959-.04-2.827 0-1.869.006-2.09.04-2.828.031-.682.145-1.052.24-1.3.128-.326.28-.559.524-.804.245-.245.478-.396.805-.523.246-.096.617-.21 1.3-.241.737-.034.958-.04 2.827-.04M7 .001c-1.9 0-2.139.008-2.885.042C3.37.078 2.86.197 2.416.37a3.43 3.43 0 00-1.24.807 3.43 3.43 0 00-.806 1.24C.197 2.86.078 3.37.044 4.114.01 4.86.002 5.099.002 7c0 1.9.008 2.139.042 2.885.034.745.153 1.254.326 1.699.178.46.418.85.807 1.24.389.388.779.628 1.24.806.444.173.953.292 1.698.326.746.034.984.042 2.885.042 1.9 0 2.139-.008 2.885-.042.745-.034 1.254-.153 1.699-.326a3.43 3.43 0 001.24-.807 3.43 3.43 0 00.806-1.24c.173-.444.292-.953.326-1.698.034-.746.042-.985.042-2.885s-.008-2.139-.042-2.885c-.034-.745-.153-1.254-.326-1.699a3.43 3.43 0 00-.807-1.24 3.43 3.43 0 00-1.24-.806C11.14.197 10.63.078 9.886.044 9.14.01 8.9.002 7 .002"></path><path d="M7 3.407a3.593 3.593 0 100 7.186 3.593 3.593 0 000-7.186zm0 5.926a2.333 2.333 0 110-4.666 2.333 2.333 0 010 4.666zm4.575-6.068a.84.84 0 11-1.68 0 .84.84 0 011.68 0"></path></g></svg></div></a></li></ul> */}
      </Col>
    </footer>
  )
}
export default Footer;