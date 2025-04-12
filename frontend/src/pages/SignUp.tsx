import { useRef } from "react";
import { Button } from "../components/button";
import { Input } from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Signup() {
  const BACKEND_URL = "http://localhost:8002";

  const navigate=useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(username);
    await axios.post(`${BACKEND_URL}/api/v1/signup`, {
     
        username, password
      
    })

      .then((res) => {
        console.log("Signup successful:", res.data);
        alert("Signup sucess");
        navigate('/signin')
      })
      .catch((err) => {
        console.error("Signup error:", err);
        alert("signup error")
      });
  }

  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl border shadow-md w-full max-w-sm p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>

        <div className="space-y-4">
          <Input ref={usernameRef} placeholder="Username" type="text" />
          <Input ref={passwordRef} placeholder="Password" type="password" />
        </div>

        <div className="pt-6">
          <Button
            size="lg"
            onClick={signup}
            variant="primary"
            text="Sign Up"
            fullWidth={true}
            loading={false}
          />
        </div>

        <div className="pt-4 text-center text-sm text-gray-500" onClick={()=>{
          navigate('/signin')
        }}>
          Already have an account? <span className="text-[#3e38a7] cursor-pointer hover:underline">Log in</span>
        </div>
      </div>
    </div>
  );
}
