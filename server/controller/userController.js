import Users from "../model/userModel.js";

export const create = async (req, res) => {
    try {
        const { email } = req.body;
        const userExist = await Users.findOne({ email });
        if (userExist) {
            return res.status(409).json({ message: "User Already Exist" });
        }
        const newUser = new Users(req.body);
        const savedData = await newUser.save();
        res.status(201).json({message: "User Created Successfully"});
    } catch (error) { 
        res.status(500).json({ errorMessage: error.message });
    }
};


export const getAllUser = async(req,res) => {

    try{

        const userData = await Users.find();

        if(!userData || userData.length === 0) {
            return res.status(404).json({message : "User not found"});
        }

        res.status(200).json(userData);

    }
    catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }

};


export const getUserById = async(req,res) => {

    try{
        const id = req.params.id;
        const getUser = await Users.findById(id);

        if(!getUser) {
            res.status(404).json({message: `The User Not found with this ${id}`});
        }

        res.status(200).json(getUser);
    }
    catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }

};


export const update = async (req,res) => {

    try{

        const id = req.params.id;
        const findByUser = await Users.findById(id);

        if(!findByUser) {
            res.status(500).json({message : "User not found"});
        }

        const updateData = await Users.findByIdAndUpdate(id,req.body,{
            new:true
        })
        res.status(200).json(updateData);

    }
    catch(error) {
        res.status(500).json({ errorMessage: error.message });
    }

};



export const deleteUser = async(req,res) => {


    try {

        const id = req.params.id;
        const findByUser = await Users.findById(id);

        if(!findByUser) {
            res.status(404).json({message : "User not found"});
        }

        const deletedUser = await Users.findByIdAndDelete(id);

        res.status(200).json(deletedUser);

    }
    catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }

}