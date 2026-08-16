export default function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`text-xl font-black tracking-tight ${
          dark ? "text-white" : "text-black"
        }`}
      >
        سوپردات
      </span>
      <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
    </div>
  );
}

export function Dot({ className = "" }) {
  return (
    <span
      className={`inline-block h-1.5 w-1.5 rounded-full bg-blue-500 ${className}`}
    />
  );
}
