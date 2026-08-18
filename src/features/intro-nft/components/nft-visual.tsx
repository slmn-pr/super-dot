import { ShieldCheck, Sparkle, WalletCards } from "lucide-react";
import { useMotionValue, useSpring, useTransform, motion } from "motion/react";
import { useRef } from "react";
import NftArtwork from "./nft-artwork";
import DotoCoin from "./doto-coin";
import FloatingTile from "./floating-title";

export default function NftVisual() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D Tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 25,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 relative h-[470px] w-full max-w-[600px]"
    >
      {/* Orbital System */}
      <div className="absolute left-1/2 top-1/2 h-[330px] w-[520px] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-[50%] border border-dashed border-blue-200/60" />
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[480px] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] rounded-[50%] border border-blue-100/60" />
      <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-100" />

      {/* Stars with Subtle Pulse */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Sparkle className="absolute right-[12%] top-[13%] size-6 text-blue-500/80" />
        <Sparkle className="absolute left-[13%] top-[25%] size-4 text-blue-500/60" />
        <Sparkle className="absolute right-[17%] bottom-[30%] size-5 text-blue-500/60" />
      </motion.div>

      {/* Floating DOTO Coin */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[22%] z-30"
      >
        <DotoCoin />
      </motion.div>

      {/* NFT Floating Label */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] left-[7%] z-30 hidden sm:block"
      >
        <FloatingTile>
          <span className="text-xl font-black text-blue-500">NFT</span>
        </FloatingTile>
      </motion.div>

      {/* Wallet Floating Tile */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[29%] right-[3%] z-30 hidden sm:block"
      >
        <FloatingTile>
          <WalletCards className="size-8 text-blue-500" strokeWidth={1.5} />
        </FloatingTile>
      </motion.div>

      {/* Main NFT Card with Tilt */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="absolute left-1/2 top-[45%] z-20 w-[235px] -translate-x-1/2 -translate-y-1/2 sm:w-[265px]"
      >
        <div className="relative rotate-[7deg] rounded-[24px] border border-zinc-200 bg-white p-2 shadow-[0_35px_80px_rgba(9,9,11,0.12)] transition-shadow hover:shadow-[0_45px_90px_rgba(59,130,246,0.18)]">
          {/* Card image */}
          <div className="relative aspect-[0.84] overflow-hidden rounded-[18px]">
            <NftArtwork />

            <div className="absolute right-3 top-3 rounded-lg border border-white/50 bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-blue-600 shadow-sm backdrop-blur">
              NFT
            </div>

            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-zinc-950/90 px-2.5 py-1.5 text-[9px] font-medium text-white backdrop-blur">
              <ShieldCheck className="size-3 text-blue-400" />
              Verified
            </div>
          </div>

          {/* NFT metadata */}
          <div className="px-2 pb-1 pt-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[9px] text-zinc-400">Digital Collection</p>
                <h3 className="mt-1 text-sm font-bold text-zinc-950">
                  SuperDot #015
                </h3>
              </div>

              <div className="text-left">
                <p className="text-[9px] text-zinc-400">Value</p>
                <p className="mt-1 text-xs font-bold text-blue-500">
                  1.25 DOTO
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-2.5 text-[9px] text-zinc-400">
              <span>Digital Asset</span>
              <span>♥ 240</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Pedestal */}
      <div className="absolute bottom-[15%] left-1/2 z-10 w-[340px] -translate-x-1/2 sm:w-[400px]">
        <div className="absolute left-1/2 top-1/2 h-16 w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-2xl" />
        <div className="relative h-[45px] rounded-[50%] border border-zinc-200 bg-gradient-to-b from-white to-zinc-100 shadow-[0_12px_25px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-x-[10%] top-2 h-[70%] rounded-[50%] bg-white/80" />
        </div>
        <div className="relative -mt-3 h-[42px] rounded-b-[50%] border-x border-b border-zinc-200 bg-gradient-to-b from-zinc-100 to-white">
          <div className="absolute left-[7%] right-[7%] top-1 h-[3px] rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
        </div>
      </div>

      {/* Bottom shadow */}
      <div className="absolute bottom-[10%] left-1/2 h-10 w-[310px] -translate-x-1/2 rounded-full bg-zinc-900/[0.06] blur-2xl" />
    </div>
  );
}
