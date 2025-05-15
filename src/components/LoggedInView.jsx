import { useDispatch, useSelector } from 'react-redux'
import { clearEmail } from '../store/slices/loginFormSlice'

const LoggedInView = () => {
  const dispatch = useDispatch()
  const email = useSelector((state) => state.auth.email)

  return (
    <div className="bg-white p-8 rounded shadow-md w-96 text-center">
      <h2 className="text-2xl font-semibold mb-4">Добро пожаловать, {email}! Рад видеть вас в добром здравии!</h2>
      <button
        onClick={() => dispatch(clearEmail())}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  )
}

export default LoggedInView
