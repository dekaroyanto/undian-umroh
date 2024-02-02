import { Card, CardBody } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
  TableColumn,
} from "@nextui-org/react";

export const CardTest = () => {
  const [userData, setUserData] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const authToken = localStorage.getItem("authToken");

  //         if (!authToken) {
  //           console.log("No authentication token found. Redirecting to login...");
  //           router.push("/login");
  //           return;
  //         }

  //         const response = await axios.get(
  //           "http://localhost:1501/umroh/user/getCustomer",
  //           {
  //             headers: {
  //               Authorization: `Bearer ${authToken}`,
  //             },
  //           }
  //         );

  //         const result = response.data.result;

  //         // Assuming the API response structure includes user's name and additionalInfo
  //         setUserData(result);
  //       } catch (error) {
  //         console.error("Error fetching user data", error);

  //         if (error.response && error.response.status === 401) {
  //           console.log("Token is invalid. Redirecting to login...");

  //           router.push("/login");
  //         }
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>From Store</TableColumn>
          <TableColumn>Transaction Date</TableColumn>
          <TableColumn>Total Amount</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>TOKO0001</TableCell>
            <TableCell>Cempaka Putih</TableCell>
            <TableCell>gatau lupa tanggal berapa</TableCell>
            <TableCell>10000000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
