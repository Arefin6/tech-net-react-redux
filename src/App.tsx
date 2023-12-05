import {useSelector} from 'react-redux'
import { RootState } from './redux/store'
function App() {
  const count = useSelector((state: RootState) => state.count.count)
  return (
    <div>
    <div>
      <button
        aria-label="Increment value"
        // onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        // onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  </div>
  )
}

export default App
