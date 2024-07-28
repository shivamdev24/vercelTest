import {dbConnect} from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";


dbConnect();

export async function GET(request: NextRequest){
    try {
        const userId = await getDataFromToken(request);

        const user = await User.findById({ _id: userId }).select("-password");


        return NextResponse.json({
            message: "User found",
            data: user
        });
    } catch (error) {
        return NextResponse.json({error: error}, {status: 400});
    }
}