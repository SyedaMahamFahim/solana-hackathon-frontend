import * as yup from "yup";

const nftMetaDataSchema= yup.object().shape({
    title: yup.string().required("Title is required"),
    price: yup.string().required("Price is required"),
  });

export default nftMetaDataSchema;  