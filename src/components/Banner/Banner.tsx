import React, {useState, useEffect} from "react"

//Styles
import "./banner.scss"

export type BannerProps = {
  data: string[]
}
const Banner:React.FunctionComponent<BannerProps> = (props) => {
  const [page, setPage] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setPage(page + 1 != 3 ? page + 1 : 0)
    }, 5000)
  }, [page])

  return (
    <ul className="pp-banner">
      {
        props.data.map((item:any, index:number) => (
            <li key={`pp-banner-slide_${index}`} className={`pp-banner-slide ${page == index ? "active" : ""}`}>
              <article className="pp-banner-slide-wrapper">
                <figure className="pp-banner-img" style={{backgroundImage: `url(${item.img})`}}/>
                <h2 className="pp-banner-title">{item.title}</h2>
                <p className="pp-banner-text">
                  {item.text} 
                  <a className="pp-banner-link" href={item.link.value} target="_blank">
                    {item.link.text}
                  </a>
                </p>
              </article>
            </li>
          )
        )
      }
      <div className="pp-indicators flex row center">
        {
          props.data.map((_item:any, _index:number) => 
            <span key={`${_item}-${_index}`}className={`pp-indicator ${page == _index ? "active" : ""}`}/>
          )
        }
      </div>
    </ul>
  )
}

export default Banner