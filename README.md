# ReactJS Homework: Rendering and Motion Simulation

## Exercise 1: Circle Rendering and Continuous Motion

### Objective
Create a React application that renders a circle in continuous motion on a canvas. The canvas can be implemented using SVG or WebGL. The motion should simulate continuous movement, possibly in a spiral pattern using polar coordinates.

### Instructions

1. **Rendering the Circle**:
   - Use a rendering library (such as an SVG canvas or WebGL) to position and render a circle on a canvas.

2. **Simulating Continuous Motion**:
   - Implement the motion of the circle such that its position changes continuously over time.
   - The motion data can be random but must ensure continuous movement. For example, you can use a function that describes a spiral pattern using polar coordinates.
   - The kinetic parameters of the motion, such as velocity and acceleration, can be linear or non-linear, depending on the functions you implement.

3. **Event Loop Implementation**:
   - Implement the event loop to update the circle’s position using the `setInterval` method in JavaScript.
   - Set the default frame rate to 60 frames per second (FPS).

4. **Analysis and Optimization**:
   - Analyze the performance of the `setInterval` method implementation.
   - Identify any problems with using `setInterval` for the event loop, such as frame drops or inconsistent motion.
   - Propose and implement an optimized solution, such as using `requestAnimationFrame` for smoother animations.
   - Compare the results of both implementations, noting differences in performance and smoothness.

5. **TypeScript and ES6**:
   - Use TypeScript to type your components and logic.
   - Follow ES6 standards for your codebase.
   - Measure and log the number of re-renders happening in your components. Use flags in the `useEffect` hook to detect unnecessary re-renders and optimize the component lifecycle.

### Additional Information

- **Rendering Libraries**:
  - For SVG rendering, consider using native SVG elements or libraries like [react-svg](https://github.com/tanem/react-svg).
  - For WebGL rendering, consider using libraries like [react-three-fiber](https://github.com/pmndrs/react-three-fiber).

- **Polar Coordinates**:
  - Polar coordinates can be used to describe the spiral motion. The position `(x, y)` can be calculated from the polar coordinates `(r, θ)` using:
    \[
    x = r \cos(\theta)
    \]
    \[
    y = r \sin(\theta)
    \]
  - You can vary `r` and `θ` over time to create the spiral effect.

- **Event Loop Methods**:
  - `setInterval`: A basic method to repeatedly call a function with a fixed time delay.
  - `requestAnimationFrame`: A method that tells the browser to execute a function before the next repaint, leading to smoother animations and better performance.

- **Performance Optimization**:
  - Use `React.memo` to prevent unnecessary re-renders of components.
  - Implement the `useCallback` and `useMemo` hooks to memoize functions and values.
  - Log re-renders using `console.log` within the `useEffect` hook to identify performance bottlenecks.

