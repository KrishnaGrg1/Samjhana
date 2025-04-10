export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
  }
  
  const variantStyle = {
    primary: "bg-[#3e38a7] text-white",
    secondary: "bg-[#e0e7fe] text-[#5046e4]",
  };
  
  const sizeStyles = {
    sm: "py-1 px-2",
    md: "py-2 px-4",
    lg: "py-3 px-6",
  };
  
  const defaultStyles = "rounded-lg p-4 flex items-center transition-all duration-200";
  
  export const Button = (props: ButtonProps) => {
    const {
      variant,
      size,
      text,
      startIcon,
      endIcon,
      onClick,
      fullWidth,
      loading = false,
    } = props;
  
    return (
      <button
        className={`
          ${variantStyle[variant]}
          ${defaultStyles}
          ${sizeStyles[size]}
          ${fullWidth ? "w-full justify-center" : ""}
          ${loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}
        `}
        onClick={!loading ? onClick : undefined}
        disabled={loading}
      >
       
          <>
            {startIcon && <div className="pr-2">{startIcon}</div>}
            {text}
            {endIcon && <div className="pl-2">{endIcon}</div>}
          </>
        
      </button>
    );
  };
  