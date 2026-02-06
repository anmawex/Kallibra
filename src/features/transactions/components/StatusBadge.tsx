import type { TransactionStatus } from '../types';
import { cn } from '@/shared/lib/utils';

interface StatusBadgeProps {
  status: TransactionStatus;
}

const statusConfig: Record<TransactionStatus, { label: string; className: string }> = {
  reconciled: {
    label: 'Reconciled',
    className: 'status-reconciled',
  },
  pending: {
    label: 'Pending',
    className: 'status-pending',
  },
  inconsistent: {
    label: 'Inconsistent',
    className: 'status-inconsistent',
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className={cn('status-badge', config.className)}>
      {config.label}
    </span>
  );
}
