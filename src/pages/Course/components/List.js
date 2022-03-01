import moment from 'moment';
import Item from './Item';
import { useState, useEffect } from 'react';
import { API_URL, IMAGE_URL } from '../../../utils/config';
import axios from 'axios';

const List = ({ listData }) => {
  // console.log(listData);

  return (
    <div>
      {listData.map((item, i) => {
        const { message, date, rating, photo } = item;
        return (
          <Item
            key={i}
            message={message}
            date={date}
            rating={rating}
            photo={photo}
          />
        );
      })}
    </div>
  );
};
export default List;
