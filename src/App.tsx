import React from "react";
import styled from "styled-components";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Dropdown } from "./components/Dropdown";
import { RadioButton } from "./components/RadioButton";
import { HeroImage } from "./components/HeroImage";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  background-color: #f9fafb;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-family: sans-serif;
  color: #333;
`;

function App() {
  return (
    <Container>
      <Title>Demo StoryBook UI Component Library</Title>
      <h3>Buttons</h3>
      <Button label="Primary Button" />
      <Button label="Disabled Button" disabled />

      <Dropdown
        options={["Option 1", "Option 2", "Option 3"]}
        label="Choose an option"
      />

      <RadioButton label="Option A" name="group1" />
      <RadioButton label="Option B" name="group1" />

      <Card
        title="Sample Card"
        image="https://via.placeholder.com/300"
        description="This is a reusable card component."
      />

      


    </Container>

  );
}

export default App;
