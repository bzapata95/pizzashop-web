import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  email: z.string().email(),
  phone: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Establecimiento registrado con éxito!', {
        action: { label: 'Login', onClick: () => navigate('/sign-in') },
      })
    } catch (error) {
      toast.error('Error al registrar establecimiento')
    }
  }

  return (
    <>
      <Helmet title="Registro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Ya tengo cuenta</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crear cuenta gratis
            </h1>
            <p className="text-sm text-muted-foreground">
              Sea un parcero y comienze sus ventas
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nombre de establecimiento</Label>
              <Input
                id="restaurantName"
                type="restaurantName"
                {...register('restaurantName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Su nombre</Label>
              <Input
                id="managerName"
                type="managerName"
                {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Su email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Su phone</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar registro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Al continuar, usted acepta con nuestros{' '}
              <a className="underline underline-offset-4" href="#">
                {' '}
                terminos de servicio y políticas de privacidad.
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
