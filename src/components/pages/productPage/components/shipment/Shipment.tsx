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

  const shipmentData = [
    { label: "С примеркой: от ", value: fittingPrice },
    { label: "Курьером: от ", value: courierPrice },
    { label: "Почтой: от ", value: postPrice },
  ];

  return (
    <Wrapper>
      <StyledText fontWeight="600">Доставка: {city}</StyledText>
      {shipmentData.map((item: { label: string; value: string }) => {
        return (
          <StyledText margin="5px 0 0" fontWeight="400">
            {item.label + item.value + symbol}
          </StyledText>
        );
      })}
      <ChangeButton cursor="pointer" border color={theme.gold}>
        Изменить
      </ChangeButton>
    </Wrapper>
  );
};
