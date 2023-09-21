import axios from "axios";
import { createUrl, post } from "./http";
import qs from "querystring";

export const createListingAPI  = async (listingData) => {
    console.log("this is the listing data: ",listingData);
    const result = await post(createUrl("/api/listings"),{
        ...listingData
    }).catch(() => null);

    if(!result.data){
        alert("Could not create listing")
    }
};

export const getAllListingsAPI = async () => {
    // const query = qs.stringify({
    //     orderBy: { createdAt: "asc" },
    // });

    const result = await axios.get(createUrl(`/api/listings`));

    if(!result){
        alert("Could not get all listings!");
        return [];
    }
    return result.data;
};