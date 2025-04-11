interface InputProps {
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    ref?:any
  }
  
  export function Input({ onChange, placeholder, type = "text",ref }: InputProps) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />
    );
  }
  