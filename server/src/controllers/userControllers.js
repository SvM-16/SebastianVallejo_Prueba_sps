import User from '../models/userModels.js'

export const getUsers = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.status(500).json("Error al encontar los usuario");
    }
}

export const getUser = async(req, res)=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({ message:'Usuario no encontrada' })
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json("Error en encontar el usuario");
    }
    
}

export const createUser = async (req,res)=>{
    try {
        const {username} = req.body;
    const newUser = new User({
        username
    });

    const savedUser = await newUser.save();
    res.status(200).json( savedUser )
    } catch (error) {
        console.log(error);
        res.status(500).json("Error al crear el usuario"); 
    }
}