interface InputProps {
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
  }
  
  export function Input({ onChange, placeholder, type = "text" }: InputProps) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />
    );
  }
  