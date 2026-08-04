import { Card, CardContent } from "@/components/ui/card";
import { TransactionsEmptyState } from "./empty-state";
import { TransactionItem } from "./transaction-item";
import type { Transaction } from "./types";

interface TransactionListProps {
    transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
    if (transactions.length === 0) {
        return (
            <Card className="border-none bg-card shadow-none">
                <CardContent>
                    <TransactionsEmptyState />
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="border-none bg-card shadow-sm">
            <CardContent className="divide-y divide-border">
                {transactions.map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                ))}
            </CardContent>
        </Card>
    );
}