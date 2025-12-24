import express from "express";
import { create, getAllUser, getUserById, update, deleteUser } from "../controller/userController.js";


const route = express.Router();


route.post("/user",create);
route.get("/user", getAllUser);
route.get("/user/:id",getUserById);
route.put("/update/user/:id",update);
route.delete("/delete/user/:id",deleteUser);


export default route;