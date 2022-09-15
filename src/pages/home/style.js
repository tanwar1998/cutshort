import styled from 'styled-components';

export const HomeContainer = styled.div`
    text-align: center;
    padding: 0 16px;
    box-sizing: border-box;

    .nav-bar-container{
        padding: 80px 0 60px;
        text-align: center;

        .nav-bar-heading{
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 25px;

            img{
                width: 25px;
                margin: 0 4px -7px;
            }
        }
        .nav-icon-container{
            max-width: 290px;
            float: none;
            display: inline-block;
            position: relative;

            .basic-line{
                width: 100%;
                position: absolute;
                float: left;
                top: 13px;
                height: 1px;
                background-color: #e3e3e3;
            }
            .active-line{
                width: 90%;
                position: absolute;
                float: left;
                height: 1px;
                content: '';
                position: absolute;
                height: 1px;
                z-index: 1;
                top: 13px;
                left: 0;
                background-color: #664de5;
                transform-origin: bottom right;
                transition: all 0.3s ease-out;
            }
            .nav-icon-main{
                position: absolute;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                z-index: 1;
                width: calc(100% + 15px);
            
                
                span{
                    border: 1px solid #aaa;
                    border-radius: 50%;
                    width: 26px;
                    height: 26px;
                    text-align: center;
                    -webkit-transition: all 0.3s ease-out;
                    transition: all 0.3s ease-out;
                    font-size: 11px;
                    line-height: 26px;
                    cursor: pointer;
                    color: #504f4f;
                    background: #fff;
                }
                .selected-span{
                    color: #fff;
                    background: #664de5;
                    border: 1px solid #664de5;
                }
            }
        }
    }
    h2{
        font-size: 25px;
        margin-bottom: -12px;
        font-weight: 600;
        color: #181818;
    }
    h4{
        font-size: 14px;
        color: #767474;
        font-weight: initial;
        margin-bottom: 50px;    
    }
    .container-main{
        max-width: 340px;
        display: inline-block;
        float: none;
    }
    .planning-container-main{
        .planning-block-container{
            display: grid;
            grid-template-columns: auto auto;
            grid-gap: 30px;
            font-size: 13px;
            line-height: 17px;
            text-align: left;
            box-sizing: border-box;
            margin: 0 0 25px;

            .planning-block{
                border: 1px solid #e7e7e7;
                padding: 10px 17px 20px;
                border-radius: 10px;
                cursor: pointer;
                box-sizing: border-box;
                transition: all ease-in 0.3s;
            }
            .icon{
                font-size: 24px;
                color: #364259;
                margin: 5px 0 8px;
            }
            .planing-heading{
                font-weight: 555;
                color: #252e41;
            }
            .sub-heading{
                color: #5c6984;
                margin-top: 5px;
            }
            .selected-planning-block{
                border: 1px solid #664de5;
                .icon{
                    color: #664de5;
                }
            }
        }
        
    }
    .launch-container-main{
        .launch-icon-container{
            text-align: center;

            .check-container{
                width: 50px;
                height: 50px;
                color: #fff;
                background: #664de5;
                border-radius: 50%;
                text-align: center;
                line-height: 60px;
                display: inline-block;
                margin: 30px 0;

            }
        }
    }


`;

export const WelcomeContainer = styled.div`

`;