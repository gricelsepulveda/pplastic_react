import React, {useState, useEffect} from "react"

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
  const [counter, setCounter] = useState(0)
  const [dataModal, setDataModal] = useState({
    title:"",
    subtitle:"",
    text:"",
    link:undefined,
    img: ""
  })

  let timer =
    setTimeout(() => {
      setCounter(counter + 1)
    },  1000)
  
  
  useEffect(() => {
    if (counter <= 7 ){
      timer
    }
    else if (counter == 8){
      setCounter(0)
      clearTimeout(timer)
      setPage(page + 1 != 3 ? page + 1 : 0)
    }
  }, [counter])

  const handleClick = (index:number) => {
    clearTimeout(timer)
    setCounter(0)
    setPage(index)
  }

  console.log(counter)

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