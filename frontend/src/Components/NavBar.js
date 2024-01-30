export default function NavBar(){
    return <nav className="nav">
        <a href="/" className="site-title">Todo List</a>
        <ul>
            <li>
                <a href="/login">Login</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
}