import { StyledText } from "../../../../../styles/globalStyles";
import { theme } from "../../../../../styles/theme";
import { ReactComponent as Arrow } from "../../../../../assets/arrowRight.svg";
import { DeliveryAvailability, DeliveryBlock, Link, Wrapper } from "./styles";

type LinksToBrandProps = {
  deliveryAvailability: string | null;
  Logo: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  linksToBrand: string;
  linksToAll: string;
};
export const LinksToBrand = ({
  deliveryAvailability,
  Logo,
  linksToBrand,
  linksToAll,
}: LinksToBrandProps) => {
  return (
    <Wrapper>
      <DeliveryBlock>
        <DeliveryAvailability color={theme.white}>
          {deliveryAvailability ? deliveryAvailability : ""}
        </DeliveryAvailability>
        <Logo />
      </DeliveryBlock>
      <Link href={linksToBrand}>
        <StyledText margin="0 5px 0 0">Все платья Luitui</StyledText>
        <Arrow />
      </Link>
      <Link href={linksToAll}>
        <StyledText margin="0 5px 0 0">Все платья </StyledText>
        <Arrow />
      </Link>
    </Wrapper>
  );
};
