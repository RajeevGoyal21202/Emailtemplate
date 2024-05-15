import { sendEmail } from "@/helpers/mailer";
import {NextRequest,NextResponse} from "next/server"
export async function POST(request:NextRequest){
    const email = await request.json();
    console.log(email)
    try{
       await sendEmail({email})
       return NextResponse.json({
        message:"Email send successfully",
        success:"true",
        
       })
  
    }
    catch(error:any){
        return NextResponse.json({error:error.message},{status:500})
    }
}