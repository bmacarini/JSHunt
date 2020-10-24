import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

import './styles.css';

export default class Product extends Component {

    state = {
        product: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    }

    handleDelete = async (id) => {

        const response = await api.delete(`/products/${id}`);

        this.setState({ product: response.data });

        alert('Video removido.');

        this.props.history.push('/');
    };

    render() {

        const { product } = this.state;

        return (
            <>
                <div className="product-info" key={product._id}>

                    <button className="button-delete" onClick={() => this.handleDelete(product._id)}>
                        <FiX size="1.5em" />
                    </button>

                    <h1>{product.title}</h1>
                    <p>{product.description}</p>

                    <p>
                        URL: <a href={product.url}>{product.url}</a>
                    </p>

                    <Link to={`/products/${product._id}/edit`} className="btn-edit" >
                        Editar
                    </Link>

                </div>
                <div className="button-back">
                    <Link to="/">
                        Voltar
                    </Link>
                </div>
            </>
        );
    }
}