import React from 'react';
import { Route } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';


export default function HomeTemplate(props) {

    return (
        <>
            <Route exact path={props.path} render={(propsRoute) => {
                return (
                    <>
                        <Header {...propsRoute} />
                        <props.component {...propsRoute} />
                        <Footer {...propsRoute} />
                    </>
                )
            }} />
        </>
    )
}