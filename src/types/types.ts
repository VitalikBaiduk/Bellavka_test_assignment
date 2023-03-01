import { ModalType, SizeType } from "../enums/enums";

export type ProductBransType = {
  id: number;
  slug: string;
  value: string;
};

export type ProductCategoryType = {
  id: number;
  parentId: number;
  sorting: number;
  value: string;
};

export type ProductColorsType = {
  hex: string;
  id: number;
  value: string;
};

export type ProductDateType = {
  create: string;
  release: null;
  update: string;
};

export type DiscountItemType = {
  amount: number;
  percent: number;
};

export type PriceDiscountType = {
  market: DiscountItemType;
  promocode: DiscountItemType;
};
export type ProductPriceType = {
  current: number;
  discount: PriceDiscountType;
  old: number;
  retail: number;
  retailOld: number;
  symbol: string;
  wholesale: number;
  wholesaleOld: number;
};

export type PromocodeDesignParamsType = {
  backgroundColor: string;
  labelStyle: null;
  textColor: string;
};

export type ProductPromocodeType = {
  description: string;
  designParams: PromocodeDesignParamsType;
  endedAt: string;
  gifts: null;
  isShowLabel: number;
  name: string;
  slug: string;
  startedAt: string;
  title: string;
  unlimited: boolean;
};

export type ProductCommonType = {
  id: number;
  value: string;
};

export type ProductPhotosType = {
  60: string;
  220: string;
  260: string;
  330: string;
  440: string;
  660: string;
  800: string;
  original: string;
};

export type ProductSizeType = {
  id: number;
  isActual: boolean;
  value: string;
};

export type ProductVideosType = {
  hd: string;
  md: string;
  original: string;
  preview: string;
  sd: string;
};

export type ProductType = {
  data: ProductDataType;
  message: string;
};

export type ActiveItemsType = {
  id: number;
  items: {
    activeSize: number[];
    activeHeigth: number | null;
  };
};

export type ModalInfoType = {
  modalType: ModalType;
  contentType: SizeType;
  contentTitle: string;
  modalTitle: string;
};

export type ShipmentData = {
  fittingPrice: string;
  courierPrice: string;
  postPrice: string;
  symbol: string;
};

export type AboutTheProductType = {
  countryofOrigin: string;
  equipment: string[];
  season: string[];
  collection: string[];
  style: string[];
  material: string[];
  composition: string;
  height: string[];
  description: string;
};

export type ProductDataType = {
  availabilityStatus: null;
  brand: ProductBransType;
  brandId: number;
  category: ProductCategoryType;
  categoryId: number;
  colors: ProductColorsType[];
  date: ProductDateType;
  description: string | null;
  fabricText: string;
  fabrics: ProductCommonType[];
  fullName: string;
  heights: ProductCommonType[];
  id: number;
  inFavorite: boolean;
  isActive: boolean;
  isCotton: boolean;
  isFitting: boolean;
  isForsale: boolean;
  isLinen: boolean;
  isNew: boolean;
  isOutlet: boolean;
  kits: ProductCommonType[];
  name: string;
  otherColors: ProductColorsType[];
  photos: ProductPhotosType[];
  price: ProductPriceType;
  promocode: ProductPromocodeType;
  questionsCount: number;
  reviewsCount: number;
  salePercent: number;
  seasonId: number;
  sizes: ProductSizeType[];
  slug: string;
  status: string;
  url: string;
  videos: ProductVideosType[];
  recommended: ProductDataType[];
  aboutTheProductData: AboutTheProductType;
  shipmentData: ShipmentData;
};
