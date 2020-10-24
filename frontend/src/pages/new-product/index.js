import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default class NewProduct extends Component {

    state = {
        title: "",
        description: "",
        url: "",
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            description: this.state.description,
            url: this.state.url
        };

        try {
            const response = await api.post('/products', data);

            console.log(response);

            this.props.history.push('/');

        } catch (err) {
            console.warn('Erro no cadastro!');
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h1>Cadastrar nova linguagem</h1>
                <div className="form-inputs">
                    <input 
                        type="text" 
                        placeholder="Nome"
                        value={this.state.title}
                        onChange={e => this.setState({title: e.target.value})}
                    />
                    <textarea 
                        type="text" 
                        placeholder="Descrição"
                        value={this.state.description}
                        onChange={e => this.setState({description: e.target.value})}
                    />
                    <input 
                        type="text" 
                        placeholder="URL"
                        value={this.state.url}
                        onChange={e => this.setState({url: e.target.value})}
                    />
                </div>
                <div className="buttons-form">
                    <Link to="/">Voltar</Link>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        )
    }
}