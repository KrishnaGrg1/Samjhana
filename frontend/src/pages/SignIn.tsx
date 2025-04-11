import { useRef } from "react";
import { Button } from "../components/button";
import { Input } from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router";

export default function SignIn() {
  const BACKEND_URL = "http://localhost:8002";

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate=useNavigate()
  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(username)
    try {
     
      const res = await axios.post(`${BACKEND_URL}/api/v1/login`, {
        username,
        password,
      });
  
      console.log("Signin successful:", res.data);
      const jwt: string = res.data.token;
      localStorage.setItem("token", jwt);
      navigate('/dashboard')
    } catch (err) {
      console.error("Signin error:", err);
      alert("Signin error");
    } 
  }
  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl border shadow-md w-full max-w-sm p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Welcome Back</h2>

        <div className="space-y-4">
          <Input ref={usernameRef} placeholder="Username" type="text" />
          <Input ref={passwordRef} placeholder="Password" type="password" />
        </div>

        <div className="pt-6">
          <Button
            size="lg"
            variant="primary"
            text="Log In"
            fullWidth={true}
            loading={false}
            onClick={signin}
          />
        </div>

        <div className="pt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <span className="text-[#3e38a7] cursor-pointer hover:underline">
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
}
