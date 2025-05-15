import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setEmail } from '../store/slices/loginFormSlice'

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const LoginForm = () => {
  const [email, setEmailInput] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setError('Введите корректный email')
    } else {
      dispatch(setEmail(email))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmailInput(e.target.value)
          if (error) setError('')
        }}
        placeholder="Enter your email"
        className="w-full p-2 border rounded mb-2"
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <button
        type="submit"
        disabled={!isValidEmail(email)}
        className={`w-full p-2 rounded text-white ${isValidEmail(email) ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm
