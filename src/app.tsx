// manages the animation of a circle on an SVG CANVAS, handles the state for circle's position, upddates this position over time to create a continous motion efect'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Circle from './circle';
import './app.css';

const App: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });  // this are the initial position of the circle
  const [radius, setRadius] = useState(50); //create the states, initial value of 50, radius f the spira
  const [angle, setAngle] = useState(0)

  const angleRef = useRef(0); //takes the initial value
  const radiusRef = useRef(1);

  const updatePosition = useCallback(() => { //use callback to prevent recreation or rerenders, with the purpose of calculate the new position based on the spiral pattern
    const angle = angleRef.current; // retrieval of current angle and current radius
    const radius = radiusRef.current;
    const x = 700 + radius * Math.cos(angle); // it gives us the new positon
    const y = 500 + radius * Math.sin(angle);

    setPosition({ x, y }); //position is updated
    setRadius(radius);
    setAngle(angle);

    angleRef.current += 0.1; //updates angle and radius for the next frame
    radiusRef.current += 0.05;

    requestAnimationFrame(updatePosition); //SCHEDULE THE NEXT UPDATE FOR THIS LOOP
  }, []);

  useEffect(() => {//STARTS THE LOOPS
    requestAnimationFrame(updatePosition);//by calling at first update position

    return () => cancelAnimationFrame(requestAnimationFrame(updatePosition)); 
  }, [updatePosition]);

  useEffect(() => {
    console.log('App component re-rendered'); //create a pring after the rerendering (debugs)
  });

  return (
    <div className="App">
      <Circle x={position.x} y={position.y} />
      <div style={{ marginTop: '20px' }}>
        <p><strong>Current Position:</strong> x: {position.x.toFixed(2)}, y: {position.y.toFixed(2)}</p>
        <p><strong>Current Radius:</strong> {radius.toFixed(2)}</p>
        <p><strong>Current Angle:</strong> {angle.toFixed(2)}</p>
      </div>
    </div>
  );
};
export default App;

