import React, { Component } from 'react';

class Montar extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators(pizzaActions, dispatch);
const mapStateToProps = state => ({
    pizza: state.pizza
});
export default connect(mapStateToProps, mapDispatchToProps)(Montar);
export default Montar;