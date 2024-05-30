

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import React from "react";
import { Column, Data } from "@/interfaces/Table";

interface TableProps {
  columns: Column[];
  data: Data[];
}

const Table:React.FC <TableProps> = ({columns, data}) => {
  const theme = useTheme([
    getTheme(),
    {
      Table: `
          background-color: var(--secondary);
          padding: 1rem;
          border-radius: var(--radius)
        `,
      HeaderRow: `
      background-color: inherit;
        .th {
          border-bottom: 2px solid var(--accent);
        }
      `,
      Row: `
      background-color: inherit;
      .td{
            padding: 1rem;
            &:not(:last-of-type) {
              border-bottom: 0px;
            }
             :last-of-type {
              border-bottom: 0px;
            }
        }
        
      `,
      Cell: `
      
        
      `,
    },
  ]);


  return <CompactTable columns={columns} data={{nodes: data}} theme={theme} />;
};

export default Table;
