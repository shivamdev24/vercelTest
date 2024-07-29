'use client'


import { useState } from "react";
import Axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "react-toastify";
import Link from "next/link";

const UserProfile = ({ params }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await Axios.patch("/api/user/user-update", {
        id: params.id,
        username,
        password,
      });

      const data = response.data;

      if (response.status === 200) {
        console.log(`Success: ${data.message}`);
        toast.success("Update Successful", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      } else {
        
         toast.error("Update Failed", {
           position: "bottom-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
         });
      }
    } catch (error: any) {
     
       toast.error("Update Failed", {
         position: "bottom-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
       });
    }
  };

  return (
    <div className="p-5">
      <Link
        href="/dashboard/profile"
        className=" px-6 hover:bg-gray-900 p-2 bg-black text-white rounded"
      >
        {" "}
        Back{" "}
      </Link>
      <form onSubmit={handleSubmit}>
        <Card className="m-4 w-full md:max-w-4xl mx-auto mt-12">
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <Input type="text" value={params.id} readOnly required />
          </CardContent>
          <CardContent>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter new username"
            />
          </CardContent>
          <CardContent>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter new password"
            />
          </CardContent>
          <CardContent>
            <Button type="submit" className="w-full md:w-40 mt-4 md:mt-0">
              Update User
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};



export default UserProfile;