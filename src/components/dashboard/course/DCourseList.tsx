"use client";
import React, { useMemo, useState, StrictMode } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { coursedata } from "./data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { File, ListFilter, PlusCircle, PlusCircleIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DCourseList = () => {
  const [rowData, setRowData] = useState(coursedata);

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      headerName: "Title",
      field: "courseDetails.title",
      // checkboxSelection: true,
      // editable: true,
      // cellEditor: "agSelectCellEditor",
      // cellEditorParams: {
      //   values: [
      //     "Tesla",
      //     "Ford",
      //     "Toyota",
      //     "Mercedes",
      //     "Fiat",
      //     "Nissan",
      //     "Vauxhall",
      //     "Volvo",
      //     "Jaguar",
      //   ],
      // },
    },
    {
      headerName: "shortDescription",
      field: "courseDetails.shortDescription",
      cellEditor: "agLargeTextCellEditor",
      cellEditorPopup: true,
      minWidth: 550,
      editable: true,
    },
    {
      headerName: "description",
      field: "courseDetails.description",
      cellEditor: "agLargeTextCellEditor",
      cellEditorPopup: true,
      minWidth: 550,
      editable: true,
    },
    {
      headerName: "price",
      field: "courseDetails.price",
    },
    {
      headerName: "disPrice",
      field: "courseDetails.disPrice",
    },
    {
      headerName: "category",
      field: "courseDetails.category",
    },
    {
      headerName: "duration",
      field: "courseDetails.duration",
    },
    {
      headerName: "level",
      field: "courseDetails.level",
    },
    {
      headerName: "language",
      field: "courseDetails.language",
    },
    {
      headerName: "featured",
      field: "courseDetails.featured",
    },
    {
      headerName: "totalLecture",
      field: "courseDetails.totalLecture",
    },
    {
      headerName: "demoUrl",
      field: "courseDetails.demoUrl",
    },
    {
      headerName: "avgReview",
      field: "courseDetails.avgReview",
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
    };
  }, []);
  return (
    <>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Course List</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 gap-4">
        <Tabs defaultValue="all" className="flex">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
              <TabsTrigger value="archived" className="hidden sm:flex">
                Archived
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-7 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sm:whitespace-nowrap">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Active
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-7 gap-1">
              <File className="h-3.5 w-3.5" />
              <span className="sm:whitespace-nowrap">Export</span>
            </Button>

            <Link href="/dashboard/course/create">
              <Button
                size="sm"
                className="h-7 gap-1 bg-background border hover:no-underline"
                variant="link"
              >
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sm:whitespace-nowrap">Add Course</span>
              </Button>
            </Link>
          </div>
        </Tabs>
        <div className="ag-theme-quartz-dark" style={{ height: 500 }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowSelection="multiple"
            suppressRowClickSelection={true}
            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 25, 50]}
          />
        </div>
      </div>
    </>
  );
};

export default DCourseList;
