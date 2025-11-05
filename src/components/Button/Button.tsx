import styled from "styled-components";

export type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

const StyledButton = styled.button<{ $disabled?: boolean }>`
  background-color: ${(props) => (props.$disabled ? "#ccc" : "#007bff")};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 18px;
  font-size: 16px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$disabled ? "#ccc" : "#0056b3")};
  }
`;

export const Button = ({ label, disabled, onClick }: ButtonProps) => {
  return (
    <StyledButton $disabled={disabled} disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export {};
