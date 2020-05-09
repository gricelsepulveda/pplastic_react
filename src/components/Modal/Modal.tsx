import React from "react"
import ReactDOM from "react-dom"
import './modal.scss'

interface ModalProps {
    title: string,
    subtitle: string
    text: string,
    open: boolean,
    size: string,
    link: string | undefined,
    onClose: () => void,
    _class: string,
    kind: string,
    img: string
}

const Modal:React.FunctionComponent<ModalProps> = (props) => {
    return (
        props.open ? ReactDOM.createPortal(
            <div className={`bg-modal ${props.kind}, ${props.size}, ${props._class}`}>
                <section className="modal">
                    <header className="modal-header">
                        <h5>{props.title}</h5>
                        <button className="btn-close" onClick={props.onClose}/>
                    </header>
                    <div className="modal-body">
                        <div className="modal-body-wrapper">
                            <article
                                className="modal-img"
                                style={{
                                    backgroundImage: `url("${props.img}")`
                                }}
                            />
                            <div className="modal-body-text">
                                <p className="text-lead">
                                    {props.subtitle}
                                </p>
                                {
                                    props.text.split("<br/>").map((item, index) =>
                                        <p className="body-text" key={`${props.title}_${index}`}>
                                            {item}
                                        </p>
                                    )
                                }
                                {
                                    props.link ? 
                                    <a className="modal-enlace" href={props.link} target="_blank">Enlace</a>
                                    :null
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>,
            // @ts-ignore
            document.getElementById("modal-root")
        ): null
    )
}
export default Modal;
