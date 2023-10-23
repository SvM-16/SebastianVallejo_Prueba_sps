import Nota from '../models/notasModels.js'

export const getNota = async (req, res) => {
    try {
        const nota = await Nota.find();
        const today = new Date(); // Fecha actual
        const notasWithTimeElapsed = nota.map((notas) => {
            const createdDate = new Date(notas.date);
            const timeElapsed = today - createdDate;
            const minutes = Math.floor(timeElapsed / (1000 * 60));
            if (minutes < 60) {
                return { ...notas._doc, timeElapsed: `${minutes} minutos` };
            } else if (minutes < 1440) {
                const hours = Math.floor(minutes / 60);
                return { ...notas._doc, timeElapsed: `${hours} horas` };
            } else {
                const days = Math.floor(minutes / 1440);
                return { ...notas._doc, timeElapsed: `${days} días` };
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
        const { nombre, titulo, informacion, date } = req.body;

        const newNota = new Nota({
            nombre,
            titulo,
            informacion,
            date
          });

        const savedNota = await newNota.save();
          res.json(savedNota);

        } catch (error) {
        console.log(error);
        res.status(500).json("Error al crear la nota");
        }
      };

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
        if (!nota) return res.status(404).json({ message: 'Nota eliminada'});
        res.status(200).json('Nota eliminada')
    } catch (error) {
        console.log(error)
        res.status(500).json('Error en eliminar la nota')
    }
}