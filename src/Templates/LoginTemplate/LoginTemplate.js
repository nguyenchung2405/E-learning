import React from 'react';
import { Route } from 'react-router-dom';
import Header from "../../Components/Header/Header.js";

export default function LoginTemplate(props) {
    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return (
                <>
                    <Header />
                    <props.component {...propsRoute} />
                </>
            )
        }} />
    )
}
