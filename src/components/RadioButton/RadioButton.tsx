import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledRadio = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-size: 16px;
  font-weight: 500;
  color: #222;

  input {
    margin-right: 8px;
    accent-color: ${(props) => (props.disabled ? "#aaa" : "#007bff")};
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <StyledRadio disabled={disabled}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label}
    </StyledRadio>
  );
};

export default RadioButton;
