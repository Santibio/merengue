"use client";
import Table from "@/components/Table";
import { Column, Data } from "@/interfaces";
import React from "react";

const Client = () => {

  const nodes: Data[] = [
    {
      id: "0",
      name: "Shopping List",
      deadline: new Date(2020, 1, 15),
      type: "TASK",
      isComplete: true,
      nodes: 3,
    },
    {
      id: "0",
      name: "Shopping List",
      deadline: new Date(2020, 1, 15),
      type: "TASK",
      isComplete: true,
      nodes: 3,
    },
  ];

  const COLUMNS:Column[] = [
    { label: "Task", renderCell: (item) => item.name },
    {
      label: "Deadline",
      renderCell: (item) =>
        item.deadline.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },
    { label: "Type", renderCell: (item) => item.type },
    {
      label: "Complete",
      renderCell: (item) => item.isComplete.toString(),
    },
    { label: "Tasks", renderCell: (item) => item.nodes },
  ];


  return (
    <div>
      <Table columns={COLUMNS} data={nodes} />
    </div>
  );
};

export default Client;
