import { Button } from "../components/button";
import { Input } from "../components/Input";

export default function SignIn() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl border shadow-md w-full max-w-sm p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Welcome Back</h2>

        <div className="space-y-4">
          <Input placeholder="Username" type="text" />
          <Input placeholder="Password" type="password" />
        </div>

        <div className="pt-6">
          <Button
            size="lg"
            variant="primary"
            text="Log In"
            fullWidth={true}
            loading={false}
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
