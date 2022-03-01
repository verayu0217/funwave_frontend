import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../../utils/config';
import moment from 'moment';
import StarRating from './StarRating';

// props拿出add
const Edit = ({ add, auth }) => {
  // TODO:取得會員名稱後給name

  // console.log(auth?.name);
  //新增留言時帶入日期
  let today = moment().format('YYYY-MM-DD');

  const [name, setName] = useState('');

  const [message, setMsg] = useState('');
  const [rating, setRating] = useState('');
  const [photo, setPhoto] = useState('');
  const [date, setDate] = useState(today);

  // useEffect(() => {
  //   if (auth === null) {
  //     return;
  //   }
  // });

  function msgChange(e) {
    setMsg(e.target.value);
  }

  // 綁定button的onClick方法
  async function addMsg() {
    if (message === '') {
      window.alert('請填寫留言再送出');
      return;
    }
    // 從父層傳下來的setData方法
    add(function (prevData) {
      // 調換順序讓新留言在最上面
      return [{ message, rating, date }, ...prevData];
    });

    let totalMsg = [
      {
        name: '路人甲',
        date: date,
        message,
        rating,
        photo: photo,
      },
    ];

    console.log(totalMsg);
    //把留言存進資料庫
    try {
      // 方法1:沒有圖片上傳
      // let response = await axios.post(
      //   `${API_URL}/course/courseEvaluate`,
      //   totalMsg
      // );
      // console.log('有沒有送留言', response.data);
      // 方法2:有圖片上傳
      let msgData = new FormData();
      msgData.append('name', totalMsg[0].name);
      msgData.append('date', totalMsg[0].date);
      msgData.append('message', totalMsg[0].message);
      msgData.append('rating', totalMsg[0].rating);
      msgData.append('photo', totalMsg[0].photo);
      let response = await axios.post(
        `${API_URL}/course/courseEvaluate`,
        msgData
      );
      console.log('有沒有送留言', response.data);
    } catch (e) {
      console.error('error', e.response.data);
    }

    // 將留言暫存進localStorage 使用展開運算子等同於push 一有新留言push
    // let perMsg = [];
    // let totalMsg = [
    //   {
    //     msg,
    //     rating,
    //   },
    //   ...perMsg,
    // ];
    // localStorage.setItem('totalMsg', JSON.stringify(totalMsg));
  }

  return (
    <div className="d-flex   flex-column">
      <label className="h3 mt-5">評價留言</label>
      {/* 放星星 */}
      <div>
        <StarRating setRating={setRating} rating={rating} />
      </div>
      <textarea
        name=""
        rows="4"
        cols="50"
        value={message}
        onChange={msgChange}
      ></textarea>
      <input
        className="mt-2"
        type="file"
        id="photo"
        name="photo"
        onChange={(e) => {
          // 圖片儲存的方式不太一樣
          // console.log('這裡', e.target.files[0]);
          setPhoto(e.target.files[0]);
        }}
      ></input>
      <button onClick={addMsg} className="editBtn btn btn-primary mt-2">
        送出留言
      </button>
    </div>
  );
};
export default Edit;
