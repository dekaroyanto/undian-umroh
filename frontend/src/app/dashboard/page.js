"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardBody,
} from "@nextui-org/react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { CardSatu } from "./CardSatu";
import { CardDua } from "./CardDua";
import { CardTiga } from "./CardTiga";
import { CardEmpat } from "./CardEmpat";
const DashboardPage = () => {
  const [groupData, setGroupData] = useState(null);
  const [customerData, setCustomerData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem("authToken");

        if (!authToken) {
          console.log("No authentication token found. Redirecting to login...");
          router.push("/login");
          return;
        }

        const response = await axios.get(
          "http://10.21.9.213:1501/umroh/user/getCustomer",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        const result = response.data.result;

        setGroupData(result.group);
        setCustomerData(result.customer);
      } catch (error) {
        console.error("Error fetching user data", error);

        if (error.response && error.response.status === 401) {
          console.log("Token is invalid. Redirecting to login...");

          router.push("/login");
        }
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");

    router.push("/login");
  };

  return (
    <>
      <div className="h-full lg:px-6">
        <div className="flex justify-center gap-4 xl:gap-6 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
          <div className="gap-6 flex flex-col w-full">
            <div className="h-full flex flex-col gap-2">
              <div className="w-full shadow-lg rounded-2xl ">
                <CardSatu />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-5  justify-center w-full">
                <CardDua />
                <CardTiga />
                <CardEmpat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
