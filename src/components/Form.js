import { useForm } from "../hooks/useForm";

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

const validationsForm = ( form ) => {
  let errors = {};
  let emailRegEx = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if(!form.firstName.trim()) {
    errors.firstName = 'First Name cannot be empty';
  };

  if(!form.lastName.trim()) {
    errors.lastName = 'Last Name cannot be empty';
  };

  if(!form.email.trim()) {
    errors.email = 'Email Address cannot be empty';
  } else if (!emailRegEx.test(form.email.trim())) {
    errors.email = 'Looks like this is not an email';
  };

  if(!form.password.trim()) {
    errors.password = 'Password cannot be empty';
  };

  return errors;
}

const Form = () => {
  const {
    form,
    errors,
    handleChange,
    handleSubmit
  } = useForm(initialForm, validationsForm);

  return(
    <>
      <form className='form' onSubmit={ handleSubmit }>
        <div className='form-content'>
          <div className="form-box">
            {
              errors.firstName &&
              <i className='error-icon'>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>
              </i>
            }
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              className={`form-input ${ errors.firstName && 'error-input'}`}
              onChange={ handleChange }
              value={ form.firstName }
            />
            {
              errors.firstName &&
              <p className='error-msg'> { errors.firstName }</p>
            }
          </div>

          <div className="form-box">
            {
              errors.lastName &&
              <i className='error-icon'>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>
              </i>
            }
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              className={`form-input ${ errors.lastName && 'error-input'}`}
              onChange={ handleChange }
              value={ form.lastName }
            />
            {
              errors.lastName &&
              <p className='error-msg'> { errors.lastName }</p>
            }
          </div>

          <div className="form-box">
            {
              errors.email &&
              <i className='error-icon'>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>
              </i>
            }
            <input
              type='text'
              name='email'
              placeholder='Email Address'
              className={`form-input ${ errors.email && 'error-input'}`}
              onChange={ handleChange }
              value={ form.email }
            />
            {
              errors.email &&
              <p className='error-msg'> { errors.email }</p>
            }
          </div>

          <div className="form-box">
            {
              errors.password &&
              <i className='error-icon'>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>
              </i>
            }
            <input
              type='text'
              name='password'
              placeholder='Password'
              className={`form-input ${ errors.password && 'error-input'}`}
              onChange={ handleChange }
              value={ form.password }
            />
            {
              errors.password &&
              <p className='error-msg'> { errors.password }</p>
            }
          </div>
        </div>
        
        <button className='form-btn' type='submit' >
          Claim your free trial 
        </button>

        <p className='form-disclaimer'>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
      </form>
    </>
  );
};

export default Form;