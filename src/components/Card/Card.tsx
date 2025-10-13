import styled from "styled-components";

export type CardProps = {
  title: string;
  content: string;
  disabled?: boolean;
};

const StyledCard = styled.div<{ $disabled?: boolean }>`
  background-color: ${(props) => (props.$disabled ? "#f2f2f2" : "#ffffff")};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: ${(props) =>
    props.$disabled ? "none" : "0 2px 5px rgba(0, 0, 0, 0.1)"};
  color: ${(props) => (props.$disabled ? "#888" : "#333")};
  transition: all 0.3s ease;

  h3 {
    margin-top: 0;
    color: ${(props) => (props.$disabled ? "#aaa" : "#007bff")};
  }

  p {
    margin-bottom: 0;
  }
`;

export const Card = ({ title, content, disabled }: CardProps) => {
  return (
    <StyledCard $disabled={disabled}>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
};

export {};
