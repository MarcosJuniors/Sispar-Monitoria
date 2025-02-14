import styles from "./Login.module.scss";
import Logo from "../../assets/Tela login/logo-ws.png";
import { Link } from "react-router-dom"; 


function Login() {
    return (
        <main>
        <section className={styles.ConteinerNavio}>
            
        </section>

        <section className={styles.Formulario}>
            <img src={Logo} alt="Logo Wilson Sons" />
            <h1>Boas vindas ao Novo Portal SISPAR</h1>
            <p>Sistema de Emissão de Boletos e Parcelamento</p>

            <form action="">

                 <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="password" id="password" placeholder="Senha"/>
                    <a href="esqueci minha senha">Esqueci minha senha</a>
                    <div>
                        
                        <button className={styles.button1} >Entrar</button>
                        <button className={styles.button2} >Criar conta</button>
                    </div>
                    
            </form>
            
        </section>
        </main>
    );

}

export default Login;