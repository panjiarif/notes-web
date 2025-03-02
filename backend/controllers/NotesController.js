import Notes from "../models/NotesModel.js";

export const getNotes = async (req, res) => {
    try {
        const respone = await Notes.findAll();
        res.status(200).json(respone);
    } catch (error) {
        console.error(error.message);
    }
};

export const getNotesById = async (req, res) => {
    try {
        const respone = await Notes.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(respone);
    } catch (error) {
        console.error(error.message);
    }
};

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        await Notes.create({
            title: title,
            content: content,
            userId: req.userId,
        });
        res.status(201).json({msg: "Note baru dibuat!"});
    } catch (error) {
        console.error(error.message);
    }
};

export const updateNote = async (req, res) => {
    try {
        await Notes.update(req.body,{
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({msg: "Note telah diperbarui!"});
    } catch (error) {
        console.error(error.message);
    }
};

export const deleteNote = async (req, res) => {
    try {
        await Notes.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({msg: "Note berhasil dihapus!"});
    } catch (error) {
        console.error(error.message);
    }
};