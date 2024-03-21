import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthCancelOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCanceledOrdersAmountCard() {
  const { data: monthCancelOrdersAmount } = useQuery({
    queryKey: ['metrics', 'month-cancel-orders-amount'],
    queryFn: getMonthCancelOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelaciones (mes)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCancelOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tighter">
              {monthCancelOrdersAmount.amount.toLocaleString('es-PE')}
            </span>
            <p className="text-sm text-muted-foreground">
              {monthCancelOrdersAmount.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthCancelOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  en relación al mes pasado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{monthCancelOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  en relación al mes pasado
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
