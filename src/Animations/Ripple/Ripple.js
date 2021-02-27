import './style.scss';

const Effect = (props) => {
  const { top, left, size, type } = props;

  const style = {
    top,
    left,
    width: size,
    height: size,
  };
  return (
    <span
      style={style}
      className={`effect dribble__animation dribble__${type}`}
    />
  );
};

export default Effect;
