import PageWrapper from "@/components/page-wrapper";
import { WalletPage } from "@/src/features/wallet/wallet-page";


const MOCK_TRANSACTIONS  = [
    {title: "خرید DOTO", type: "buy_doto", value: "10000000", date: new Date(), }
]

export default function Page(){
    return <PageWrapper>
        <WalletPage />
    </PageWrapper>
}