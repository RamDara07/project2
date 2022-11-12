import { TripModel } from "./model/trip";

const convertUserDocumentToObject = (document) =>
    document.toObject({
        getters: true,
        versionKey: false,
        transform: (doc, ret) => ({
            ...ret,
            userId: ret.userId && ret.userId.toString()
        })
    });


const create = async (trip) => {
    const result = await TripModel.create(trip);
    return result && convertUserDocumentToObject(result);
};


const tripRepository = { create };

export default tripRepository;