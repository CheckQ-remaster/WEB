import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { signup } from "../../../util/api/user";

const Register = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const onNameHandler = (e:any) => setName(e.currentTarget.value);
  const onIdHandler = (e:any) => setId(e.currentTarget.value);
  const onPasswordHandler = (e:any) => setPassword(e.currentTarget.value);
  const onConfirmPassdHandler = (e:any) => setConfirmPassword(e.currentTarget.value);

  const onSubmit = async(e:any) => {
    e.preventDefault();
    if(password !== confirmPassword) return alert("비밀번호가 다릅니다.");
    
    signup({
      name: name,
      id: id,
      password: password,
    }).then((res) => {
      navigate('/login')
    }).catch((error) => {
      console.log("faild",error);
    });
  };

  return (
    <>
      <h2>회원가입</h2>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={onNameHandler}
        />
        <input 
          type="text"
          name="id"
          value={id}
          placeholder="new-ID"
          onChange={onIdHandler}
        />
        <input 
          type="password"
          name="password"
          value={password}
          placeholder="new-PW"
          onChange={onPasswordHandler}
        />
        <input 
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="PW-check"
          onChange={onConfirmPassdHandler}
        />
        <button>Sign Up</button>
      </form>
    </>
  );
};

export default Register;