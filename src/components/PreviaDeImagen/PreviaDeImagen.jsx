import './PreviaDeImagen.css';

export default function PreviaDeImagen({ imagenURL }) {
    return (<>
        {imagenURL && (
            <img src={imagenURL} alt="Vista previa de la imagen" className="img-preview"
            />
        )
        }</>

    );
}