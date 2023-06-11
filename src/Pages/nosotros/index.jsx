import '../../style.css';
import MatiCande from '../../assets/img/MatiCande.png'

const PaginaNosotros = () => {
        return (
        <>
                <h2 className="h2Servicios">Nosotros</h2>
                <div className="mainAboutMe">
                        <article>
                                <figure>
                                        <img src={ MatiCande } alt="" />
                                </figure>
                                <div>
                                        <h2 className="h2AboutMe">Hola!</h2>
                                        <div>
                                                <p className="pAboutMe">Como estas?</p>
                                        </div>
                                        <div>
                                                <p className="pAboutMe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim quasi, vitae rem consectetur repellendus veritatis velit laboriosam, illum expedita provident aliquam iste placeat. Iure unde architecto ea neque sapiente.</p>
                                        </div>
                                        <div>
                                                <p className="pAboutMe">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                        <div>
                                                <p className="pAboutMe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa nostrum, sapiente eveniet perferendis nam facilis, quaerat non omnis rerum officiis fuga est quas explicabo atque, consequatur repellendus rem magnam.</p>
                                        </div>
                                        <div>
                                                <p className="pAboutMe">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ea atque reiciendis sint consequatur perspiciatis temporibus hic et, modi numquam laudantium.</p>
                                        </div>
                                </div>
                        </article>
                </div>
        </>
        );
}    

export { PaginaNosotros }