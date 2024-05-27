const zod =  require("zod");

/*
    for addcard : 
    {
        name :  string,
        description : string,
        interests :  array of strings 
        socialmedia :  array of strings
    }
*/


const addCardSchema = zod.object({
  name: zod.string(),
  description: zod.string(),
  interests: zod.array(zod.string()),
  socialMedia: zod.array(zod.string()),
});

const updateCardSchema = zod.object({
  id: zod.string(),
  name: zod.string(),
  description: zod.string(),
  interests: zod.array(zod.string()),
  socialMedia: zod.array(zod.string())
});

const removeCardSchema = zod.object({
  id : zod.string(),
})


module.exports = {
    addCardSchema,
    updateCardSchema,
    removeCardSchema,
}