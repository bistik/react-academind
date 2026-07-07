import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const handleToggle = () => {
    dispatch(counterActions.toggleCounter());
  };
  const handleInc = () => {
    dispatch(counterActions.increment());
  };
  const handleDec = () => {
    dispatch(counterActions.decrement());
  };
  const handleCustomInc = () => {
    dispatch(counterActions.increase(5));
  };
  const handleReset = () => {
    dispatch(counterActions.reset());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>-- {counter} --</div>}
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleCustomInc}>Add 5</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleToggle}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
