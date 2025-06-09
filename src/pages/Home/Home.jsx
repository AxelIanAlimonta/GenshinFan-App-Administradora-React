import Header from "../../components/Header/Header";
import { Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Header />
            <h1>Home :D</h1>
            <main className="menuPrincipal">

                <div className="contenedorDeSecciones">
                    <h2>Actualizaciones Frecuentes</h2>
                    <div className="seccion">
                        <Button variant="warning" size="lg" href="/personajes">Ver Personajes</Button>
                        <Button variant="success" size="lg" href="/personajes/agregar">Agregar Personaje</Button>
                    </div>
                    <div className="seccion">
                        <Button variant="warning" size="lg" href="/armas">Ver Armas</Button>
                        <Button variant="success" size="lg" href="/armas/agregar">Agregar Arma</Button>
                    </div>



                </div>

                <div className="contenedorDeSecciones">
                    <h2>Actualizaciones poco frecuentes</h2>
                    <div className="seccion">
                        <Button variant="warning" size="lg" href="/elementos">Ver Elementos</Button>
                        <Button variant="success" size="lg" href="/elementos/agregar">Agregar Elemento</Button>
                    </div>
                    <div className="seccion">
                        <Button variant="warning" size="lg" href="/regiones">Ver Regiones</Button>
                        <Button variant="success" size="lg" href="/regiones/agregar">Agregar Region</Button>
                    </div>
                    <div className="seccion">
                        <Button variant="warning" size="lg" href="/armas/tiposdearma">Ver Tipos de Arma</Button>
                        <Button variant="success" size="lg" href="/armas/tiposdearma/agregar">Agregar Tipo de Arma</Button>
                    </div>
                </div>

            </main>
        </>
    );
}

export default Home;