import * as yup from "yup";
import { nftMetaData } from "../data/index";

const nftMetaDataSchema = yup.object().shape(
  nftMetaData.reduce((acc, item) => {
   
      acc[item.name] = yup.string().required(`${item.label} is required`);
    
    return acc;
  }, {})
);

export default nftMetaDataSchema;
