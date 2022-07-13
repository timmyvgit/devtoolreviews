import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="title">
        www.devtoolreviews.com
      </Link>
      <ul>
        <CustomLink to="/reviews">reviews</CustomLink>
        <CustomLink to="/chat">chat</CustomLink>
        <CustomLink to="/forum">forum</CustomLink>
        <CustomLink to="/career">career</CustomLink>
        <CustomLink to="/about">about</CustomLink>

      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}