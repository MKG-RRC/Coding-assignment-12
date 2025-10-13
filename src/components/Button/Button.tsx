import styled from "styled-components";

type ButtonProps = {
  label: string;
  disabled?: boolean;
};

const StyledButton = styled.button<{ disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;
`;


export const Button = ({ label, disabled }: ButtonProps) => {
  return <StyledButton disabled={disabled}>{label}</StyledButton>;
};
