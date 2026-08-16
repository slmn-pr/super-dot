import {
  Gem,
  MapPin,
  Plane,
  ShoppingBag,
  Store,
  Truck,
  Users,
  Wallet,
} from "lucide-react";

export default function HubGraphic() {
  const icons = [Wallet, ShoppingBag, Truck, Store, Plane, Gem, MapPin, Users];
  const radius = 42; // percent of container
  const nodes = icons.map((Icon, i) => {
    const angle = (i / icons.length) * 2 * Math.PI - Math.PI / 2;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return { Icon, x, y, delay: i * 90 };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm md:max-w-md">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#E4E4E7"
          strokeWidth="0.4"
          strokeDasharray="1.2 2.4"
        />
        {nodes.map((n, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="#E4E4E7"
            strokeWidth="0.4"
          />
        ))}
      </svg>

      {/* center dot / brand core */}
      <div
        className="absolute flex items-center justify-center rounded-full bg-black shadow-sm"
        style={{
          left: "50%",
          top: "50%",
          width: "22%",
          height: "22%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
      </div>

      {nodes.map(({ Icon, x, y, delay }, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: "15%",
            height: "15%",
            transform: "translate(-50%, -50%)",
            animation: `hub-pop 0.6s ease both`,
            animationDelay: `${delay}ms`,
          }}
        >
          <Icon
            className="h-4 w-4 text-zinc-700 md:h-5 md:w-5"
            strokeWidth={1.8}
          />
        </div>
      ))}
    </div>
  );
}
