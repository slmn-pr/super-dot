
export interface QuickStatus {
  id: string;
  icon: React.ReactNode;
  label: string;
  tone?: "default" | "positive" | "warning";
  onClick?: () => void;
}

export interface SmartRecommendation {
  id: string;
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

export interface TopBarProps {
  userName: string;
  /** e.g. "1,250,000" — pre-formatted integer string, no currency label */
  walletBalance: string;
  walletCurrency?: "TOMAN" | "DOTO";
  notificationCount?: number;
  avatarUrl?: string;
  quickStatuses?: QuickStatus[];
  recommendations?: SmartRecommendation[];
  searchPlaceholders?: string[];
  onSearchSubmit?: (query: string) => void;
  onVoiceSearch?: () => void;
  onNotificationsClick?: () => void;
  onAvatarClick?: () => void;
  onWalletClick?: () => void;
  className?: string;
}
