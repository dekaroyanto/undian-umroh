"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
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
  Pagination,
} from "@nextui-org/react";
import { CardTest } from "../dashboard/CardTest";

const TransactionPage = () => {
  const [transactionData, setTransactionData] = useState([]);
  const router = useRouter();
  const [refresh, setRefresh] = useState(0);
  const isMobile = window.innerWidth < 600;
  const totalAmountSum = transactionData.reduce(
    (sum, transaction) => sum + parseFloat(transaction.total_amount_trans),
    0
  );
  const pointSum = transactionData.reduce(
    (sum, transaction) => sum + parseFloat(transaction.point),
    0
  );
  const formattedTotalAmount = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(totalAmountSum);

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
          "http://10.21.9.213:1501/umroh/hist/getHistory",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setTransactionData(response.data.result);
      } catch (error) {
        console.error("Error fetching user data", error);

        if (error.response && error.response.status === 401) {
          console.log("Token is invalid. Redirecting to login...");

          router.push("/login");
        }
      }
    };

    fetchData();
    setRefresh(false);
  }, [refresh, router]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");

    router.push("/login");
  };

  const forceRefresh = () => {
    setRefresh((prevRefresh) => prevRefresh + 1);
  };

  useEffect(() => {
    forceRefresh();
  }, []);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(transactionData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactionData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <p className="font-semibold text-xl mb-5">History Transaksi</p>

      <Table
        className={isMobile ? "w-3/4" : ""}
        aria-label="Example empty table"
        bottomContent={
          <div
            className={`mt-4 ${
              isMobile ? "flex-col" : "flex flex-row-reverse"
            } space-x-4 space-x-reverse`}
          >
            <p className="font-semibold">Total Point: {pointSum}</p>
            <p className={`font-semibold ${isMobile ? "mt-2" : ""}`}>
              Total Amount: {formattedTotalAmount}
            </p>
          </div>
        }
      >
        <TableHeader>
          <TableColumn>ID Trans</TableColumn>
          <TableColumn>From Store</TableColumn>
          <TableColumn>Trans Date</TableColumn>
          <TableColumn>Payment Media</TableColumn>
          <TableColumn>Total Amount</TableColumn>
          <TableColumn>Point</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No transaction data."}>
          {currentItems.map((transaction) => (
            <TableRow key={transaction.id_trans}>
              <TableCell>{transaction.id_trans}</TableCell>
              <TableCell>{transaction.store}</TableCell>
              <TableCell>{transaction.trans_date}</TableCell>
              <TableCell>{transaction.payment_media}</TableCell>
              <TableCell>{transaction.total_amount_trans}</TableCell>
              <TableCell>{transaction.point}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* <div
        className={`mt-4 ${
          isMobile ? "flex-col" : "flex flex-row-reverse"
        } space-x-4 space-x-reverse`}
      >
        <p className="font-semibold">Total Point: {pointSum}</p>
        <p className={`font-semibold ${isMobile ? "mt-2" : ""}`}>
          Total Amount: {formattedTotalAmount}
        </p>
      </div> */}

      <div className={`mt-4 ${isMobile ? "w-full" : ""}`}>
        <Pagination
          isCompact
          showControls={!isMobile}
          showShadow
          current={currentPage}
          total={totalPages}
          onChange={(newPage) => handlePageChange(newPage)}
        />
      </div>
    </>
  );
};

export default TransactionPage;
