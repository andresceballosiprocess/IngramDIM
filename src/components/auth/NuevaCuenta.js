import React , {useState} from 'react';
import { Link} from 'react-router-dom';


const NuevaCuenta = () => {

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: '',
    });

    //Extraer usuario
    const {nombre,email,password,confirmar} = usuario;

const onChange = e => {
    guardarUsuario ({
        ...usuario,
        [e.target.name] : e.target.value
    })

}
    // cuando le usuario queire iniciar sesion

    const onSubmit = e => {
        e.preventDefault();

        //validar que no haya campos vacios

        // Password minimo de 6 caracteres

        // Los dos password deben ser iguales
        

        // pasarlo al action


    }
        return (  
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark">
                    <h1> Obtener cuenta </h1>

                    <form
                        onSubmit={onSubmit}
                    >
                        <div className="campo-form">
                            <label htmlFor="Nombre">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Tu nombre"
                                value={nombre}
                                onChange={onChange}
                             />   
                        </div>
                        <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Tu email"
                                value={email}
                                onChange={onChange}
                            />   
                        </div>

                        <div className="campo-form">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Tu password"
                                value={password}
                                onChange={onChange}
                             />   
                        </div>


                        <div className="campo-form">
                            <label htmlFor="confirmar">Confirmar Password</label>
                            <input
                                type="password"
                                id="confrimar"
                                name="confirmar"
                                placeholder="Repetir password"
                                value={confirmar}
                                onChange={onChange}
                             />   
                        </div>

                        <div className="campo-form">
                            <input type="submit" className="btn btn-primario btn-block"
                            value="Registrarme" />
                        </div>
                    </form>
                    <div>
                    <Link to={'/'} className="enlace-cuenta">
                        Volver a Iniciar sesion
                    </Link>
                    </div>
                    
                </div>
            </div>
        );
}
 
export default NuevaCuenta ;