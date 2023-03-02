import { addActiveProductItems } from "../../../../../../state/actions/addActiveProductItems";
import {
  ReduxState,
  useTypedDispatch,
  useTypedSelector,
} from "../../../../../../state/store";
import { StyledText } from "../../../../../../styles/globalStyles";
import { theme } from "../../../../../../styles/theme";
import {
  ProductCommonType,
  ProductSizeType,
} from "../../../../../../types/types";
import { SizeType } from "../../../../../../enums/enums";
import { Sizes, SizesWrapper, StyledRemind, Wrapper } from "./styles";
import { useEffect, useState } from "react";

type SizesProps = {
  id: number;
  sizeData: ProductSizeType[] | ProductCommonType[];
  title?: string;
  type: SizeType;
  isInModal: boolean;
  setActiveSizeItemsForModal?: React.Dispatch<
    React.SetStateAction<(number | number[] | null)[]>
  >;
};

export const SizesComponent = ({
  id,
  sizeData,
  type,
  title,
  isInModal,
  setActiveSizeItemsForModal,
}: SizesProps) => {
  const [localActiveHeigth, setLocalActiveHeigth] = useState<number | null>(
    null
  );
  const [localActiveSize, setLocalActiveSize] = useState<number[]>([]);
  const dispatch = useTypedDispatch();
  const { activeItems, product } = useTypedSelector(
    (state: ReduxState) => state.product
  );

  const { data } = product;
  const { gold, gray, white } = theme;

  const isActiveSize = (currentItemId: number) => {
    const foundElement = isInModal
      ? localActiveSize.find((elem: number) => elem === currentItemId)
      : activeItems.items.activeSize.find(
          (elem: number) => elem === currentItemId
        );
    return !!foundElement;
  };

  const isActiveHeigth = (currentItemId: number) => {
    return isInModal
      ? localActiveHeigth === currentItemId
      : activeItems.items.activeHeigth === currentItemId;
  };

  const addItemToActiveSizeArr = (currentItemId: number) => {
    let foundElement = isInModal
      ? localActiveSize.find((elem: number) => elem === currentItemId)
      : activeItems.items.activeSize.find(
          (elem: number) => elem === currentItemId
        );

    if (isInModal) {
      foundElement
        ? setLocalActiveSize(
            localActiveSize.filter((elem: number) => elem !== currentItemId)
          )
        : setLocalActiveSize([...localActiveSize, currentItemId]);
    } else {
      if (foundElement && id === data.id) {
        dispatch(
          addActiveProductItems({
            id: data.id,
            items: {
              activeSize: activeItems.items.activeSize.filter(
                (elem: number) => elem !== currentItemId
              ),
              activeHeigth: activeItems.items.activeHeigth,
            },
          })
        );
      } else if (!foundElement && id === data.id) {
        dispatch(
          addActiveProductItems({
            id: data.id,
            items: {
              activeSize: [...activeItems.items.activeSize, currentItemId],
              activeHeigth: activeItems.items.activeHeigth,
            },
          })
        );
      } else {
        return;
      }
    }
  };

  const addActiveHeights = (currentItemId: number) => {
    if (isInModal) {
      localActiveHeigth === currentItemId
        ? setLocalActiveHeigth(null)
        : setLocalActiveHeigth(currentItemId);
    } else {
      id === data.id &&
        dispatch(
          addActiveProductItems({
            id: data.id,
            items: {
              activeSize: activeItems.items.activeSize,
              activeHeigth:
                activeItems.items.activeHeigth === currentItemId
                  ? null
                  : currentItemId,
            },
          })
        );
    }
  };

  const isActive = type === SizeType.SIZE ? isActiveSize : isActiveHeigth;
  const setActiveItemFunc =
    type === SizeType.SIZE ? addItemToActiveSizeArr : addActiveHeights;

  const onClick = (isActual: boolean, id: number) => {
    (isActual || type === SizeType.HEIGTH) && setActiveItemFunc(id);
  };

  useEffect(() => {
    setActiveSizeItemsForModal &&
      setActiveSizeItemsForModal([localActiveHeigth, localActiveSize]);
  }, [localActiveHeigth, localActiveSize.length]);

  return (
    <Wrapper>
      {title && <StyledText>{title}</StyledText>}
      <SizesWrapper>
        {sizeData.map((item: any) => {
          const { id, isActual, value } = item;
          return (
            <Sizes
              borderColor={isActive(id) ? gold : gray}
              onClick={() => onClick(isActual, id)}
              key={id}
              isActive={isActive(id)}
            >
              <StyledText color={isActive(id) ? white : ""}>{value}</StyledText>
              {!isActual && type === SizeType.SIZE && <StyledRemind />}
            </Sizes>
          );
        })}
      </SizesWrapper>
    </Wrapper>
  );
};
