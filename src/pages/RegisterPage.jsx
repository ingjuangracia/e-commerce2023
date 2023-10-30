import './styles/registerPage.css'
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";


const RegisterPage = () => {

  const { register, handleSubmit, reset } = useForm();
  const { createUser } = useAuth();

  const submit = (data) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users"
    createUser(url, data)
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: ""
    })

  }


  return (
    <section className="form">
      <h2 className="form__title">Sign Up</h2>
      <form className="form__form" onSubmit={handleSubmit(submit)}>
        <div className="form__field">
          <label className="form__label" htmlFor="firstName">First Name</label>
          <input className="form__input" {...register('firstName')} type="text" id="firstName" />
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="lastName">Last Name</label>
          <input className="form__input" {...register('lastName')} type="text" id="lastName" />
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="email">Email</label>
          <input className="form__input" {...register('email')} type="email" id="email" />
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="password">Password</label>
          <input className="form__input" {...register('password')} type="password" id="password" />
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="phone">Phone (10 characters)</label>
          <input className="form__input" {...register('phone')} type="text" id="phone" />
        </div>
        <button className="form__button">Submit</button>
      </form>
    </section>
  )
}

export default RegisterPage