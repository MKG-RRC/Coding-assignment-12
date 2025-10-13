import styled from "styled-components";

type LabelProps = {
  text: string;
  disabled?: boolean;
};

// ✅ Styled component only uses `disabled` prop
const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.disabled ? "#999" : "#222")};
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "transparent")};
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.3s ease;
`;

// ✅ Exported Label component
export const Label = ({ text, disabled }: LabelProps) => {
  return <StyledLabel disabled={disabled}>{text}</StyledLabel>;
};

export {};
