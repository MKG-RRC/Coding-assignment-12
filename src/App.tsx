import React from "react";
import styledComponent from "styled-components";

import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Dropdown } from "./components/Dropdown";
import { HeroImage } from "./components/HeroImage";
import { Img } from "./components/Img";
import { Label } from "./components/Label";
import { RadioButton } from "./components/RadioButton";
import { TableFooter } from "./components/Table/TableFooter/TableCell/TableFooter";
import { TableHeader } from "./components/Table/TableHeader/TableCell/TableHeader";
import { TableRow } from "./components/Table/TableRow/TableCell/TableRow";
import { Text } from "./components/Text/TableCell/Text";

const Container = styledComponent.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 40px;
  background-color: #f9fafb;
  min-height: 100vh;
`;

const Title = styledComponent.h1`
  font-family: sans-serif;
  color: #333;
`;

const Section = styledComponent.div`
  width: 100%;
  max-width: 800px;
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styledComponent.h2`
  color: #555;
  margin-bottom: 16px;
`;

function App() {
  return (
    <Container>
      <Title>Demo StoryBook UI Component Library</Title>

      {/* HeroImage */}
      <Section>
        <SectionTitle>HeroImage</SectionTitle>
        <HeroImage
          imageUrl="https://via.placeholder.com/600x200"
          title="Welcome to UI Garden System Build Checks"
        />
      </Section>

      {/* Buttons */}
      <Section>
        <SectionTitle>Buttons</SectionTitle>
        <Button label="Primary Button" />
        <Button label="Disabled Button" disabled />
      </Section>

      {/* Card */}
      <Section>
        <SectionTitle>Card</SectionTitle>
        <Card
          title="Component Card"
          content="This is a sample card component for demo purposes."
        />
      </Section>

      {/* Dropdown */}
      <Section>
        <SectionTitle>Dropdown</SectionTitle>
        <Dropdown
          options={["Option 1", "Option 2", "Option 3"]}
          label="Choose an option"
        />
      </Section>

      {/* Radio Buttons */}
      <Section>
        <SectionTitle>Radio Buttons</SectionTitle>
        <RadioButton label="Option A" name="group1" value="A" />
        <RadioButton label="Option B" name="group1" value="B" />
      </Section>

      {/* Label */}
      <Section>
        <SectionTitle>Label</SectionTitle>
        <Label text="This is a Label Component" />
      </Section>

      {/* Image */}
      <Section>
        <SectionTitle>Image</SectionTitle>
        <Img src="https://via.placeholder.com/150" alt="Placeholder" />
      </Section>

      {/* Table */}
      {/* Table */}
      <Section>
        <SectionTitle>Table</SectionTitle>
        <table>
          <thead>
            <TableHeader headers={["Name", "Role", "Status"]} />
          </thead>
          <tbody>
            <TableRow cells={["John Doe", "Developer", "Active"]} />
            <TableRow cells={["Jane Smith", "Designer", "Inactive"]} />
          </tbody>
          <tfoot>
            <TableFooter cells={["Total Users", 25]} bold />
          </tfoot>
        </table>
      </Section>

      {/* Text */}
      <Section>
        <SectionTitle>Text</SectionTitle>
        <Text content="Small text" size="small" color="#666" />
        <Text content="Medium text (default)" />
        <Text
          content="Large bold text"
          size="large"
          weight="bold"
          color="#000"
        />
        <Text content="Disabled text" disabled />
      </Section>
    </Container>
  );
}

export default App;
