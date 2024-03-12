const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/registerStaff", async(req, res) => {
    const {
        name,
        DOB,
        selectedGender,
        bloodGroup,
        phoneNumber,
        aadharNumber,
        image,
        staffID,
        education,
        experience,
        language,
        timing,
        deptGroup,
        email,
        password,
        confirmPassword
    } = req.body;

    const data = {
        name,
        DOB,
        selectedGender,
        bloodGroup,
        phoneNumber,
        aadharNumber,
        image,
        staffID,
        education,
        experience,
        language,
        timing,
        deptGroup,
        email,
        password,
        confirmPassword
    };

    try {
        const check = await collection.findOne({ email });

        if (check) {
            res.json("exist");
        } 
        
        else {
            await collection.insertMany([data]);
            res.json("notexist");
        }
    } 
    
    catch (e) {
        res.json("fail");
    }
});

app.listen(8000,()=>{
    console.log("port connected");
})
