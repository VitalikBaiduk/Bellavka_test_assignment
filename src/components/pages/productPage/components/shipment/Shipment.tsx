import { StyledText } from "../../../../../styles/globalStyles";
import { theme } from "../../../../../styles/theme";
import { ShipmentData } from "../../../../../types/types";
import { ChangeButton, Wrapper } from "./styles";

type ShipmentProps = {
  city: string;
  data: ShipmentData;
};

export const Shipment = ({ city, data }: ShipmentProps) => {
  const { fittingPrice, courierPrice, postPrice, symbol } = data;
  const { gold } = theme;

  const shipmentData = [
    { label: "С примеркой: от ", value: fittingPrice },
    { label: "Курьером: от ", value: courierPrice },
    { label: "Почтой: от ", value: postPrice },
  ];

  return (
    <Wrapper>
      <StyledText fontWeight="600">Доставка: {city}</StyledText>
      {shipmentData.map(
        (item: { label: string; value: string }, index: number) => {
          const { label, value } = item;
          return (
            <StyledText key={index} margin="5px 0 0" fontWeight="400">
              {label + value + symbol}
            </StyledText>
          );
        }
      )}
      <ChangeButton cursor="pointer" border color={gold}>
        Изменить
      </ChangeButton>
    </Wrapper>
  );
};
