import React from 'react';

// 資訊引用
import { IMAGE_URL } from '../../utils/config';
import { useNavigate } from "react-router-dom";


import { FaLongArrowAltRight } from 'react-icons/fa';

function HomeInfoCard(props) {

    const cardInfoDataItem = props.cardInfoDataItem;

    // 使用useNavigate
    let navigate = useNavigate();

    return (


        <>
                    {/* 卡片本體-中間 */}
                    <div className="cardHome shadow">
                        {/* 卡片圖片容器-中間 */}
                        <div className="cardPicDivHome d-flex justify-content-center align-items-center">
                            {/* 卡片圖片標籤-中間 */}
                            <span className="badgeHome badge bg-dark h6">{cardInfoDataItem.info_cat}</span>
                            {/* 卡片圖片本體-中間 */}
                            <img className="cardPicHome" src={`${IMAGE_URL}/information/${cardInfoDataItem.big_img}`} alt={cardInfoDataItem.big_img}/>
                        </div>
                        {/* 卡片文字容器-中間 */}
                        <div>
                            <div className="cardTitleHome px-4 pt-4 pb-4">
                                <h3>{cardInfoDataItem.big_title}</h3>
                            </div>
                            <div className="cardTextHome px-4 pt-4 pb-4">
                                <p>{cardInfoDataItem.one_text_one}</p>
                            </div>
                            <div className="cardinfoHome d-flex justify-content-between align-items-center px-4 pt-5 pb-4">
                                {/* 客製化按鈕 */}
                                <h6>{cardInfoDataItem.create_time} {cardInfoDataItem.author}</h6>
                                <div>
                                    <a className="btn btn-primary" href="" onClick={()=> navigate(`/information/${cardInfoDataItem.info_no}`)}>看更多
                                        <FaLongArrowAltRight
                                                className="ps-2"
                                                size={24}
                                                color="#ffffff"
                                        />
                                    </a>
                                </div> {/* 客製化按鈕-結束 */}
                            </div>
                        </div>
                    </div> {/* 卡片本體-中間 cardHome */}


        </>
    );
}

export default HomeInfoCard;