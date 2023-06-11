import '../../style.css';
import Instagram from "../../assets/img/Instagram.png"


const PaginaContacto = () => {
    return (
        <>
            <h2 className="h2Servicios">Contacto</h2>
                <section className="backgroundFormContact">
                    <div className="formOnTop">
                        <section>
                            <div className="pContact">
                                <div>Telefono: <br /> <p>123-456-7890</p></div>
                                <div>E-mail: <br /> <p>info@mysite.com</p></div>
                                <div>
                                    <span>
                                        <p>Social Network:</p>
                                        <div>
                                        <a href="https://www.instagram.com/creandofilm/" target="_blank" rel="noreferrer"><img src={Instagram} alt="" className="logoInsta" /></a>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </section>
                        <div>
                            <form action="" method="post">
                                <fieldset className="fieldsetContact">
                                    <legend className="legendContact">Information</legend>
                                    <label htmlFor="name" className="labelContact">
                                        <span>Nombre:</span>
                                        <input type="text" id="name" placeholder="Inserte Nombre" required />
                                    </label>
                                    <label htmlFor="last-name" className="labelContact">
                                        <span>Apellido:</span>
                                        <input type="text" id="last-name" placeholder="Inserte Apellido" required />
                                    </label>
                                    <label htmlFor="e-mail" className="labelContact">
                                        <span>E-mail:</span>
                                        <input type="email" id="e-mail" placeholder="Inserte E-mail" required />
                                    </label>
                                    <label htmlFor="message" className="labelContact">
                                        <span>Mensaje:</span>
                                        <textarea id="message" placeholder="Escriba su mensaje..." required />
                                    </label>
                                    <div className="inputContact">
                                        <input type="submit" value="   Submit   " />
                                        <input type="reset" value="   Reset   " />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </section>
        </>
    )
}


export { PaginaContacto }