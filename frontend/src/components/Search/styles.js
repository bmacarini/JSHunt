import styled from 'styled-components'

export const Wrapper = styled.form`
    display: flex;
    align-items: center;
`;

export const InputSearch = styled.input`
    background: transparent;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 5px 0 0 5px;
    padding: 10px;
`;

export const SpanSearch = styled.span`
    background: transparent;
    border: none;
    margin-left: 20px;
`;

export const BtnSearch = styled.button`
    height: 40px;
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