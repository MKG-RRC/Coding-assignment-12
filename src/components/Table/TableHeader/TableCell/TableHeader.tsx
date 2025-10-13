import styled from "styled-components";

export type TableHeaderProps = {
  headers: string[];
  backgroundColor?: string;
  color?: string;
  sticky?: boolean;
};

const StyledHeader = styled.thead<{ $backgroundColor?: string; $color?: string; $sticky?: boolean }>`
  background-color: ${(props) => props.$backgroundColor || "#f0f0f0"};
  color: ${(props) => props.$color || "#222"};
  font-weight: 600;

  ${(props) =>
    props.$sticky &&
    `
    position: sticky;
    top: 0;
    z-index: 2;
  `}
`;

const StyledHeaderCell = styled.th`
  padding: 10px 16px;
  text-align: left;
  border-bottom: 2px solid #ccc;
  font-size: 15px;
`;

export const TableHeader = ({
  headers,
  backgroundColor,
  color,
  sticky,
}: TableHeaderProps) => {
  return (
    <StyledHeader
      $backgroundColor={backgroundColor}
      $color={color}
      $sticky={sticky}
    >
      <tr>
        {headers.map((header, index) => (
          <StyledHeaderCell key={index}>{header}</StyledHeaderCell>
        ))}
      </tr>
    </StyledHeader>
  );
};

export {};
