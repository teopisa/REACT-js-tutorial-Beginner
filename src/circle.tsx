import React from 'react'; // import react to use JSX

interface CircleProps { //it recieves x and y cordinates and use them to position the circle on SVG canvas, CONSTRAIN = THEY HAVE TO BE NUMBERS
  x: number;
  y: number;
}

const Circle: React.FC<CircleProps> = ({ x, y }) => { // functional component with typescript, recieve as props and x t and use them to set cx and cy to create the circle
  return (
    <svg width="100%" height="100%">
      <circle cx={x} cy={y} r="20" fill="green" />
    </svg>
  );
};

export default React.memo(Circle); //to avoid re-renders when x and y do not change
