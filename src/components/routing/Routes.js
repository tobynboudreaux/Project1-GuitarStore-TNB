import React from "react";
import { Route, Switch } from "react-router-dom";
import Guitars from "../../components/guitars/Guitars";
import Login from "../../components/auth/Login";

export default class Routes extends React.Component {
    state = {
        guitars: []
    }

    componentDidMount() {
        fetch("http://3.139.235.28:8080/project0/product")
        .then(res => res.json())
        .then((json) => {
          this.setState({ guitars: json });
        }).catch(err => console.error(err));
    }

    postGuitars = (e) => {
        fetch(this.props.url + "product", {
            method: "POST",
            body: {

            }
        } )
    }

    render() {
        return (
            <section>
                <Switch>
                    <Route exact path="/guitars" render={(props => (
                        <Guitars {...props} guitars={this.state.guitars} />
                    ))} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </section>
        )
    }
};
