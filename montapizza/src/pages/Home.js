import React, { Component } from 'react';
import { GiFullPizza, GiPizzaSlice } from 'react-icons/gi'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pizzaActions from '../actions'

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Escolha como quer sua Pizza!</h1>
                </header>
                <div className="container  max-w-lg shadow-lg p-10 flex flex-row">
                    <div className="flex-grow flex justify-center flex-col card-option shadow-lg mx-2 p-5 ">
                        <div className="flex justify-center">
                            <GiFullPizza color="#ddd" size={100} />
                        </div>
                        <div className="description_menu mt-2 text-gray-400 text-lg .tracking-wider font-semibold">Recomendações</div>
                    </div>

                    <div className="flex-grow flex justify-center flex-col card-option shadow-lg mx-2  p-5">
                        <div className="flex justify-center ">
                            <GiPizzaSlice color="#ddd" size={100} />
                        </div>
                        <div className="description_menu mt-2 text-gray-400 text-lg .tracking-wider font-semibold">Montar</div>
                    </div>


                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(pizzaActions, dispatch);
const mapStateToProps = state => ({
    pizza: state.pizza
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);