
export function Input({ onChange, placeholder }: {
    placeholder:string,
    onchange:()=>void
}) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded focus:outline-none"
        />
    );
}