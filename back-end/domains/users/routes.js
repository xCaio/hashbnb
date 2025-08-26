import { Router } from 'express'
import { connect } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs"

const bcryptSalt = bcrypt.genSaltSync()
const router = Router()

router.get('/', async (req, res)=>{
    connect()
    try {
        const userDocs = await User.find()
        res.status(200).json(userDocs)
    } catch (error) {
        res.status(500).json({"Erro ao encontrar o usuário": error, })
    }

})
router.post('/', async(req, res)=>{
    connect()
    const {name, email, password} = req.body
    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt)

    try {
        const newUserDoc = await User.create({
            name,
            email,
            password: encryptedPassword,
        })
        res.status(200).json(newUserDoc)
    } catch (error) {
        res.status(500).json({"Erro ao criar o usuário": error})
    }
    

})
export default router;