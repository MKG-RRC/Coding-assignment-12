import styled from "styled-components";

export type TableFooterProps = {
  cells: (string | number)[];
  backgroundColor?: string;
  color?: string;
  bold?: boolean;
};

const StyledFooter = styled.tfoot<{
  $backgroundColor?: string;
  $color?: string;
  $bold?: boolean;
}>`
  background-color: ${(props) => props.$backgroundColor || "#f8f8f8"};
  color: ${(props) => props.$color || "#222"};
  font-weight: ${(props) => (props.$bold ? "600" : "400")};
  border-top: 2px solid #ccc;
`;

const StyledFooterCell = styled.td`
  padding: 10px 16px;
  text-align: left;
  border-bottom: none;
  font-size: 15px;
`;

export const TableFooter = ({
  cells,
  backgroundColor,
  color,
  bold,
}: TableFooterProps) => {
  return (
    <StyledFooter
      $backgroundColor={backgroundColor}
      $color={color}
      $bold={bold}
    >
      <tr>
        {cells.map((cell, index) => (
          <StyledFooterCell key={index}>{cell}</StyledFooterCell>
        ))}
      </tr>
    </StyledFooter>
  );
};

export {};
