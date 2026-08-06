import { cn } from "@/lib/utils";
import { TopBarProps } from "./types";
import Greeting from "./greeting";
import WalletChip from "./wallet-chip";
import NotificationButton from "./notification-button";
import AvatarMenu from "./avatar-menu";
import AISearchBar from "./ai-search-bar";
import SmartStatusRow from "./smart-status-row";
import SmartRecommendationBanner from "./smart-recomandation-banner";

const DEFAULT_PLACEHOLDERS = [
  "از AI هر چیزی بپرس...",
  "در دات وان جست‌وجو کن...",
  "برنامه سفرم را بساز...",
  "امروز چه کاری انجام بدهم؟",
];

export function TopBar({
  userName,
  walletBalance,
  walletCurrency = "TOMAN",
  notificationCount = 0,
  avatarUrl,
  quickStatuses = [],
  recommendations = [],
  searchPlaceholders = DEFAULT_PLACEHOLDERS,
  onSearchSubmit,
  onVoiceSearch,
  onNotificationsClick,
  onAvatarClick,
  onWalletClick,
  className,
}: TopBarProps) {
  return (
    <header
      dir="rtl"
      aria-label="نوار وضعیت و جست‌وجوی هوشمند"
      className={cn(
        "sticky top-0 z-50 mx-auto w-full",
        "bg-background",
        className,
      )}
    >
      <div className="flex flex-col gap-2.5 px-4 pt-3 pb-2.5">
        {/* Row 1 — greeting + wallet + notifications + avatar */}
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <Greeting userName={userName} />
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <WalletChip
              balance={walletBalance}
              currency={walletCurrency}
              onClick={onWalletClick}
            />
            <NotificationButton
              count={notificationCount}
              onClick={onNotificationsClick}
            />
            <AvatarMenu
              userName={userName}
              avatarUrl={avatarUrl}
              onClick={onAvatarClick}
            />
          </div>
        </div>

        {/* Row 2 — AI search */}
        <AISearchBar
          placeholders={searchPlaceholders}
          onSubmit={onSearchSubmit}
          onVoiceSearch={onVoiceSearch}
        />

        {/* Row 3 — quick status chips */}
        <SmartStatusRow items={quickStatuses} />

        {/* Row 4 — one rotating recommendation */}
        <SmartRecommendationBanner items={recommendations} />
      </div>
    </header>
  );
}

export default TopBar;
