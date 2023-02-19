const router= require("express").Router()
const postController=require("../controllor/post")
router.get("/",postController.getDose)
router.post("/api/createProduct",postController.postDose)
router.put("/:id",postController.updateDose)
router.delete("/:id",postController.deleteDose)
module.exports={DoseRouter:router}