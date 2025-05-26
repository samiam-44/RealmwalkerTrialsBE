import Realm from '../models/Realm.mjs';

/**
 * Get all realms
 * @route GET /api/realms
 */
export const getAllRealms = async (req, res, next) => {
    try {
        const realms = await Realm.find(); // Get all realms
        res.json(realms);
    } catch (err) {
        next(err);
    }
};

/**
 * Get a realm by ID
 * @route GET /api/realms/:id
 */
export const getRealmById = async (req, res, next) => {
    try {
        const realm = await Realm.findById(req.params.id);
        if (!realm) return res.status(404).json({ msg: 'Realm not found' });
        res.json(realm);
    } catch (err) {
        next(err);
    }
};

/**
 * Create a new realm
 * @route POST /api/realms
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

/**
 * Update a realm
 * @route PUT /api/realms/:id
 */
export const updateRealm = async (req, res, next) => {
    try {
        const updated = await Realm.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ msg: 'Realm not found' });
        res.json(updated);
    } catch (err) {
        next(err);
    }
};

/**
 * Delete a realm
 * @route DELETE /api/realms/:id
 */
export const deleteRealm = async (req, res, next) => {
    try {
        await Realm.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Realm deleted successfully' });
    } catch (err) {
        next(err);
    }
};
