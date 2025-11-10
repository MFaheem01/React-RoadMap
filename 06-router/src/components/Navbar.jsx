import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between align-center p-4 bg-green-700 text-white'>
      <h3>Logo</h3>
      <div className='flex gap-4'>
        <Link to ='/'>Home</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/contact'>Contact</Link>
        <Link to ='/blog'>Blog</Link>
      </div>
    </div>
  )
}

export default Navbar