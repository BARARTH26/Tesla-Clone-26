import React,{useState} from 'react';
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close";
import {selectCars} from "../feature/car/carSlice";
import {useSelector} from "react-redux";

function Header() {

    const [burgerOpen,setBurgerOpen] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);
    return (
        <Container>
            <a>
                <img src="/images/logo.svg"/>
            </a>
            <Menu>
                {cars && cars.map((car,index)=>(
                    <p><a key={index} href="">{car}</a></p>
                ))}
                
                
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Accounts</a>
                <CustomMenuIcon onClick={()=> setBurgerOpen(true)}/>
            </RightMenu>
            <BurgerNav show={burgerOpen}>
                <CloseWrapper>
                    <CustomClose onClick={()=> setBurgerOpen(false)}/>
                </CloseWrapper>
                {cars && cars.map((car,index)=>(
                    <li key={index}><a href="#">{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">CyberTruck</a></li>
                <li><a href="#">Roadaster</a></li>
                
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    z-index : 10;
    min-height: 60px;
    position : fixed;
    display: flex;
    align-items : center;
    justify-content : space-between;
    padding : 0 20px;
    top : 0;
    left : 0;
    right : 0;
`
const Menu = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    flex : 1;

    a{
        font-weight:600;
        text-transform : uppercase;
        padding : 0 10px;
        flex-wrap : nowrap;
    }
    @media (max-width:768px){
        display : none;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items : center;
    a{
        font-weight:600;
        text-transform : uppercase;
        padding : 0 10px;
        flex-wrap : nowrap;
    }
`

const CustomMenuIcon = styled(MenuIcon)`
    cursor : pointer;
`
const BurgerNav = styled.div`
    position : fixed;
    top: 0;
    bottom : 0;
    right: 0;
    text-align : flex-start;
    background-color : #fff;
    width : 300px;
    z-index :100;
    list-style : none;
    padding : 20px;
    displaly : flex;
    flex-direction : column;
    transform : ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
    transition : transform 0.2s ease-in;
    li{
        padding 15px 0;
        border-bottom : 1px solid rgba(0,0,0,0.2);
        a{
            font-weight : 600;
        }

    }
    
`

const CustomClose = styled(CloseIcon)``

const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
    cursor : pointer;
`