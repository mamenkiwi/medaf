import { credentials, realApp } from "../utils/mongo.client";

export async function getBrand() {
  const phones = await realApp.logIn(credentials);
  const listOfPhones = phones.functions.getAllbrands();
  //console.log(listOfPhones);
  listOfPhones.then((resp) => {
    return resp;
  });
  return listOfPhones;
}
export async function postPhoneD(payload) {
  const phones = await realApp.logIn(credentials);
  const response = await phones.functions.phoneInsertMany(payload);
  response.then((data) => {
    return data;
  });
  return response;
}

export async function phoneCreate(item) {
  const {
    brand,
    modelName,
    pImg,
    relDate,
    bodySpec,
    phoneBodyInPx,
    photos
  } = item;
  const phones = await realApp.logIn(credentials);
  const response = await phones.functions.createPhone(
    brand,
    modelName,
    pImg,
    relDate,
    bodySpec,
    phoneBodyInPx,
    photos
  );
  response.then((data) => {
    return data;
  });
  return response;
  /*
  


exports = function(brand, modelName, pImg, 
relDate, bodySpec, phoneBodyInPx, photos){
   
    
    let newPhone = collection.insertOne({"brand": brand, "modelName": modelName, "pImg": pImg, "relDate": relDate, "bodySpec": bodySpec, "phoneBodyInPx": phoneBodyInPx, "photos": photos})

    return newPhone;
};
  
  */
}
