import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import { Wrapper, InputSearch, BtnSearch, SpanSearch } from './styles.js';

export default class Search extends Component {

    state = {
        search: "",
        allProducts: [],
        result: [],
        page: 1
    };

    async componentDidMount() {
        this.getAllProduct();
    };

    handleInputSearch = (e) => {

        const search = e.target.value;

        console.log(e.target.value);

        if (search === "") {
            console.log('Resultado apagado')
            this.setState({ result: [] })
        }

        this.setState({ search })

    };

    getAllProduct = async (page = 1) => {

        const { allProducts } = this.state;
        await api.get(`/products?page=${page}`)
            .then(
                res => {
                    if (res.data.pages >= page) {
                        console.log(allProducts.concat(res.data.docs))
                        this.setState({ allProducts: allProducts.concat(res.data.docs) })
                        return this.getAllProduct(page + 1)
                    }
                }
            )
            .catch(err => {
                console.log(err);
                throw err;
            })

    };

    filterProducts = (e) => {
        e.preventDefault();

        const { search, allProducts } = this.state;

        let productSelected = allProducts.filter(product =>

            product.title.toLowerCase()
                .includes(search.toLowerCase())

        );

        if (productSelected.length === 0) {
            return alert('Linguagem não encontrada.')
        } else if (search === '' || search.length < 2) {
            return
        } else {
            this.setState({ result: productSelected })
            console.log(productSelected)
        }

    };


    render() {

        const { search, result } = this.state;

        return (
            <>
                <Wrapper onSubmit={this.filterProducts}>
                    <InputSearch type="search" value={search} placeholder="Pesquisar" onChange={this.handleInputSearch} />
                    <BtnSearch type="submit">
                        <FiSearch size="1.2em" color="#ddd" />
                    </BtnSearch>
                    {result.map(filteredProduct => (
                        <SpanSearch>
                            <Link to={`/products/${filteredProduct._id}`} key={filteredProduct._id}>{filteredProduct.title}</Link>
                        </SpanSearch>
                    ))}
                </Wrapper>
            </>
        )

    };
}
