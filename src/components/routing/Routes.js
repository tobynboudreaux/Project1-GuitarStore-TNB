import React from "react";
import { Route, Switch } from "react-router-dom";
import NavbarComponent from '../layout/NavbarComponent';
import Landing from "../layout/Landing";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Products from "../product/Products";
import ProductCard from "../product/ProductCard";
import AuthRoutes from "../routing/AuthRoutes";
import API from "../util/API";
const user = localStorage.getItem("user");

export default class Routes extends React.Component {    
    state = {
        products: []
    }

    componentDidMount() {
        API.getProduct()
        .then(res => res.data)
        .then(data => this.setState({ products: data }))
    }

    render() {
        return (
            <section>
                <NavbarComponent 
                user={this.props.user} 
                setUser={this.props.setUser} 
                getProductsByBrand={this.getProductsByBrand} 
                getProductsByDepartment={this.getProductsByDepartment} 
                /> 
                <Switch>
                    <Route exact path="/" render={(props => (
                    <Landing {...props} user={this.props.user} />
                    ))} />
                    <Route exact path="/products" render={(props => (
                        <Products {...props} products={this.state.products} user={this.props.user} />
                    ))} />
                    {this.state.products.map(product => (
                        <Route key={product.uniqueID} exact path={"/products/" + product.id} render={(props => (
                            <ProductCard {...props} key={product.id} product={product} user={this.props.user} />
                        ))} />
                    ))}
                    <Route exact path="/login" render={(props => (
                        <Login {...props} user={this.props.user} setUser={this.props.setUser} />
                    ))} />
                    <Route exact path="/signup" render={(props => (
                        <SignUp {...props} user={this.props.user} setUser={this.props.setUser} />
                    ))} />
                    { user && user.charAt(user.length - 3) == 1 ? (
                        <AuthRoutes />
                    ): null}
                </Switch>
            </section>
        )
    }
};
