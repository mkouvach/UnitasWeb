import Link from 'next/link';
import Logo from '/public/images/logoUnitas.png';
import Image from 'next/image'
import './menu.module.css'
 
  
const Menu = ()=> {

  return (
    <div className="container">
      <div className="row">

        <nav className="navbar navbar-expand-lg navbar-dark mybgcolor">
          <div className="container-fluid">
              <div className="collapse">
                <Image src={Logo} alt="Logo" className="mylogo" />
              </div>
              <div className="navbar-toggler border-0">
                <Image src={Logo} alt="Logo" className="mylogo" />
              </div>              
              
              <button 
                  className="navbar-toggler" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarNav" 
                  aria-controls="navbarNav" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
              >
                  <span className="navbar-toggler-icon"></span>
              </button>



              <nav className="collapse navbar-collapse navbar-dark mybgcolor" id="navbarNav">
                {/* <div className="container-fluid"> */}

                  <div className="navbar-nav col-2 text-center white">
                    <Link href="/recursos" className='nav-link'>Recursos</Link>
                  </div>
                  <div className="navbar-nav col-2 text-center">
                    <Link href="/servicios" className='nav-link'>Servicios</Link>
                  </div>
                  <div className="navbar-brand mx-auto logo-container col-4 d-none d-lg-block">
                    <Image src={Logo} alt="Logo" className="mylogo" />
                  </div>
                  <div className="navbar-nav col-2 text-center">
                    <Link href="/precios" className='nav-link'>Precios</Link>
                  </div>
        
                  <div className="navbar-nav col-2 text-center">
                    <Link href="/contacto" className='nav-link'>Contacto</Link>
                  </div>
        
                {/* </div> */}
              </nav>



          </div>
        </nav>

      </div>
    </div>
  );
}

export default Menu;

