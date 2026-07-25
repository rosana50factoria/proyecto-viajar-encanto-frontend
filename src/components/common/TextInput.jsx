export default function TextInput({ label, id, type = "text", value, onChange, placeholder, required = true }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-neutral">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="rounded-lg border border-tertiary bg-white px-4 py-2.5 text-sm text-neutral outline-none transition-colors focus:border-secondary"
      />
    </div>
  );
}