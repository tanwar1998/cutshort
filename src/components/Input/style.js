import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    display: inline-block;
    margin-bottom: 5px;
    float: none;
    position: relative;

    .input-label{
        font-size: 14px;
        text-align: left;
        box-sizing: border-box;
        margin-bottom: 7px;
        font-weight: 500;
        color: #1e1e1e;
    }
    .input-container-main{
        position: relative;
    }
    .prepend-container-main{
        position: absolute;
        left: 0;
        background: #f5f5f5;
        border: 1px solid #eaeaea;
        width: 115px;
        z-index: 1;
        font-size: 12px;
        color: #a59e9e;
        display: block;
        height: 45px;
        line-height: 32px;
        padding: 5px 15px;
        box-sizing: border-box;
    }

    input{
        background: #ffffff;
        border: 1px solid #e5e5e5;
        color: #1a1a1a;
        display: block;
        height: 45px;
        line-height: 24px;
        margin-bottom: 15px;
        padding: 5px 15px;
        position: relative;
        width: 100%;
        border-radius: 2px;
        box-sizing: border-box;
        outline: 0;
    }


`;