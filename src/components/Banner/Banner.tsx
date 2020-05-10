import React, {useState, useEffect, useCallback, useRef} from "react"
 
//Components
import Modal from "../Modal/Modal"
 
//Styles
import "./banner.scss"
 
export type BannerProps = {
  data: string[],
  counter: number
}
 
const Banner:React.FunctionComponent<BannerProps> = (props) => {
  const [page, setPage] = useState(0)
  const [open, setModalOpen] = useState(false)
  const [dataModal, setDataModal] = useState({
    title:"",
    subtitle:"",
    text:"",
    link:undefined,
    img: ""
  })
  /** Increases the page by 1, if it reaches the roof value then resets to 0 */
  const handleSetPage = useCallback((currentPage: number) => {
    let nextPage = currentPage + 1;
    if (nextPage === 3) {
      nextPage = 0;
    }
    return nextPage;
  }, [])
 
  const timerFunction = useCallback(() => {
    setPage(handleSetPage);
  },[])
 
  const timer = useRef(setTimeout(timerFunction, 8000));
 
  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    };
  }, [])
 
  const handleClick = (index:number) => {
    clearTimeout(timer.current)
    setPage(index)
    timer.current = setTimeout(timerFunction, 8000);
  }
 
  const handleOpen = (data:any) => {
    setDataModal({
      title:data.title,
      subtitle:data.text,
      text:data.post,
      link:data.link.value != "" ? data.link.value : undefined,
      img: data.img
    })
    setModalOpen(true)
  }
 
  const handleClose = () => {
    setModalOpen(false)
  }
 
  return (
    <>
      <Modal        
          title={dataModal.title}
          subtitle={dataModal.subtitle}
          text={dataModal.text}
          open={open}
          size= "md"
          link={dataModal.link}
          onClose={handleClose}
          kind="normal"
          _class=""
          img={dataModal.img}
      />
      <ul className="pp-banner">
        {
          props.data.map((item:any, index:number) => (
              <li key={`pp-banner-slide_${index}`} className={`pp-banner-slide ${page == index ? "active" : ""}`}>
                <article className="pp-banner-slide-wrapper">
                  <figure className="pp-banner-img" style={{backgroundImage: `url(${item.img})`}}/>
                  <h2 className="pp-banner-title">{item.title}</h2>
                  <p className="pp-banner-text">
                    {item.text}
                    <a className="pp-banner-link" onClick={() => handleOpen(item)}>
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
              <span key={`${_item}-${_index}`} className={`pp-indicator ${page == _index ? "active" : ""}`} onClick={() => handleClick(_index)}/>
            )
          }
        </div>
      </ul>
    </>
  )
}
 
export default Banner