import './style.css';

const Effect = (props) => {
  const { top, left, width, size } = props;

  const style = {
    top,
    left,
    width: size,
    height: size,
  };
  return <span style={style} className='effect effect-animation' />;
};

export default Effect;
