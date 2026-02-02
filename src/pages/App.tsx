import { Link } from 'react-router-dom'
import '../App.css'

const App = () => {
  document.title = "Home"
  return (
    <>
      <div className="card">
        <h2>Hello, Welcome to My Blog!</h2>
        <Link to="/signup"><button>Add Post</button></Link>
      </div>
    </>
  )
}

export default App