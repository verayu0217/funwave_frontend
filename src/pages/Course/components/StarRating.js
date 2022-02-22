import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// 創建一個獨立星星預設grey,並新增一個onSelect屬性
const Star = ({ selected = false, onSelect = (f) => f }) => (
  <AiFillStar
    size={20}
    color={selected ? '#ff7f6a' : 'grey'}
    onClick={onSelect}
  />
);
// 此函式傳入陣列長度就可以得到該長度空白陣列
const createArray = (length) => [...Array(length)];

// 呼叫傳入參數5再map渲染指定數量的Start
function StarRating({ totalStart = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStart).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
    </>
  );
}
export default StarRating;
