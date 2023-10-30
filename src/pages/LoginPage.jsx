import './styles/loginPage.css'
import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth";
import { Link } from 'react-router-dom';


//Login 
//perez@gmail.com
//123456


const LoginPage = () => {

  const { register, reset, handleSubmit } = useForm();
  const { loginUser } = useAuth();

  const submit = (data) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login"
    loginUser(url, data)
    reset({
      email: "",
      password: ""
    })
  }

  return (
    <section className="login-form">
      <h2 className="login-form__title">Welcome! Enter your email and password to continue</h2>
      <div className="login-form__test-data">
        <h4 className="login-form__list-title">Test Data</h4>
        <ul className="login-form__list">
          <li className="login-form__list-item"><i class='bx bx-envelope'></i> johndoe@mail.com</li>
          <li className="login-form__list-item"><i class='bx bx-lock'></i> 123456</li>
        </ul>
      </div>

      <form className="login-form__form" onSubmit={handleSubmit(submit)}>
        <div className="login-form__field">
          <label className="login-form__label" htmlFor="email">Email</label>
          <input className="login-form__input" {...register("email")} id="email" type="text" />
        </div>
        <div className="login-form__field">
          <label className="login-form__label" htmlFor="password">Password</label>
          <input className="login-form__input" {...register("password")} id="password" type="password" />
        </div>
        <button className="login-form__button">Log In</button>
      </form>
      <p className="login-form__signup-link">Don't have an account ?<Link to='/register' className="sign-up"> Sign up </Link></p>

    </section>
  )
}

export default LoginPage