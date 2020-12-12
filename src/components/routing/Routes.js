import React from "react";
import { Route, Switch } from "react-router-dom";
import NavbarComponent from '../layout/NavbarComponent';
import Landing from "../layout/Landing";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Guitars from "../guitars/Guitars";
import GuitarCard from "../guitars/GuitarCard";
import Profiles from "../profile/Profiles";
import AuthRoutes from "../routing/AuthRoutes";
const user = localStorage.getItem("user");

export default class Routes extends React.Component {    
    state = {
        guitars: []
    }

    componentDidMount() {
        fetch("http://3.139.235.28:8080/project0/product")
        .then(res => res.json())
        .then(json => this.setState({ guitars: json }))
    }

    showAuthRoutes = () => {
        console.log(user);
        <AuthRoutes user={user} />
    }

    getGuitarsByBrand = (brandID) => {
        fetch("http://3.139.235.28:8080/project0/product/brand/" + brandID)
        .then(res => res.json())
        .then(json => this.setState({ guitars: json }))
    }

    getGuitarsByDepartment = (departmentID) => {
        fetch("http://3.139.235.28:8080/project0/product/department/" + departmentID)
        .then(res => res.json())
        .then(json => this.setState({ guitars: json }))
    }

    render() {
        return (
            <section>
                <NavbarComponent user={this.props.user} setUser={this.props.setUser} getGuitarsByBrand={this.getGuitarsByBrand} getGuitarsByDepartment={this.getGuitarsByDepartment} getGuitars={this.getGuitars} /> 
                <Switch>
                    <Route exact path="/" render={(props => (
                    <Landing {...props} user={this.props.user} />
                    ))} />
                    <Route exact path="/guitars" render={(props => (
                        <Guitars {...props} guitars={this.state.guitars} getGuitars={this.getGuitars} />
                    ))} />
                    {this.state.guitars.map(guitar => (
                        <Route key={guitar.uniqueID} exact path={"/guitars/" + guitar.uniqueID} render={(props => (
                            <GuitarCard {...props} guitar={guitar} user={this.props.user} />
                        ))} />
                    ))}
                    <Route exact path="/login" render={(props => (
                        <Login {...props} user={this.props.user} setUser={this.props.setUser} />
                    ))} />
                    <Route exact path="/signup" render={(props => (
                        <SignUp {...props} user={this.props.user} setUser={this.props.setUser} />
                    ))} />
                    <Route exact path="/employees" component={Profiles} />
                </Switch>
            </section>
        )
    }
};
