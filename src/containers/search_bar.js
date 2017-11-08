import React,{Component} from 'react';

export default class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
        // Para definir o contexto do this desta função é necessário
        // fazer o binding no construtor
        this.onInputChange = this.onInputChange.bind(this);
        //  this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
    }

    render(){
        return(
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                    placeholder="Obter previsão semanal da sua cidade favorita!"
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