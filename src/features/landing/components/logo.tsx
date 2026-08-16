import Image from "next/image";

export default function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-2">
      <Image src="/my_dot_logo.svg" alt="Logo" width={32} height={32} />

      <span
        className={`text-xl font-black tracking-tight ${dark ? "text-white" : "text-black"}`}
      >
        سوپردات
      </span>
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
