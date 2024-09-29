import mongoose, { Schema, model } from 'mongoose';

const FilmSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    filmTitle: {
        type: String,
        required: true,
    },
    filmCertificate: {
        type: String,
        required: true,
    },
    filmDescription: {
        type: String,
    },
    filmImage: {
        type: String,
    },
    filmPrice: {
        type: Number,
        default: 0.99,
    },
    stars: {
        type: String,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
});

export const Film = mongoose.models.Film || mongoose.model('Film', FilmSchema);
