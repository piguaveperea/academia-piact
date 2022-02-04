import { Splide, SplideSlide } from '@splidejs/react-splide';
import CardDirective from '../components/CardDirective';
import image from '../img/foto_1.jpg'
export default function About() {
    const WorkingGroup = [
        {
            fullName: "BYRON FERNANDO CHERE QUIÑÓNEZ",
            urlImg: image,
            job: "Director Ejecutivo"
        },
        {
            fullName: "ISMAEL ELÍAS ERAZO VELASCO",
            urlImg: image,
            job: "Director De Producción Científica"
        }
    ]
    return (

        <div>
            <h1>About</h1>
            <div className='container p-2'>
                <Splide options={{
                    rewind: true,
                }} >
                    {WorkingGroup.map((user) => (
                        <SplideSlide>
                            <CardDirective name={user.fullName} job={user.job} image={user.urlImg} />
                        </SplideSlide>
                    ))}

                </Splide>
            </div>
        </div>
    )
}