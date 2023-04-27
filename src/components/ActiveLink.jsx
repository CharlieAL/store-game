
import { Link } from 'react-router-dom'

function ActiveLink({path, name}) {

  const route = window.location.pathname
  return (
    <Link to={path} className={path == route ? 'text-[#e58d27] transition-colors':'hover:text-[#e58d27] transition-colors'}>{name}</Link>
  )
}

export default ActiveLink