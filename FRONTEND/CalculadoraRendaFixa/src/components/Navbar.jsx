import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <header className='navbar'>
            <div className='navbar-conteudo'>
                <Link to='/' className='navbar-logo'>📈 Renda Fixa</Link>
                <nav>
                    <Link to='/' className='navbar-link'>🧮 Calculadora </Link>
                    <Link to='/sobre' className='navbar-link'>ℹ️ Sobre </Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;