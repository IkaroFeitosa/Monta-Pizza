import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
                <div class="bg-white rounded-lg shadow-lg card_sabor">
                    <img src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt="" class="rounded-t-lg" />
                    <div class="px-6">
                        <h2 class="font-bold mb-2 text-2xl text-purple-800">{this.props.sabor} </h2>
                        <p class="text-purple-700 mb-2">{this.props.desc}</p>
                    </div>

                </div>
        );
    }
}

export default Card;