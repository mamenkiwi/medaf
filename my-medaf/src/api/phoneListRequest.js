import { phoneData } from "../data/phoneD";

export const phoneListRequest = (brandName) => {
  const filterdList = phoneData
    .filter(
      (phone) =>
        phone.brand === brandName &&
        phone.phoneBodyInPx.width &&
        phone.phoneBodyInPx.height !== null
    )
    .map((item) => {
      return {
        phoneBrand: item.brand,
        id: item.id,
        modelName: item.ptitle,
        pImg: item.pimg,
        relDate: item.year,
        bodySpec: item.bodySpec,
        bodyDimPx: item.phoneBodyInPx,
        photos: item.photos
      };
    });
  return filterdList;
};
