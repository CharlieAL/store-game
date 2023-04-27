
import { RiShoppingCart2Line, RiHeart2Line } from 'react-icons/ri'
import ActiveLink from './ActiveLink'

function Navbar() {


  const routes = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/Streams',
      name: 'Streams'
    },
    {
      path: '/GameStore',
      name: 'Game Store'
    },
    {
      path: '/News',
      name: 'News'
    }
  ]
  return (
    <header className='h-[7vh] text-gray-500 py-2  px-10 flex justify-between bg-[#181a20]'>
      {/* Menu */}
      <ul className='flex items-center gap-6 font-light'>
        {routes.map(({path, name}, index) => (
          <li key={index}>
          <ActiveLink path={path} name={name}/>
        </li>
        ))}
        
      </ul>
      {/* Menu del Usuario */}
      <div className='flex items-center gap-6 text-xl pt-1'>
        <div>
          <button className='hover:text-[#e58d27] transition-colors'>
            <RiShoppingCart2Line />
          </button>
        </div>
        <div>
          <button className='hover:text-[#e58d27] transition-colors'>
            <RiHeart2Line />
          </button>
        </div>
        <div>
          <button className='hover:text-[#e58d27] transition-colors'>
            <img
              src='avatar.webp'
              alt='avatar'
              className='w-8 h-8 object-cover rounded-full ring-2 ring-[#e58d27]'
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
