import React, { Component } from 'react';

class Card extends Component {

    render() {
        const {isNew,valor,sabor} = this.props;
        return (
            <div className="wrapper  antialiased text-gray-900 card_sabor" onClick={this.clickPizza}>
                <div>

                    <img src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md" />

                    <div className="relative px-4 -mt-16  ">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            {isNew?(
                                <div className="flex items-baseline">
                                    <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                        Lançamento
                                    </span>
                               
                                </div>):("")}
                            

                            <h4 className=" text-xl font-semibold uppercase leading-tight ">{sabor}</h4>

                            <div className="mt-1">
                                {valor}
                            <span className="text-gray-600 text-sm">   / P, M e G</span>
                            </div>
                            <div className="mt-4">
                                <span className="text-teal-600 text-md font-semibold">4/5 Pronta entrega </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Card;