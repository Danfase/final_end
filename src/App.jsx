import { useSelector } from 'react-redux'
import LoginForm from './components/LoginForm'
import LoggedInView from './components/LoggedInView'

function App() {
  const email = useSelector((state) => state.auth.email)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {email ? <LoggedInView /> : <LoginForm />}
    </div>
  )
}

export default App
