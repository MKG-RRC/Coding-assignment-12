import styled from "styled-components";

export type ImgProps = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
  disabled?: boolean;
};

const StyledImg = styled.img<{ $rounded?: boolean; $disabled?: boolean }>`
  display: block;
  width: 100%;
  max-width: ${(props) => props.width || "100%"};
  height: auto;
  border-radius: ${(props) => (props.$rounded ? "12px" : "0")};
  filter: ${(props) =>
    props.$disabled ? "grayscale(90%) opacity(0.6)" : "none"};
  transition: all 0.3s ease;

  &:hover {
    transform: ${(props) => (props.$disabled ? "none" : "scale(1.03)")};
  }
`;

export const Img = ({
  src,
  alt,
  width,
  height,
  rounded,
  disabled,
}: ImgProps) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      $rounded={rounded}
      $disabled={disabled}
    />
  );
};

export {};
