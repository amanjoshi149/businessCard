const {Card} = require("../models/card");
const {z} = require("zod");
const {Router}  = require("express");
const {addCardSchema,updateCardSchema,removeCardSchema} = require("../types");

const router = Router();


// now adding crud routes for the card
router.get("/",async (req,res) =>{
    const allCards= await Card.find({});
    res.status(200).json(allCards);
});

router.post("/addCard",async (req,res) =>{
    const result = addCardSchema.safeParse(req.body);
    // console.log(result);
    if(result.success)
    {
        const carddata = result.data;
        const card =  new Card(carddata);
        await card.save();
        res.status(200).json({
            msg : "data saved successfully",
        })
    }else{
        res.status(411).json({
            msg : "Invalid Input !"
        })
    }
});

router.put("/updateCard", async (req,res) =>{
    const result = updateCardSchema.safeParse(req.body);
    if(result.success)
    {
        const user = await Card.findByIdAndUpdate(result.data.id, {
            name : result.data.name,
            description : result.data.description,
            interests :  result.data.interests,
            socialMedia :  result.data.socialMedia
        });
        if(user){
            res.status(200).json({
                msg : "card updated successfully"
            })
        }
        else{
            res.status(403).json({
                msg : "card with id not found"
            })
        }
    }else{
        res.status(411).json({
            msg : "Invalid Input!"
        })
    }
});

router.delete("/removeCard",async (req,res) =>{
    const result = removeCardSchema.safeParse(req.body);
    if(result.success)
    {   
        const _id = result.data.id;
        try {
            await Card.findByIdAndDelete(_id);
            res.status(200).json({
                msg :  "Card deleted successfully"
            })
        } catch (error) {
            res.status(403).json({
                msg : "Card with id not found !"
            })
        }
    }else{
        res.status(411).json({
            msg  : "Invalid Input !"
        })
    }
});
module.exports = router;