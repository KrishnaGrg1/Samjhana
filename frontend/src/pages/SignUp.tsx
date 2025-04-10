import { Button } from "../components/button";
import { Input } from "../components/Input";

export default function Signup() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl border shadow-md w-full max-w-sm p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>
        
        <div className="space-y-4">
          <Input placeholder="Username" label="Username" />
          <Input placeholder="Password" label="Password" type="password" />
        </div>

        <div className="pt-6">
          <Button
            variant="primary"
            text="Sign Up"
            fullWidth={true} // should be a boolean
            loading={false}
          />
        </div>

        <div className="pt-4 text-center text-sm text-gray-500">
          Already have an account? <span className="text-[#3e38a7] cursor-pointer hover:underline">Log in</span>
        </div>
      </div>
    </div>
  );
}
