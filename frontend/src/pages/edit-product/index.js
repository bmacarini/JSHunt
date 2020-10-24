import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class EditProduct extends Component {

    state = {
        title: '',
        description: '',
        url: ''
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState(response.data);
    };

    handleUpdate = async (e) => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            description: this.state.description,
            url: this.state.url
        };

        try {
            const { id } = this.props.match.params;

            const response = await api.put(`/products/${id}`, data);

            console.log(response);

            this.props.history.push(`/products/${id}`);

        } catch (err) {
            alert('Erro ao atualizar!');
        }
    };

    render() {
        const { title, description, url } = this.state;

        return (
            <form className="update-form" onSubmit={this.handleUpdate}>
                <h1>Editar</h1>
                <div className="update-inputs">
                    <input
                        type="text"
                        placeholder="Nome"
                        value={title}
                        onChange={e => this.setState({ title: e.target.value })}
                    />
                    <textarea
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={e => this.setState({ description: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="URL"
                        value={url}
                        onChange={e => this.setState({ url: e.target.value })}
                    />
                </div>
                <div className="buttons-update-form">
                    <Link to="/">Voltar</Link>
                    <button type="submit">Editar</button>
                </div>
            </form>
        )
    }
}