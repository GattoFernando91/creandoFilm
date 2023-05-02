export const ItemListContainer = (props) => {
    return (
        <>
            <div className="contenedorServicios">
                <div>
                    <h2>{props.greeting}</h2>
                    <h3>Campaña con Modelos</h3>
                    <ul className="">
                        <li>Paquete 1</li>
                        <li>Paquete 2</li>
                        <li>Paquete 3</li>
                        <li>Paquete 4</li>
                    </ul>
                </div>
                <div>
                    <h3>Reels</h3>
                    <ul className="">
                        <li>Paquete 1</li>
                        <li>Paquete 2</li>
                        <li>Paquete 3</li>
                    </ul>
                </div>
                <div>
                    <h3>Foto Producto</h3>
                    <ul className="">
                        <li>Paquete 1</li>
                        <li>Paquete 2</li>
                        <li>Paquete 3</li>
                    </ul>
                </div>
            </div>
        </>
    )
};