import ModuleCard from "@/components/ModuleCard";
import { Croissant, Users, DollarSign } from "lucide-react";

export const MODULES = [
  {
    title: "Clientes",
    desciption:
      "Accede para gestionar clientes: agregar, editar y visualizar información clave.",
    icon: Users,
    url: "/clients",
  },
  {
    title: "Productos",
    desciption:
      "Accede para gestionar productos: agregar, editar y visualizar detalles clave.",
    icon: Croissant,
    url: "/products",
  },
  {
    title: "Ventas",
    desciption:
      "Ingresa para gestionar ventas: registrar, editar y revisar transacciones importantes.",
    icon: DollarSign,
    url: "/sells",
  },
];



export default function Home() {
  return (
    <main>
      
      <div className="h-[40vh] flex items-center">
        <div className="flex justify-center w-full gap-10 ">
          {MODULES.map((m) => (
            <ModuleCard
              key={m.title}
              title={m.title}
              description={m.desciption}
              icon={m.icon}
              url={m.url}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
