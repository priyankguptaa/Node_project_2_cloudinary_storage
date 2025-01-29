import { Router } from "express";
import { loginUser, registerUser, logoutUser } from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middlewares.js"

import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields(
        [
            {name:"avatar",
             maxCount: 1   
            },
            {
                name : "coverImage",
                maxCount: 1
            }
        ]
    ),  
    registerUser
)

router.route("/login").post(
    loginUser
)

//Secured
router.route("/logout").post(verifyJwt, logoutUser)

export default router;