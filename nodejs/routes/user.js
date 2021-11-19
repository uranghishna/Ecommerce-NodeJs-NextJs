const express = require('express')
const router = express.Router()
const {User} = require("../models")

function isEmpty(obj){ return Object.keys(obj).length === 0;}
const errorResponse = (res, error) => {
    console.log(error)
    return res.status(500).send({
        status: "server error"
    })
}

//get semua data
router.get("/", async (req, res) => {
    try {
        const users = await User.findAll(
        //     {
        //         where: {
        //         role: "admin",
        //     }
        // }
        )
        
        res.send({
            users,
        })
    } catch (error) {
        errorResponse(res, error)
    }
})

//get data by id
router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params

        const users = await User.findOne({
                where: {
                id,
            }
        })
        
        res.send({
            status: user ? "Success" : "User not found",
            users,
        })
    } catch (error) {
        errorResponse(res, error)
    }
})

//create data
router.post("/", async (req, res) => {
    try {
        const {fullName,email,password,role} = req.body

        if(!fullName || !email || !password || !role){
            return res.send({
                status: "validasi error"
            })
        }
        
        const user = await User.create({
            fullName,
            email,
            password,
            role
        })

        res.send({
            status: "user berhasil dibuat",
            user
        })
    } catch (error) {
        errorResponse(res, error)
    }
})

//update data
router.patch("/:id", async (req, res) => {
    try {
        const {id} = req.params
        const body = req.body

        if(isEmpty(body)){
            return res.send({
                status: "validasi error"
            })
        }

        //cek id user
        const findUserById = await User.findOne({
            where: {
                id
            }
        })
        
        if(!findUserById){
            return res.send({
                status: "user tidak ada"
            })
        }

        //update jika id user ada
        await User.update(body, {
            where: {
                id
            }
        })

        const findUserByIdAfterupdate = await User.findOne({
            where: {
                id
            }
        })

        res.send({
            status: "update berhasil",
            user: findUserByIdAfterupdate
        })

    } catch (error) {
        errorResponse(res, error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params

         //cek id user
        const findUserById = await User.findOne({
            where: {
                id
            }
        })
        
        if(!findUserById){
            return res.send({
                status: "user tidak ada"
            })
        }

        await User.destroy({
            where: {
                id
            }
        })

        res.send({
            status: "user dihapus",
        })
    } catch (error) {
        errorResponse(res, error)
    }
})

module.exports = router