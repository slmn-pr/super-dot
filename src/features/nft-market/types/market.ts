// ==========================================================================
// Market domain types
// همه‌ی مدل‌های داده مربوط به بازار Username و Idea NFT اینجا تعریف می‌شن.
// ==========================================================================

export type AssetType = "username" | "idea";
export type SaleMode = "fixed" | "auction";
export type Currency = "DOTO" | "IRR";
export type ListingStatus = "active" | "sold" | "expired" | "unlisted";
export type IdeaStatus = "live" | "sold";

export interface Bid {
  id: string;
  bidderId: string;
  bidderName: string;
  amount: number; // همیشه به DOTO ذخیره می‌شه (واحد پایه داخلی)
  time: string; // ISO timestamp
}

export interface Listing {
  id: string;
  assetType: AssetType;
  assetId: string;
  title: string;
  ownerId: string;
  mode: SaleMode;
  currency: Currency;
  price: number; // برای fixed: قیمت خرید. برای auction: قیمت شروع (base price)
  status: ListingStatus;
  createdAt: string;

  // فقط برای مزایده
  endsAt?: string; // ISO timestamp
  minIncrement?: number; // حداقل افزایش پیشنهاد، به DOTO
  bids?: Bid[];
}

export interface UsernameAsset {
  id: string;
  handle: string; // مثل @alex
  ownerId: string;
  isActive: boolean; // آیا الان به عنوان یوزرنیم فعال اکانت استفاده می‌شه
  acquiredAt: string;
  listingId?: string; // اشاره به Listing فعال (اگه برای فروش گذاشته شده)
}

export interface IdeaAsset {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  documents: { name: string; sizeKb: number }[];
  ownerId: string;
  status: IdeaStatus;
  createdAt: string;
  listingId?: string;
}

export interface Transaction {
  id: string;
  assetType: AssetType;
  assetId: string;
  title: string;
  fromUserId: string;
  toUserId: string;
  price: number; // به DOTO
  mode: SaleMode;
  time: string;
}

export interface MockUser {
  id: string;
  displayName: string;
  walletBalanceDoto: number;
}
