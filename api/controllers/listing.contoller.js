import Listing from "../models/listing.model.js";

export const creatListing = async (req, res, next) => {
    try {
       const listings = await Listing.create(req.body);
       return res.status(201).json(listings); 
    } catch (error) {
        next(error)
    }
}
