import styled from "styled-components";

export type LabelProps = {
  text: string;
  htmlFor?: string;
  color?: string;
  disabled?: boolean;
};

const StyledLabel = styled.label<{ $color?: string; $disabled?: boolean }>`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.$disabled ? "#999" : props.$color || "#222")};
  background-color: ${(props) => (props.$disabled ? "#f2f2f2" : "transparent")};
  padding: 5px 10px;
  border-radius: 4px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$disabled ? "transparent" : "#f5f5f5"};
  }
`;

export const Label = ({ text, htmlFor, color, disabled }: LabelProps) => {
  return (
    <StyledLabel htmlFor={htmlFor} $color={color} $disabled={disabled}>
      {text}
    </StyledLabel>
  );
};

export {};
