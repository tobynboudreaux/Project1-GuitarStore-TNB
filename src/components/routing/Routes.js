import React from "react";
import { Route, Switch } from "react-router-dom";
import Guitars from "../../components/guitars/Guitars";

export default class Routes extends React.Component {
    state = {
        guitars: []
    }

    componentDidMount() {
        this.getGuitars();
    }

    getGuitars = () => {
        fetch(`${this.props.url}product`)
        .then(resp => resp.text())
        .then(json => console.log(json))
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
                <Route exact path="/guitars" component={Guitars} guitars={this.state.guitars} />
                </Switch>
            </section>
        )
    }
};
