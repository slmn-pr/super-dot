import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShieldCheck, VerifiedIcon } from "lucide-react";

export default function IdentityCard() {
  return (
    <section className="bg-white rounded-xl border p-6">
      <div className="flex items-center gap-4">
        <div className="relative size-20 rounded-full bg-blue-100 flex items-center justify-center text-3xl ring-2 ring-offset-1">
          <Avatar className="size-20">
            <AvatarImage src="/user_avatar.png" className="object-contain" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>

          {/* Verified check */}
          <div className="absolute -bottom-3">
            <VerifiedIcon className="fill-gray-900 stroke-white" />
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl">سلمان سلیمان‌پور</h2>

          <div
            className="flex items-center justify-end gap-1 text-sm text-zinc-500 mt-1"
            style={{ direction: "ltr" }}
          >
            @salman.dot
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        <div className="bg-zinc-50 rounded-2xl p-3 text-center">
          <p className="font-bold text-lg">12,540</p>
          <span className="text-xs text-zinc-500">DOTO</span>
        </div>

        <div className="bg-zinc-50 rounded-2xl p-3 text-center">
          <p className="font-bold text-lg">24</p>
          <span className="text-xs text-zinc-500">سفارش‌ها</span>
        </div>

        <div className="bg-zinc-50 rounded-2xl p-3 text-center">
          <p className="font-bold text-lg">8</p>
          <span className="text-xs text-zinc-500">سفرها</span>
        </div>
      </div>
    </section>
  );
}
