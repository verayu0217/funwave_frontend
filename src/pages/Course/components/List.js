import Item from './Item';

const List = ({ listData }) => {
  // console.log(listData);

  return (
    <div>
      {listData.map((item, i) => {
        const { message, date, rating, photo, name } = item;
        return (
          <Item
            key={i}
            message={message}
            date={date}
            rating={rating}
            photo={photo}
            name={name}
          />
        );
      })}
    </div>
  );
};
export default List;
