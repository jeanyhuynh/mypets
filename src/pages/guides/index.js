
// import { Row } from "react-bootstrap";
import Banner from "components/Banner";
const Guides = () => {
  const linkGuides = [{
    linkName: 'Dog Training',
    url: 'guides/training-dog',
  },
  {
    linkName: 'Cat Training',
    url: '#',
  },
  {
    linkName: 'Hamster Training',
    url: '#',
  }
  ]

  return (
    <div>
      <Banner bannerTitle={'Basic guides about your pets'} classNameBanners='shine-text' />
      <div className="p-4">
        {
          linkGuides.length && linkGuides.map((item, _index) => {
            return <div><a className="link" key={_index} href={item.url}>{item.linkName}</a></div>
          })

        }
      </div>
    </div>
  )
}
export default Guides;