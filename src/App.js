import { Link } from 'react-router-dom'
import logo_scopus from './img/logo_scopus.png'
import logo_web_of_science from './img/logo_web_of_science.png'
import logo_scielo from './img/logo_scielo.png'
function App() {
  return (
    <div className=''>
      <div className='bg-piact'>
        <section className='flex  justify-center items-center h-screen'>
          <div className='space-x-2'>
            <Link className='border-white text-sm border font-bold text-white px-3 py-1.5 rounded-md ' to="/about" >Sobre Nosotro</Link>
            <Link className='bg-blue-500 px-3 py-1.5 text-sm font-bold text-white rounded-md' to="/register" >Registrate Gratis</Link>
          </div>
        </section>
      </div>
      <section>
        <div className='flex justify-center items-center h-screen p-4 ' >
          <div className='bg-slate-300 px-4'>
            <p className=''>
              La red académica Perla de la Innovación Académica, Científica y Tecnológica, se establece como una herramienta para el desarrollo académico, científico e investigativo y tecnológico, que brinda un espacio extracurricular de formación, donde participan estudiantes, docentes y profesionales de todas las áreas con el acompañamiento y orientación de guías académicos a partir del trabajo colaborativo y autónomo brindado para el fortalecimiento de competencias y destrezas investigativas, que va desde la búsqueda, formulación de preguntas, aplicación de métodos, diseño de propuestas y ejecución de proyectos que permitan tomar acciones encaminadas a la transferencia de conocimiento y que contribuyan de manera acertada al abordaje de problemáticas reales en diversos contextos desde el quehacer interdisciplinar.
              Los productos derivados de este ejercicio formativo son divulgados mediante la publicación de Libros o capítulos de libro, Artículos científicos publicados en diferentes revistas indexadas científicas y académicas, mediante la participación en eventos de divulgación de conocimiento con ponencias o carteles.

            </p>
          </div>
        </div>
      </section>
      <section className='h-screen'>
        <div className='container mt-14'>
          <h1 className='text-center font-extrabold text-5xl'>Publicaciones</h1>
          <div className='grid md:grid-cols-3 grid-cols-1 items-center' >
            <img className='' src={logo_scopus} />
            <img className='' src={logo_web_of_science} />
            <img className='' src={logo_scielo} />
          </div>
        </div>
      </section>
      <footer>
        <div className='bg-black h-1/2' >
          <h1 className='text-white'>Contactacnos</h1>
          <div className='text-white flex justify-between' >
           <div>
           <h1>SEDE</h1>
            <div>
              <ul>
                <li>Ecuador</li>
                <li>Brazil</li>
                <li>Colombia</li>
                <li>Rusia</li>
              </ul>
            </div>
           </div>
           <div>
             
           </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
