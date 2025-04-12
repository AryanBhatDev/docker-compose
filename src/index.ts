import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express'

const app = express();
const client = new PrismaClient();


app.get('/',async (req:Request,res:Response)=>{
    const data = await client.user.findMany();
    res.json({
        message:"get endpoint",
        data
    })
})

app.post('/',async(req:Request,res:Response)=>{
    await client.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString(),
        }
    })
    res.json({
        message:"post endpoint"
    })
})

app.listen(3000)