import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-device-width: 490px) {
        flex-direction: column;
    }
`;

export const WrapperSearch = styled.div`
    display: flex;

    @media (max-device-width: 490px) {
        width: 100%;
    }
`;

export const InputSearch = styled.input`
    background: transparent;
    height: 37px;
    border: 1px solid #ddd;
    border-radius: 5px 0 0 5px;
    padding: 10px;

    @media (max-device-width: 490px) {
        flex: 1;
    }
`;

export const SpanSearch = styled.span`
    background: transparent;
    border: none;
    margin-left: 20px;

    @media (max-device-width: 490px) {
        margin-left: 0;
        display: flex;
        width: 100%;

    }
`;

export const BtnSearch = styled.button`
    height: 37px;
    padding: 10px;
    border-radius: 0 5px 5px 0;
    border: 0;
    background: #da552f;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.2s;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }
`;

export const LinkResult = styled(Link)`
    flex: 1;
`;  