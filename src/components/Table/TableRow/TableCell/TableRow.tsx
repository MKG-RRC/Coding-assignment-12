  import styled from "styled-components";

export type TableRowProps = {
  cells: (string | number)[];
  hoverable?: boolean;
  striped?: boolean;
  index?: number;
  onClick?: () => void;
};

const StyledRow = styled.tr<{ $hoverable?: boolean; $striped?: boolean; $index?: number }>`
  background-color: ${(props) =>
    props.$striped && props.$index && props.$index % 2 !== 0 ? "#f9f9f9" : "white"};
  transition: background-color 0.3s ease;

  ${(props) =>
    props.$hoverable &&
    `
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
    }
  `}
`;

const StyledCell = styled.td`
  padding: 10px 16px;
  font-size: 15px;
  border-bottom: 1px solid #ddd;
`;

export const TableRow = ({ cells, hoverable, striped, index, onClick }: TableRowProps) => {
  return (
    <StyledRow
      $hoverable={hoverable}
      $striped={striped}
      $index={index}
      onClick={onClick}
    >
      {cells.map((cell, i) => (
        <StyledCell key={i}>{cell}</StyledCell>
      ))}
    </StyledRow>
  );
};

export {};
