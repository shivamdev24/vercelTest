import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
        message: "Logout successfull",
        success: true,
    })


    response.cookies.set("token", "", {
        
        httpOnly:true,
        expires: new Date(0),
        sameSite: "strict",
        });

         return response;
    
  } catch (error) {
    return NextResponse.json({
      status: 500,
      statusText: "Internal Server Error",
    });
    
  }
}