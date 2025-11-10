import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import User from './components/User'


const App = () => {

  const [FormData, setFormData] = useState({
    FullName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  })
  const HandleChange = (e) => {
    const { name, value } = e.target


    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }



  const [Error, setError] = useState("")

  const [Users, setUsers] = useState([])

  const FormHandler = (e) => {
    e.preventDefault()

    if (FormData.Password.length < 8) {
      setError('password value must be 8 character long')
      return;
    }
    if (FormData.Password != FormData.ConfirmPassword) {
      setError('password and confirm password are not same')
      return;
    }
    if (!/[*&^%$#@!(),.]/.test(FormData.Password)) {
      setError("password must containt any character")
      return;
    }
    if (!/[A-Z||a-z]/.test(FormData.Password)) {
      setError("please enter any one charater")
      return;

    }
    setError('')
    setFormData({
      FullName: '',
      Email: '',
      Password: '',
      ConfirmPassword: ''
    })


    toast.success('Form Submitted Succesfully', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  }


  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-2xl shadow-2xl p-8 mt-15 shadow-gray-800">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Create an Account
        </h2>

        <form onSubmit={(e) => {
          FormHandler(e)
        }} className="space-y-5">
          <input
            type="text"
            placeholder="Enter Name here"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            name='FullName'
            value={FormData.FullName}
            onChange={HandleChange}
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            name='Email'
            value={FormData.Email}
            onChange={HandleChange}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            name='Password'
            value={FormData.Password}
            onChange={HandleChange}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            name='ConfirmPassword'
            value={FormData.ConfirmPassword}
            onChange={HandleChange}
          />

          <p className='text-red-600 text-center text-sm font-medium'>{Error}</p>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition duration-200"
          >
            Submit
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          By registering, you agree to our{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </p>
        <ToastContainer>

        </ToastContainer>
      </div>
      <div>
        {Users.map((elem, idx) => {
          return <User key={idx} elem={elem} />
        })}
      </div>
    </>
  )
}

export default App
