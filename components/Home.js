import React from 'react';
import styled from "styled-components";
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section Title="Model S" 
                image="model-s.jpg"
                description = "Online Order for Touchless Delivery"
                leftButtonText = "Custom Order"
                rightButtonText = "Exsiting Inventory" />
            <Section 
                Title="Model Y" 
                image="model-y.jpg"
                description = "Online Order for Touchless Delivery"
                leftButtonText = "Custom Order"
                rightButtonText = "Exsiting Inventory" />
            <Section 
                Title="Model 3" 
                image="model-3.jpg"
                description = "Online Order for Touchless Delivery"
                leftButtonText = "Custom Order"
                rightButtonText = "Exsiting Inventory"
            />
            <Section 
                Title="Model x" 
                image="model-x.jpg"
                description = "Online Order for Touchless Delivery"
                leftButtonText = "Custom Order"
                rightButtonText = "Exsiting Inventory"
            />
            <Section 
                Title="Lowest Cost Solar Panels in America" 
                image="solar-panel.jpg"
                description = "Money-back guarantee"
                leftButtonText = "Order Now"
                rightButtonText = "Learn more"
            />
            <Section
                Title="Soalr for New Roofs" 
                image="solar-roof.jpg"
                description = "Solar Roof Costs Less than a New Roof Plus Solar panels"
                leftButtonText = "Order Now"
                rightButtonText = "Learn more"
            />
            <Section
                Title="Accessories" 
                image="accessories.jpg"
                leftButtonText = "Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;

`
