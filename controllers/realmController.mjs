import Realm from '../models/Realm.mjs';

/** 
 *  Get all realms
 * @route GET /api/realms
 */
export const getAllRealms = async (req, res, next) => {
    try {
        const realms = await Realm.find();
        res.json(realms);
    } catch (err) {
        next(err);
    }
};

/**
 * Create a new Realm
 * @route Post /api/realms
 */
export const createRealm = async (req, res, next) => {
    try {
        const { name, description } = req.body;
        const newRealm = new Realm({ name, description });
        const savedRealm = await newRealm.save();

        res.status(201).json(savedRealm);
    } catch (err) {
        next(err);
    }
};