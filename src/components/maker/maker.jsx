import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './maker.module.css';
import Footer from '../footer/footer'
import Header from '../header/header'


const Maker = ({ authService }) => {

    const history = useHistory(); 

    const onLogout = () => {
        authService.logout();
    }

 /*   useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history.push('/');
            }
        })
    });
*/
    return ( 
        <section className={styles.maker}>
            <Header onLogout = {onLogout} />
            <Footer />
        </section>
        )
};

export default Maker;