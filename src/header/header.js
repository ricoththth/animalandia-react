import './header.css';
import Logo from './logo.jpg'
function header(){
    return(
        <header>
            <div class = "logo" >
                <img src = {Logo}></img>
            </div>
            <div>
                <button class = "blue-btn"><i></i>Ingresar</button>
                <button class = "purple-btn"><i></i>Registrar</button>
            </div>
        </header>

    )

}