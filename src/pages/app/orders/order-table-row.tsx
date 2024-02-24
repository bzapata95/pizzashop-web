import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalle de pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        2423423eqwe
      </TableCell>
      <TableCell className="text-muted-foregorund">Hace 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medoum text-muted-foreground">Pendiente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Bryan Zapata</TableCell>
      <TableCell className="font-medium">S/ 149.99</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprobar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
