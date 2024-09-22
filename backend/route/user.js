import express from "express"
import { addUserAndAddress, getAllUsers } from "../controller/user.controller.js"
const route = express.Router()

route.post("/userAddress", addUserAndAddress)
route.get("/userAddress", getAllUsers)

export default route