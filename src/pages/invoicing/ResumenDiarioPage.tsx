import ResumenDiarioForm from '@/components/invoicing/ResumenDiarioForm';
import ResumenesAnteriores from '@/components/invoicing/ResumenesAnteriores';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

function ResumenDiarioPage() {
  return (
    <div className="space-y-8">
      <div>
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-bold text-primary">Envío de Resumen Diario a SUNAT</CardTitle>
          <CardDescription className="text-textSecondary">
            Seleccione la fecha para generar el resumen de boletas de venta y enviarlo a la SUNAT.
          </CardDescription>
        </CardHeader>
        
        <ResumenDiarioForm />
      </div>

      <Separator className="bg-border" />

      <div>
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-2xl font-bold text-primary">Historial de Resúmenes Enviados</CardTitle>
          <CardDescription className="text-textSecondary">
            Consulta los resúmenes diarios enviados previamente a la SUNAT.
          </CardDescription>
        </CardHeader>
        <ResumenesAnteriores />
      </div>
    </div>
  );
}

export default ResumenDiarioPage;
