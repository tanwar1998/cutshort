import styled from 'styled-components';

export const ButtonContainer = styled.div`
    width: 100%;
    display: inline-block;
    float: none;
    position: relative;

    button{
        border: 0;
        color: #1a1a1a;
        display: block;
        height: 45px;
        line-height: 24px;
        margin-bottom: 15px;
        padding: 5px 15px;
        position: relative;
        width: 100%;
        border-radius: 5px;
        box-sizing: border-box;
        cursor: pointer;
        outline: 0;
        color: #fff;
        transition: all ease-in 0.3s;
        background: #664de5;

        &:hover{
            background: #533ebf;
        }
    }


`;