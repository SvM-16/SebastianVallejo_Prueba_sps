import Nota from '../models/notasModels.js'

export const getNotas = async(req,res)=>{
    try {
        const notas = await Nota.find()
        res.json( notas )

    } catch (error) {
        console.log(error)
        res.status(500).json("Error en encontar todas las notas");
    }
}

export const getNota = async (req, res) => {
    try {
        const notas = await Nota.find();
        const today = new Date(); // Fecha actual
        const notasWithTimeElapsed = notas.map((nota) => {
            const createdDate = new Date(nota.date);
            const timeElapsed = today - createdDate;
            const minutes = Math.floor(timeElapsed / (1000 * 60));
            if (minutes < 60) {
                return { ...nota._doc, timeElapsed: `${minutes} minutos` };
            } else if (minutes < 1440) {
                const hours = Math.floor(minutes / 60);
                return { ...nota._doc, timeElapsed: `${hours} horas` };
            } else {
                const days = Math.floor(minutes / 1440);
                return { ...nota._doc, timeElapsed: `${days} días` };
            }
        });
        return res.json(notasWithTimeElapsed);
    } catch (error) {
        console.log(error);
        res.status(500).json("Error al obtener las notas");
    }
}

export const createNota = async(req,res) => {
    try {
        const {username, title, description, date} = req.body

        const newNota = new Nota ({
            title,
            username,
            description,
            date
        })

        const savedNote = await newNota.save()
        res.json( savedNote )

    } catch (error) {
        console.log(error);
        res.status(500).json("Error al crear la nota");
        
    }
}

export const updateNota = async (req,res) => {
    try {
        const nota = await Nota.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        if (!nota) return res.status(404).json({message: 'Nota no encontrada'})
        res.status(200).json("Nota atulizada")

    } catch (error) {
        console.log(error);
        res.status(500).json('Error en la actulización de la nota ');
    }
}

export const deleteNota = async (req, res) => {
    try {
        const nota = await Nota.findByIdAndDelete(req.params.id);
        if (!nota) return res.status(404).json({ message: 'Nota no encontrada'});
        res.status(200).json('Nota eliminada')
    } catch (error) {
        console.log(error)
        res.status(500).json('Error en eliminar la nota')
    }
}