// src/components/common/TextArea.jsx
// Hermano de TextInput: mismo look & feel (borde, focus, tipografía) pero para texto largo.
// Si tu TextInput ya tiene estas clases centralizadas, ajusta los imports para compartirlas.

export default function TextArea({
  label,
  id,
  value,
  onChange,
  placeholder,
  rows = 6,
  required = true,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-neutral">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="rounded-lg border border-tertiary bg-white px-4 py-2.5 text-sm text-neutral outline-none transition-colors focus:border-secondary resize-y"
      />
    </div>
  );
}