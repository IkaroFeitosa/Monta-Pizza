import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pizzaActions from '../actions'

import Card from '../components/Card'

class Tamanho extends Component {
    render() {
        return (
            <div className="container p-5 form_montar mx-auto bg-gray-50 shadow-lg max-w-screen-lg prose lg:prose-lg">
                
                <div className="flex flex-row bs-wizard justify-center" >

                    <div className="w-1/4 bs-wizard-step  complete ">
                        <div className="text-center bs-wizard-stepnum">Primeiro</div>
                        <div className="progress"><div className="progress-bar"></div></div>
                        <a href="#" className="bs-wizard-dot"></a>
                        <div className="bs-wizard-info text-center">Selecione o(s) sabor(es)</div>
                    </div>

                    <div className="w-1/4 bs-wizard-step  active">
                        <div className="text-center bs-wizard-stepnum">Segundo</div>
                        <div className="progress"><div className="progress-bar"></div></div>
                        <a href="#" className="bs-wizard-dot"></a>
                        <div className="bs-wizard-info text-center">Selecione o tamanho</div>
                    </div>

                    <div className="w-1/4 bs-wizard-step ">
                        <div className="text-center bs-wizard-stepnum">Pagamento</div>
                        <div className="progress"><div className="progress-bar"></div></div>
                        <a href="#" className="bs-wizard-dot"></a>
                        <div className="bs-wizard-info text-center">Como deseja pagar sua pizza ?</div>
                    </div>

                    <div className="w-1/4 bs-wizard-step ">
                        <div className="text-center bs-wizard-stepnum">Bom apetite</div>
                        <div className="progress"><div className="progress-bar"></div></div>
                        <a href="#" className="bs-wizard-dot"></a>
                        <div className="bs-wizard-info text-center"> :) </div>
                    </div>
                </div>
                <hr />
                <div className="cards grid grid-cols-3 gap-8">
                    <Card sabor="Pequena" valor="R$ 20,00" isNew={false}/>
                    <Card sabor="M??dia" valor="R$ 20,00" isNew={false}/>
                    <Card sabor="Grande" valor="R$ 20,00" isNew={false}/>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators(pizzaActions, dispatch);
const mapStateToProps = state => ({
    pizza: state.pizza
});
export default connect(mapStateToProps, mapDispatchToProps)(Tamanho);