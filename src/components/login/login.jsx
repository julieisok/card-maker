import React from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer'
import Header from '../header/header'
import styles from './login.module.css';

const Login = ({ authService }) => {

  const history = useHistory(); 
  const goToMaker = userId => {
      history.push({
          pathname : '/maker',
          state : { id : userId }
      });
  }

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then(data => goToMaker(data.user.uid))
      .catch((error) => {
        console.log(error)
      })
  }

/*
  useEffect(() => {
    authService.onAuthChange(user => {
        user && goToMaker(user.uid);
    });
  });
*/
  return (
    <section>
      <Header />
      <section>
        <h1 className={styles.login}>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}> 
            <button className={styles.button} onClick={onLogin}>Google</button>
          </li>
          <li className={styles.item}> 
            <button className={styles.button} onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  )
}

export default Login