import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface ModuleCardProps {
  url: string;
  title: string;
  description: string;
  icon?: any;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  url,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <Link href={url}>
      <Card className="w-[240px] bg-secondary h-full hover: cursor-pointer hover:bg-slate-100 transition">
        <CardHeader className="flex">
          <Icon className="size-10 text-primary" />
          <CardTitle className="text-xl text-primary font-bold">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ModuleCard;
