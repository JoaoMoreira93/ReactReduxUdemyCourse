import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term:''};
        // Para definir o contexto do this desta função é necessário
        // fazer o binding no construtor
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render(){
        return(
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                    placeholder="Obter previsão de 5 dias da sua cidade favorita!"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather} , dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);