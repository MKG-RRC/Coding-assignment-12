import styledComponent from "styled-components";

export type TableCellProps = {
  content: string | number;
  align?: "left" | "center" | "right";
  bold?: boolean;
  width?: string;
  color?: string;
};

const StyledCell = styledComponent.td<{
  $align?: string;
  $bold?: boolean;
  $width?: string;
  $color?: string;
}>`
  padding: 10px 16px;
  font-size: 15px;
  text-align: ${(props) => props.$align || "left"};
  font-weight: ${(props) => (props.$bold ? "600" : "400")};
  width: ${(props) => props.$width || "auto"};
  color: ${(props) => props.$color || "#222"};
  border-bottom: 1px solid #ddd;
`;

export const TableCell = ({
  content,
  align,
  bold,
  width,
  color,
}: TableCellProps) => {
  return (
    <StyledCell $align={align} $bold={bold} $width={width} $color={color}>
      {content}
    </StyledCell>
  );
};

export {};
