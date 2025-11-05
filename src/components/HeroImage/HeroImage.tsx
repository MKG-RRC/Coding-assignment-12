import styledComponent from "styled-components";

export type HeroImageProps = {
  imageUrl: string;
  title: string;
  subtitle?: string;
  disabled?: boolean;
};

const HeroWrapper = styledComponent.div<{
  $imageUrl: string;
  $disabled?: boolean;
}>`
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  filter: ${(props) =>
    props.$disabled ? "grayscale(90%) opacity(0.6)" : "none"};
  transition: all 0.3s ease-in-out;
`;

const Overlay = styledComponent.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 1rem;
`;

export const HeroImage = ({
  imageUrl,
  title,
  subtitle,
  disabled,
}: HeroImageProps) => {
  return (
    <HeroWrapper $imageUrl={imageUrl} $disabled={disabled}>
      <Overlay>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </Overlay>
    </HeroWrapper>
  );
};

export {};
