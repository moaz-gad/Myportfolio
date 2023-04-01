import React from "react"
import "./DownloadBtn.css"
import myCV from "../../assets/images/Moaz-Gad.pdf"

function DownloadBtn() {
  return (
    <a className="download-btn button" href={myCV} download>
      Resume
    </a>
  )
}

export default DownloadBtn
