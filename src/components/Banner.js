
// import { Row } from "react-bootstrap";
import IMAGES from 'assets/images'


const Banner = (props) => {
  const stylesBannerDefault = {
    width: '100%',
    height: 350,
    padding: 20,
    backgroundImage: `url(${props?.bgImage || IMAGES.traindog})`,
    backgroundPosition: 'left center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    ...props.stylesBanner,
  }
  const titleBannerDefault = {
    fontsize: '14px',
    color: '#FFFFFF',
  }
  return (
    <div style={props.containerStyles}>
      <a href={props.link} className='link'>
        <div className="banner-bg d-flex justify-content-center align-items-center p-0" style={stylesBannerDefault}>
          {props.bannerTitle && <h1 className={props.classNameBanners} style={props.stylesTitleBanner || titleBannerDefault}>{props.bannerTitle}</h1>}
        </div>
      </a >
    </div >

  )
}
export default Banner;