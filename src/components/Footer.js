import React from 'react';
import '../styles/footer.scss';
import { Figure } from 'react-bootstrap';
import logo from '../data/images/FunwaveLogo-black2.png';

import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaLine } from 'react-icons/fa';

function Footer(props) {
  return (
    <>
    <div className="footerWrapperPC container-fluid">
      {/* <div className="footerUP"></div> */}
      
        <div className="container-fluid footerContent">
            <div className="row d-flex justify-content-center align-items-start flex-wrap">
              <div className="col-3 col-md-3 ">
                  <div className="h5 fw-bold pb-4 text-wrap">關於我們</div>
                  <div className="h5 fw-normal text-wrap">FUNWAVEFUN浪</div>
                  <div className="h5 fw-normal text-wrap">這裡是衝浪愛好者的集散地，</div>
                  <div className="h5 fw-normal text-wrap">一起FUN，一起浪！</div>
              </div>
              <div className="col-3 col-md-3">
                  <div className="h5 fw-bold pb-4 text-wrap">聯繫我們</div>
                  <div className="h5 fw-normal text-wrap">0800 - 078 - 578</div>
                  <div className="h5 fw-normal text-wrap text-break">funwave.funwave@gmail.com</div>
                  <div className="h5 fw-normal text-wrap">078-基隆市萬里鎮海邊小路78號</div>
              </div>
              <div className="col-3 col-md-3">
                  <div className="h5 fw-bold pb-4 text-wrap">追蹤我們</div>
                  <div className="d-flex justify-content-start align-items-center mt-1">
                        <a href="https://twitter.com/funwave_funwave">
                          <BsFacebook
                          className="me-3"
                          size={24}
                          color="#333333"
                          />
                        </a>
                        <a href="https://twitter.com/funwave_funwave">
                          <AiFillInstagram
                          className="me-3"
                          size={30}
                          color="#333333"
                          />
                        </a>
                        <a href="https://twitter.com/funwave_funwave">
                          <AiFillTwitterCircle
                            className="me-3"
                            size={30}
                            color="#333333"
                          />
                        </a>
                        <a href="https://line.me/ti/g2/rnd10J2RcMA2iyHV7Z7scWAkX3g-K7m88yfvTg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default">
                          <FaLine
                            className="me-3"
                            size={30}
                            color="#333333"
                          />
                        </a>
                  </div>  
                  {/* <div className="h5 fw-normal text-wrap">FUNWAVEFFUN浪</div>
                  <div className="h5 fw-normal text-wrap">這裡是衝浪愛好者的，</div>
                  <div className="h5 fw-normal fw-normaltext-wrap">一起FUN，一起浪！</div> */}
              </div>
              <div className="col-3 col-md-3">
                  <Figure href="/home" className="">
                    <img src={logo} className="imgLogo" />
                  </Figure>
                  {/* <div className="h5 fw-bold pb-3 text-wrap">關於我們</div> */}
                  <div className="h5 fw-normal textBreakFooter text-wrap">此網站僅用於程式開發技術實作學習用途，如有任何侵害到您權益的問題，敬請聯繫funwave.funwave@gmail.com，我們將立即將網站做下線及相關檔案銷毀處理，非常謝謝您！</div>
                  {/* <div className="h5 text-wrap">這裡是衝浪愛好者的集散地，</div>
                  <div className="h5 text-wrap">一起FUN，一起浪！</div> */}
              </div>
            </div>
        </div>
      </div>

      {/* //////////////////////////////// */}

      <div className="footerWrapperMO d-flex justify-content-center align-items-center flex-wrap">
      
        <div className="container footerContent px-5 me-0">
            <div className="row d-flex justify-content-center align-items-center flex-wrap text-center">
              <div className="col-12 pb-3">
                  <div className="h5 fw-bold pb-1 text-wrap">關於我們</div>
                  <div className="h5 fw-normal text-wrap">FUNWAVEFUN浪</div>
                  <div className="h5 fw-normal text-wrap">這裡是衝浪愛好者的集散地，</div>
                  <div className="h5 fw-normal text-wrap">一起FUN，一起浪！</div>
              </div>
              <div className="col-12 pb-3">
                  <div className="h5 fw-bold pb-1 text-wrap">聯繫我們</div>
                  <div className="h5 fw-normal text-wrap">0800 - 078 - 578</div>
                  <div className="h5 fw-normal text-wrap text-break">funwave.funwave@gmail.com</div>
                  <div className="h5 fw-normal text-wrap">078-基隆市萬里鎮海邊小路78號</div>
              </div>
              <div className="col-12 pb-5">
                  <div className="h5 fw-bold pb-1 text-wrap">追蹤我們</div>
                  <div className="d-flex justify-content-center align-items-center mt-1">
                        <a href="https://twitter.com/funwave_funwave">
                          <BsFacebook
                          className="m-1"
                          size={24}
                          color="#333333"
                          />
                        </a>
                        <a href="https://twitter.com/funwave_funwave">
                          <AiFillInstagram
                          className="m-1"
                          size={30}
                          color="#333333"
                          />
                        </a>
                        <a href="https://twitter.com/funwave_funwave">
                          <AiFillTwitterCircle
                            className="m-1"
                            size={30}
                            color="#333333"
                          />
                        </a>
                        <a href="https://line.me/ti/g2/rnd10J2RcMA2iyHV7Z7scWAkX3g-K7m88yfvTg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default">
                          <FaLine
                            className="m-1"
                            size={30}
                            color="#333333"
                          />
                        </a>
                  </div>  
                  {/* <div className="h5 fw-normal text-wrap">FUNWAVEFFUN浪</div>
                  <div className="h5 fw-normal text-wrap">這裡是衝浪愛好者的，</div>
                  <div className="h5 fw-normal fw-normaltext-wrap">一起FUN，一起浪！</div> */}
              </div>
              <div className="col-12 pb-5">
                  <Figure href="/home" className="">
                    <img src={logo} className="imgLogo" />
                  </Figure>
                  {/* <div className="h5 fw-bold pb-3 text-wrap">關於我們</div> */}
                  <div className="h5 fw-normal textBreakFooter text-wrap">此網站僅用於程式開發技術實作學習用途，<br/>如有任何侵害到您權益的問題，敬請聯繫<br/>funwave.funwave@gmail.com，<br/>我們將立即將網站做下線及相關檔案銷毀處理，<br/>非常謝謝您！</div>
                  {/* <div className="h5 text-wrap">這裡是衝浪愛好者的集散地，</div>
                  <div className="h5 text-wrap">一起FUN，一起浪！</div> */}
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
