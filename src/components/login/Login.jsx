import styles from "./Login.module.scss";
import Logo from "../../assets/Tela login/logo-ws.png";


function Login() {
    return (
        <main>
        <section className={styles.ConteinerNavio}>
            <p>reservado para o navio</p>
        </section>

        <section className={styles.Formulario}>
            <img src={Logo} alt="Logo Wilson Sons" />
            <h1>Login</h1>
            <p></p>

            <form action="">

                 <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="password" id="password" placeholder="Senha"/>
                    <a href="esqueci minha senha"></a>
                    <div>
                        <button className={styles.button1} >Entrar</button>
                        <button className={styles.button2} >Cadastre-se</button>
                    </div>
                    
            </form>
            
        </section>
        </main>
    );

}

export default Login;