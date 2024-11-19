const express = require('express')
const mongoose =require('mongoose')
const path=require('path')
const cors=require('cors')
const bodyParser = require('body-parser')
const bcryptjs=require('bcryptjs')
const signup=require("./models/Signup")
const app = express()
const port = 5001

app.use(cors())
app.use(bodyParser.json())

const buildPath = path.join(__dirname, '../Frontend/app/build');
app.use(express.static(buildPath));


app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});


mongoose.connect("mongodb://localhost:27017/hotelmanagement",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/users/signup",async(req,res)=>{
    try {
        const {fullname,email,password}=req.body
        const user=await signup.findOne({email})
        if(user){
            res.status(400).json({message:"Email already exists"})
        }

        const hashPassword=await bcryptjs.hash(password,10)

        const newUser= new signup({
            fullname:fullname,
            email:email,
            password:hashPassword,
        })

        await newUser.save()
        res.status(201).json({message:"User created succesfully"})
    } catch (error) {
        console.log("Error:",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
})

app.post("/users/login",async(req,res)=>{
    try {
        const{email,password}=req.body
        const user=await signup.findOne({email})
        
        const isMatch= await bcryptjs.compare(password,user.password)

        if(!user || !isMatch){
            res.status(400).json("Invalid Email or Password")
        }

        res.status(200).json({message:"Login Succesfull",
            user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email,
            }
        })

    } catch (error) {
        console.log("Error: ",error.message)

    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})