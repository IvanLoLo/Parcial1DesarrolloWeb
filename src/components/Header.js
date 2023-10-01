import logo from '../Logo.png'

function Header(){
    return (
        <header style={{paddingLeft: '6rem', paddingRight: '6rem', paddingTop: '1.5rem'}}>
            <h1 style={{textAlign: 'left'}}>El aroma mágico</h1>
            <hr></hr>
            <img src={logo} style={{width: '100%'}} alt='logo' />
            <hr></hr>
        </header>
    );
}

export default Header;