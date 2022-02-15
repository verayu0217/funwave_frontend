import React from 'react';
import { useState, useEffect } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import greenTitle from '../../../data/images/greenTitle.svg';

import '../CourseContent.scss';

function CourseEvaluate() {
  //先用假資料 先不從後端取
  const [courseEvaluate, setCourseEvaluate] = useState([
    {
      id: 1,
      avatar: 'https://picsum.photos/id/237/50/50',
      name: '頭號奈粉1',
      date: '2022年2月9日',
      content: '非常好玩',
      image: 'https://picsum.photos/id/237/80/80',
    },
    {
      id: 2,
      avatar: 'https://picsum.photos/id/237/50/50',
      name: '頭號奈粉2',
      date: '2022年1月2日',
      content: '還想再來',
      image: 'https://picsum.photos/id/237/80/80',
    },
    {
      id: 3,
      avatar: 'https://picsum.photos/id/237/50/50',
      name: '頭號奈粉3',
      date: '2021年12月25日',
      content: '不會游泳也可以學會衝浪',
      image: 'https://picsum.photos/id/237/80/80',
    },
  ]);

  return (
    <>
      {/* 課程體驗評價  */}
      <div className="row ">
        <div className="col-sm-12 col-md-7 col-lg-9 m-auto">
          <div className="text-secondary my-5 h1 text-center ">
            <img
              src={greenTitle}
              className="greenTitle me-3"
              alt="greenTitle"
              height="24px"
              weight="64px"
            />
            課程體驗評價
          </div>

          {/* 留言 */}
          {courseEvaluate.map((evaluate) => {
            return (
              <>
                <div key={evaluate.id} className="row border m-auto mt-3">
                  {/* 第一排抬頭 */}
                  <div className="d-flex flex-wrap">
                    <div className="mt-2 align-self-center">
                      {/* 大頭照  */}
                      <img
                        className="rounded-circle"
                        src={evaluate.avatar}
                        alt=""
                        height="50px"
                        weight="50px"
                      />
                    </div>

                    {/* 名稱 */}
                    <div className="m-3 align-self-center">{evaluate.name}</div>

                    {/* 星星 */}
                    <div className="align-self-center">
                      <div className="d-flex">
                        <AiFillStar size={20} color="#ff7f6a" />
                        <AiFillStar size={20} color="#ff7f6a" />
                        <AiFillStar size={20} color="#ff7f6a" />
                        <AiFillStar size={20} color="#ff7f6a" />
                        <AiOutlineStar size={20} color="#ff7f6a" />
                      </div>
                    </div>

                    <div className=" align-self-center ms-auto">
                      <div className="date-4 ">{evaluate.date}</div>
                    </div>
                  </div>
                  {/* 第二排 */}
                  <div className="m-3">
                    {/* 文字 */}
                    <p>{evaluate.content}</p>
                    <div>看更多</div>
                    {/* 圖片區  */}
                    <div className="mt-3">
                      <img src={evaluate.image} className="rounded-3" alt="" />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CourseEvaluate;
