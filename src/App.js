import Footer from './components/Footer';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Study from './components/Study';
import Traditional from './components/Traditional';
import Product from './components/Product';
import Benefits from './components/Benefits';
import UseCases from './components/UseCases';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Study />
      <Traditional />
      <Product />
      <Benefits />
     <UseCases />
      <div className='flex-row center-items content-section'>
        <div className='flex-row center-items content-wrapper'>
          <div className='flex-column content-container'>
            <h1 className='ibm-plex-sans-semibold' style={{marginBottom: '100px'}}>Nuestros planes</h1>
            <div className='flex-row center-items'>
              <div className='flex-column' style={{
                position: 'relative',
                width: 300, 
                height: 500, 
                background: 'rgb(247, 244, 255)', 
                borderRadius: '10px', 
                boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.3)',
                padding: '12px 24px',
                justifyContent: 'space-between'
                }}>
                <div style={{color: 'rgb(23, 0, 78)'}}>
                  <h3 className='ibm-plex-sans-bold' style={{textAlign: 'center', color: 'rgb(70, 25, 175)'}}>Starter</h3>
                  <div style={{textAlign: 'center', marginBottom: 20}}>
                    <span className='ibm-plex-sans-bold' style={{color: 'rgb(70, 25, 175)', fontSize: 40}}>50€</span>/ mes
                  </div>
                  <p className='ibm-plex-sans-regular' style={{width: '100%'}}>Para impulsar la automatización en despachos y asesorías de más de dos personas y decenas de clientes.</p>
                  <div className='flex-column' style={{marginTop: '20px'}}>
                    <div className='flex-row center-items' style={{justifyContent: 'flex-start',gap: '8px'}}>
                      <CheckIcon style={{
                          height: '10px',
                          width: '10px',
                          color: 'white',
                          backgroundColor: 'rgb(70, 25, 175)',
                          borderRadius: '9999px',
                          marginRight: '8px',
                          padding: '4px'
                        }} />
                      <p className='ibm-plex-sans-light-italic' style={{margin: '0 0 10px 0', width: 'unset', display: 'flex', textAlign: 'center'}}>
                      Saldo de 3000 ejecuciones / mes
                    </p>
                    </div>
                      
                    <li style={{
                      display: 'flex',
                      textAlign: 'center',
                      gap: '6px',
                      marginBottom: '8px', // space-y-2 equivalent
                    }}>
                      <CheckIcon style={{
                        height: '10px',
                        width: '10px',
                        color: 'white',
                        backgroundColor: 'rgb(70, 25, 175)',
                        borderRadius: '9999px',
                        marginRight: '8px',
                        padding: '4px'
                      }} />
                      Precio de 0,02 € por ejecución excedida
                    </li>
                    <li style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '8px', // space-y-2 equivalent
                    }}>
                      <CheckIcon style={{
                        height: '10px',
                        width: '10px',
                        color: 'white',
                        backgroundColor: 'rgb(70, 25, 175)',
                        borderRadius: '9999px',
                        marginRight: '8px',
                        padding: '4px'
                      }} />
                     Soporte técnico personalizado
                    </li>
                  </div>
                </div>
                <motion.a whileHover={{ scale: 1.2 }} className='flex-row center-items hero-go-product go-button-light ibm-plex-sans-regular'>Solicitar</motion.a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}