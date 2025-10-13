import styled from "styled-components";

export type DropdownProps = {
  label: string;
  options: string[];
  disabled?: boolean;
  onChange?: (value: string) => void;
};

const StyledSelect = styled.select<{ $disabled?: boolean }>`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.$disabled ? "#f2f2f2" : "#fff")};
  color: ${(props) => (props.$disabled ? "#999" : "#333")};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => (props.$disabled ? "#ccc" : "#007bff")};
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Dropdown = ({ label, options, disabled, onChange }: DropdownProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <div>
      <Label>{label}</Label>
      <StyledSelect $disabled={disabled} disabled={disabled} onChange={handleChange}>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};

export {};
