// src/components/common/Select.jsx
// Select genérico. Lo usamos para "Ubicación", pero sirve para CategoryFilter también
// si en el futuro quieres unificarlo con components/Home/CategoryFilter.jsx.

export default function Select({
  label,
  id,
  value,
  onChange,
  options = [],
  placeholder = "Selecciona una opción",
  required = true,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-neutral">
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-lg border border-tertiary bg-white px-4 py-2.5 text-sm text-neutral outline-none transition-colors focus:border-secondary"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}