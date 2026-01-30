import { Form, Link } from "react-router-dom"

const Signin = () => {
  return (
    <div>
        <Form>
            <h2>Sign in</h2>
            <p>Don't have an account? <Link to="/signup">Sign up!</Link></p>
        </Form>
    </div>
  )
}

export default Signin