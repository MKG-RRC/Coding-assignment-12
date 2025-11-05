import styledComponent from "styled-components";

export type TextProps = {
  content: string;
  size?: "small" | "medium" | "large";
  color?: string;
  weight?: "normal" | "bold";
  disabled?: boolean;
};

const StyledText = styledComponent.p<{
  $size: string;
  $color?: string;
  $weight: string;
  $disabled?: boolean;
}>`
  margin: 0;
  font-size: ${(props) =>
    props.$size === "small"
      ? "14px"
      : props.$size === "large"
        ? "20px"
        : "16px"};
  color: ${(props) => (props.$disabled ? "#999" : props.$color || "#222")};
  font-weight: ${(props) => props.$weight};
  line-height: 1.6;
  transition: color 0.3s ease;
`;

export const Text = ({
  content,
  size = "medium",
  color,
  weight = "normal",
  disabled,
}: TextProps) => {
  return (
    <StyledText
      $size={size}
      $color={color}
      $weight={weight}
      $disabled={disabled}
    >
      {content}
    </StyledText>
  );
};

export {};
