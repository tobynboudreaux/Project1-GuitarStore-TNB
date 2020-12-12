import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Profiles from "../profile/Profiles";
import UserInformationCard from "../profile/UserInformationCard";

const AuthRoutes = (props) => {
    return (
        <section>
            <Switch>
                <Route exact path="/employees" component={Profiles} />
            </Switch>
        </section>
    )
}

export default AuthRoutes
