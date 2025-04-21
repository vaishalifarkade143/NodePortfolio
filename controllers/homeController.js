import UserModel from "../model/userModel.js"

const homeController = async(req,res)=>{
    try{
        res.render('index')
    }
    catch(err){
        console.log("error is",err.message)
    }
}

// user contact controller
// const contactUserController = async(req,res)=>{
//     try{
//         console.log("data is",req.body);
//         const data = await UserModel({
//             name:req.body.name,
//             email:req.body.email,
//             subject:req.body.subject,
//             message:req.body.message,
//         })
//         if(data){
//             await data.save()
//             console.log("User saved successfully")
//         }
//         res.render('index')
//     }
//     catch(err){
//         console.log("error is",err.message)
//     }
// }

const contactUserController = async (req, res) => {
    try {
      console.log("Form data:", req.body);
      const { name, email, subject, message } = req.body;
      const data = new UserModel({ name, email, subject, message });
      await data.save();
      console.log("User saved successfully");
      res.render('index'); // You can redirect to a success page instead if needed
    } catch (err) {
      console.log("Error saving contact form:", err.message);
      res.render('index'); // Optional: Pass error message to view
    }
  };

export {homeController ,contactUserController}