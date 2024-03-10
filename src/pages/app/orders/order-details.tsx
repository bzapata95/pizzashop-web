import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// interface OrderDetailsProps {}

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 123jdasdj23</DialogTitle>
        <DialogDescription>Detalles del pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Estado</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medoum text-muted-foreground">
                    Pendiente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Bryan Zapata Capcha
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Teléfono</TableCell>
              <TableCell className="flex justify-end">+51 3839283923</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                bizcomm@bizcomm.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado{' '}
              </TableCell>
              <TableCell className="flex justify-end">Hace 4 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Producto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Precio</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Peperoni Familiar</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">S/ 69.90</TableCell>
              <TableCell className="text-right">S/ 139.80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Mosarela Familiar</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">S/ 59.90</TableCell>
              <TableCell className="text-right">S/ 139.80</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3} className="text-right">
                Total del pedido
              </TableCell>
              <TableCell className="text-right font-medium">
                S/ 259.60
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
