import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// 創建一個獨立星星預設grey,並新增一個onSelect屬性
const Star = ({ selected = false, onSelect = (f) => f }) => (
  // TODO:星星樣式空的要怎麼改
  <AiFillStar
    size={20}
    color={selected ? '#ff7f6a' : 'grey'}
    onClick={onSelect}
  />
);
// 此函式傳入陣列長度就可以得到該長度空白陣列
const createArray = (length) => [...Array(length)];

// 呼叫傳入參數5再map渲染指定數量的Start
// 給它初始值是0 disable false可以點擊
function StarRating({
  totalStart = 5,
  setRating,
  initStarts = 0,
  disable = false,
}) {
  const [selectedStars, setSelectedStars] = useState(initStarts);
  return (
    <>
      {createArray(totalStart).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => {
            if (disable) return;
            setSelectedStars(i + 1);
            setRating(i + 1);
          }}
        />
      ))}
    </>
  );
}
export default StarRating;
