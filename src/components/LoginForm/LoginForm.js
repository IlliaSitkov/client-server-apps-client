import React, { useEffect, useState } from 'react';
import * as loginService from '../../services/loginService';
import { LOCAL_STORAGE_TOKEN } from '../../shared/constants';
import { checkLoginFormIsCorrect, onChangeHandler } from '../../shared/utils';
import { Input } from '../../common/Input/Input';
import './LoginForm.css';
import MD5 from 'crypto-js/md5';

export const LoginForm = ({ loggedInSetter }) => {
  const [formIsCorrect, setFormIsCorrect] = useState(false);
  const [login, setLogin] = useState("");
  const [passwrd, setPasswrd] = useState("");

  useEffect(() => {
    checkLoginFormIsCorrect(setFormIsCorrect, login, passwrd);
  }, [login, passwrd]);

  const performLogIn = async () => {
    let res = await loginService.logIn({
      username: login,
      password: MD5(passwrd).toString().toUpperCase(),
    });
    if (res.status === 200) {
      let token = res.headers.get("Jwtoken");
      console.log(token);
      localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
      console.log('Logged in: redirect');
      loggedInSetter(true);
    } else if(res.status === 403){
      alert("Wrong credentials!");
    } else {
      alert("Server not responding");
    }
  };

  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-md-4"></div>
      <div className="col-md-4 data-col">
        <div className="row data-row">
          <Input
            id="login"
            type="text"
            value={login}
            placeholder="Enter login"
            label="Login"
            required={true}
            onChange={onChangeHandler(setLogin)}
          />
        </div>
        <div className="row data-row">
          <Input
            id="passwrd"
            type="password"
            value={passwrd}
            placeholder="Enter password"
            label="Password"
            required={true}
            onChange={onChangeHandler(setPasswrd)}
          />
        </div>
        <div className="row btn-row">
          <div className="col-md-12 text-center">
            <button
              onClick={performLogIn}
              disabled={!formIsCorrect}
              className="btn btn-md btn-primary submit-btn"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};
