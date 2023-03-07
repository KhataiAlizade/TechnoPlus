import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { getUsersInfo } from './services/api';



const MainLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
    return (
      <div>
      {isLogin ? <Daxilol /> : <RegistrationForm />}
      <button className='Signup' onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Create an Account' : 'Sign in'}
      </button>
    </div>
    )
}

const Daxilol = () => {
 
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [showError1, setShowError1] = useState(false);
  const [showError2, setShowError2] = useState(false);
  const [users, setUsers] = useState([]);
  const [enteredParameters, SetEnteredParameters] = useState({});
  const navigate=useNavigate()
  const showUp=(e)=>{
    let enteredEmail=enteredParameters.email;
    let enteredPassword=enteredParameters.password;
    let tempUser=users.find(row=>row.gmail==enteredEmail && row.sifre==enteredPassword) 
    console.log(users)
    console.log(enteredEmail)
    console.log(enteredPassword)
    if(typeof(tempUser)=="object"){

      window.localStorage.setItem("isLoged", JSON.stringify(true));
      
      window.localStorage.setItem("enteredUser",JSON.stringify(tempUser));
      console.log(user)
      navigate('/');
    }
  }
  useEffect(()=>{
    getUsers();
  },[])
  console.log(users);
  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value)
    if (e.target.value === '') {
      setShowError1(true)
    } else {
      setShowError1(false)
    }
  };
  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
    if (e.target.value === '') {
      setShowError2(true)
    } else {
      setShowError2(false)
    }
  };
  const handleButtonClick = (e) => {
    if (inputValue1 === '') {
      setShowError1(true);
    }
    if (inputValue2 === '') {
      setShowError2(true);
    }

  };
  const getUsers = async () => {
    let currentPeople = await getUsersInfo();

    setUsers(old_data => currentPeople);

  }
  const setEnteringUser = (e) => {
    let element = e.target;
    let { id, value } = element;
    SetEnteredParameters(old_data => ({
      ...old_data,
      [id]: value
    }))
  }
  function setLocalStorage() {
    window.localStorage.setItem("looooged", JSON.stringify(enteredParameters));
  }
  console.log(enteredParameters);

  const [user, setUser] = useState({ name: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    setUser({ name, password });
    if (name && password) {
      setIsLoggedIn(true);
    }
  };




  return (
    <div className='Giris'>
      <div className='Daxilol'>Sign in</div>
      
      <div className='Sign_in'>
        <div className='sgnpassword'><a href=''>Forgot your password?</a></div>
        <hr/>
        {isLoggedIn? (
            <h5 className='Welcomes'>Welcome, {user.name}</h5>
  ) : (
        <form onSubmit={handleLogin}>
            <div className='NameForm'>
            <label>Username or Email address </label>
            <span className='sp1'>*</span>
            <input className='textform' type="text" name="name" 
                onInput={(e) => setEnteringUser(e)}
                id={'email'}
             value={inputValue1}
             onChange={handleInputChange1} />
            </div>
           
            {showError1 && <span className='Alert1'>You need to enter an email or username.</span>}
            <div className='Forms2'>
            <label>Password </label>
            <span className='sp2'>*</span>
            <input className='passwordform' type='password' name="password"
             onInput={(e) => setEnteringUser(e)} 
            value={inputValue2}
            onChange={handleInputChange2}  />
            </div>
            {showError2 && <span className='Alert1'>You must enter your password.</span>}
            <div className='Checkbox'>
               
                <label>
                <input  type='checkbox'/>
                REMEMBER ME
                </label>
            </div>
        <hr/>

            <div className='Btns'>
                <button type='button' onClick={showUp} className='Signin'>Sign in</button>              
            </div>
        </form>
        )}
      </div>
    </div>
  )
}








function RegistrationForm() {

  const [value1,setValue1] = useState('')
  const [value2,setValue2] = useState('')
  const [value3,setValue3] = useState('')
  const [value4,setValue4] = useState('')
  const [value5,setValue5] = useState('')
  const [value6,setValue6] = useState(false)

  const [error1,setError1] = useState(false)
  const [error2,setError2] = useState(false)
  const [error3,setError3] = useState(false)
  const [error4,setError4] = useState(false)
  const [error5,setError5] = useState(false)
  const [error6,setError6] = useState(false)

  const inputChange1 =(e) => {
    setValue1(e.target.value)
    if(e.target.value === '') {
      setError1(true)
    }else {
      setError1(false)
    }
  }
  const inputChange2 =(e) => {
    setValue2(e.target.value)
    if(e.target.value === '') {
      setError2(true)
    }else {
      setError2(false)
    }
  }
  const inputChange3 =(e) => {
    setValue3(e.target.value)
    if(e.target.value === '') {
      setError3(true)
    }else {
      setError3(false)
    }
  }
  const inputChange4 =(e) => {
    setValue4(e.target.value)
    if(e.target.value === '') {
      setError4(true)
    }else {
      setError4(false)
    }
  }
  const inputChange5 =(e) => {
    setValue5(e.target.value)
    if(e.target.value === '') {
      setError5(true)
    }else {
      setError5(false)
    }
  }
  const inputChange6 =(e) => {
    setValue6(e.target.value)
    if(e.target.value === false) {
      setError6(true)
    }else {
      setError6(false)
    }
  }
  const HandleButton = (e) => {
    if (value1 ==='') {
      setError1(true)
    } 
    if (value2 ==='') {
      setError2(true)
    }
    if (value3==='') {
      setError3(true)
    }
    if (value4==='') {
      setError4(true)
    }
    if (value5==='') {
      setError5(true)
    }
    if (value6===false) {
      setError6(true)
    }
    localStorage.setItem(value1,true)
    localStorage.setItem(value2,true)
    localStorage.setItem(value3,true)
    localStorage.setItem(value4,true)
    localStorage.setItem(value5,true)
    localStorage.setItem(value6,true)

    e.preventDefault();
  }
  return (
    <div className='Giris'>
    <div className='Daxilol'>Sign in</div>

    <div className='Sign_up'>
      <div className='sgnpassword1'><a href=''>Already a member?</a></div>
      <hr/>
      <form>
          <div className='NameForm2'>
          <label>username </label>
          <span className='sps1'>*</span>
          <input value={value1} onChange={inputChange1} className='textform2' type='text'
          />
           <input  className='textform3' type='text'
          />
          <div className='NameFormSpan'>
            <span className='Firstn'>FirstName</span>
            <span className='Secondn'>LastName</span>
          </div>
          {error1 && <span className='Alerts1'>This field is required</span>}
          </div>
          <div  className='MailForm'>
          <label>Email address </label>
          <span className='sps2'>*</span>
          <input value={value2} onChange={inputChange2} className='textform' type='email'
          />    
          </div>
          {error2 && <span className='Alerts2'>This field is required</span>}
          <div  className='BirthdayForm'>
          <label>Date of birth</label>
          <span className='sps3'>*</span>
          <input value={value3} onChange={inputChange3} className='textform4' type='date'
          />    
          </div>    
          {error3 && <span className='Alerts3'>This field is required</span>}
          <div className='Forms2'>
          <label>Password </label>
          <span className='sps4'>*</span>
          <input value={value4} onChange={inputChange4} className='passwordform1' type='password'
           />
          </div>
          {error4 && <span className='Alerts4'>This field is required</span>}
           <div className='Forms3'>
          <label>Confirm your password</label>
          <input className='passwordform1' type='password'
           />
           </div>
           <div className='Forms4'>
          <label>Telephone number</label>
          <span className='sps5'>*</span>
          <select className='AreaCode'>
            <option>050</option>
            <option>051</option>
            <option>055</option>
            <option>070</option>
            <option>077</option>
            <option>099</option>
          </select>
           <span className='-sp'>-</span>
           <input value={value5} onChange={inputChange5} className='NumberForm2' type='tel'
           />
          {error5 && <span className='Alerts5'>This field is required</span>}

           </div>
         <div className='forms6'>
          <label>Gender</label>
          <span className='sps6'>*</span>
          <label>
            <input className='RadioLb' name="fav_gender" type='radio' value='Kişi'/>
          <span className='Gender'> Male</span>
          </label>
          <label>
            <input  className='Women' name="fav_gender" type='radio' value='Qadın'/>
           <span className='Gender'> Female</span>
          </label>
         </div>

      <hr/>             
          <div className='Checkbox1'>
              <label>
              <input value={value6} onChange={inputChange6}  type='checkbox'/>
              By registering, I accept the terms of use of the site
              </label>
          </div>
          {error6 && <span className='Alerts6'>You must accept our Terms and Conditions</span>}

      <hr/>


          <div className='Btns'>
              <button  onClick={HandleButton}  className='Signup2'>Register</button>
          </div>
         
      </form>
    </div>
  </div>
  );
}

export default MainLogin;
