import React, { useState } from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { USERS } from "./data";
import DownloadBtn from "./DownloadBtn";
import DebouncedInput from "./DebouncedInput";
import { SearchIcon } from "./Icons/Icons";
import "./index.css";

const PlateMan = () => {
    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor("", {
            id: "S.No",
            cell: (info) => <span>{info.row.index + 1}</span>,
            header: "S.No",
        }),

        columnHelper.accessor("plateNumber", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Plate Number",
        }),

        columnHelper.accessor("plateType", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Plate Type",
        }),

        columnHelper.accessor("datecreated", {
            cell: (info) => {
            // Check if datecreated exists in the original data
                if (info.original && info.original.datecreated) {
                    const date = new Date(info.original.datecreated);
                    const currentDate = new Date();

                    // Calculate the difference in days
                    const timeDiff = Math.abs(currentDate - date);
                    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

                    const status = daysDiff <= 30 ? "New" : "Old";

                    return (
                    <div className={`status-banner ${status.toLowerCase()}`}>
                        {status}
                    </div>
                    );
                } 
                
                    // Provide a fallback if datecreated is missing
                    return <div className="status-banner">N/A</div>;
                
            },
            header: "Status",
        }),
];


    const [data] = useState(() => [...USERS]);
    const [globalFilter, setGlobalFilter] = useState("");

    const table = useReactTable({
        data,
        columns,
        state: {
        globalFilter,
        },
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className="p-2 max-w-5xl mx-auto">
        <div className="flex justify-between mb-2">
            <div className="flex items-center gap-1">
            <SearchIcon />
            <DebouncedInput
                value={globalFilter ?? ""}
                onChange={(value) => setGlobalFilter(String(value))}
                className={`p-2 bg-transparent outline-none border-b-2 w-1/2 focus:w-3/4 duration-300 border-blue-800 focus:outline-none focus:border-blue-600`}
                placeholder="Search all columns"
            />
            </div>
            <div className="flex items-center">
            <DownloadBtn
                data={data}
                fileName={"vehicle opp"}
                className="px-6 py-3 sm:px-2 sm:py-1 md:px-3 md:py-2 lg:px-4 lg:py-3 bg-gray-300 border border-gray-100 text-gray-900 font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            />
            </div>
        </div>

        <div className="overflow-x-auto">
            <table className="border border-gray-800 w-full text-left">
            <thead className="bg-white text-gray-900">
                {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                    <th key={header.id} className="capitalize px-3.5 py-2">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                    ))}
                </tr>
                ))}
            </thead>

            <tbody className="text-gray-900">
                {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row, i) => (
                    <tr
                    key={row.id}
                    className={`${i % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`}
                    >
                    {row.getVisibleCells().map((cell) => (
                        <td
                        key={cell.id}
                        className="px-3.5 py-2 sm:px-2 sm:py-1 md:px-3 md:py-2 lg:px-4 lg:py-3"
                        >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                    </tr>
                ))
                ) : null}
            </tbody>
            </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-end mt-2 gap-2">
            <button
            onClick={() => {
                table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border-gray-100 px-2 disabled:opacity-30"
            >
            {"<"}
            </button>
            <button
            onClick={() => {
                table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="p-1 border-gray-100 px-2 disabled:opacity-30"
            >
            {">"}
            </button>

            <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
                {table.getState().pagination.pageIndex + 1} of {""} {table.getPageCount()}
            </strong>
            </span>

            <span className="flex items-center gap-1">
            Go to Page:{" "}
            <input
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
                }}
                className="border p-1 rounded w-16 bg-transparent"
            />
            </span>
            <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
                table.setPageSize(Number(e.target.value));
            }}
            className="p-2 bg-transparent text-gray-900"
            >
            {[10, 20, 30, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                Show {pageSize}
                </option>
            ))}
            </select>
        </div>
        </div>
    );
    };

export default PlateMan;
