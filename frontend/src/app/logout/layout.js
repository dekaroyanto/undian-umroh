"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DashboardPage from "../dashboard/page";
import MemberPage from "../member/page";
import TransactionPage from "../transaction/page";
import { Card, CardBody } from "@nextui-org/react";
import LogoutPage from "../logout/page";

export default function LogoutLayout() {
  const [groupData, setGroupData] = useState(null);
  const [customerData, setCustomerData] = useState([]);
  const router = useRouter();
  const authToken = localStorage.getItem("authToken");
  // test commit

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://10.21.9.213:1501/umroh/user/getCustomer",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        console.log(response.data);
        const result = response.data.result;

        setGroupData(result.group);
        setCustomerData(result.customer);
      } catch (error) {
        console.error("Error fetching data:", error);

        router.push("/login");
      }
    };

    if (authToken) {
      fetchData();
    } else {
      router.push("/login");
    }
  }, [authToken]);

  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/member" element={<MemberPage />} />
            <Route path="/transaction" element={<TransactionPage />} />
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}
