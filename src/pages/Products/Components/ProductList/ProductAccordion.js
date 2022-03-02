// ProductAccordion.js 內容說明：商品主頁左方的大小分類

import React from 'react';
import { Accordion } from 'react-bootstrap';

function ProductAccordion(props) {
  const { bigCatsClick, setBigCatsClick, smallCatsClick, setSmallCatsClick } =
    props;

  return (
    <>
      {/* 大小分類 */}
      <Accordion className="mt-4" defaultActiveKey="0" flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header
            className="accordionTitle"
            onClick={(e) => {
              setBigCatsClick(1);
              setSmallCatsClick(0);
            }}
          >
            <h3>衝浪板</h3>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="ulProducts">
              <li
                className="liProducts"
                onClick={(e) => {
                  setSmallCatsClick(1);
                }}
              >
                長板
              </li>
              <li
                className="liProducts"
                onClick={(e) => {
                  setSmallCatsClick(2);
                }}
              >
                快樂板
              </li>
              <li
                className="liProducts"
                onClick={(e) => {
                  setSmallCatsClick(3);
                }}
              >
                短板
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header
            onClick={(e) => {
              setBigCatsClick(2);
              setSmallCatsClick(0);
            }}
          >
            <h3>衝浪板配件</h3>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="ulProducts">
              <li
                className="liProducts"
                onClick={(e) => {
                  setSmallCatsClick(4);
                }}
              >
                衝浪板舵
              </li>
              <li
                className="liProducts"
                onClick={(e) => {
                  setSmallCatsClick(5);
                }}
              >
                腳繩
              </li>
              <li
                className="liProducts"
                onClick={(e) => {
                  setSmallCatsClick(6);
                }}
              >
                腳踏墊
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header
            onClick={(e) => {
              setBigCatsClick(3);
              setSmallCatsClick(0);
            }}
          >
            <h3>衝浪相關衣物</h3>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="ulProducts">
              <li
                className="liProducts"
                onClick={(e) => {
                  setSmallCatsClick(7);
                }}
              >
                衝浪斗篷毛巾衣
              </li>
              <li
                className="liProducts"
                onClick={(e) => {
                  setSmallCatsClick(8);
                }}
              >
                防寒衣
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default ProductAccordion;
