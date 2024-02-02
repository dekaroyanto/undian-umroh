"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Button, Card, CardBody, Input } from "@nextui-org/react";

const MemberPage = () => {
  const [customerData, setCustomerData] = useState(null);
  const router = useRouter();
  const [refresh, setRefresh] = useState(0);

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

        setCustomerData(result);
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

  const forceRefresh = () => {
    setRefresh((prevRefresh) => prevRefresh + 1);
  };

  useEffect(() => {
    // Call forceRefresh on component mount to trigger initial refresh
    forceRefresh();
  }, []);

  return (
    <div className="justify-self-center">
      <div>
        <p className="font-semibold text-xl mb-5">Profile</p>
        {customerData && (
          <Card maxWidth="max-content">
            <CardBody>
              <div className="grid grid-cols-12 gap-2 col-span-12">
                <div className="col-span-12 md:col-span-6 mb-2">
                  <Input
                    readOnly
                    variant="bordered"
                    label="Name"
                    value={customerData.cust_name}
                  />
                </div>

                <div className="col-span-12 md:col-span-6 mb-2">
                  <Input
                    readOnly
                    variant="bordered"
                    label="NIK"
                    value={customerData.cust_nik}
                  />
                </div>

                <div className="col-span-12 md:col-span-6 mb-2">
                  <Input
                    readOnly
                    variant="bordered"
                    label="Address"
                    value={customerData.cust_address}
                  />
                </div>

                <div className="col-span-12 md:col-span-6 mb-2">
                  <Input
                    readOnly
                    variant="bordered"
                    label="Birth"
                    value={customerData.birth}
                  />
                </div>

                <div className="col-span-12 md:col-span-6 mb-2">
                  <Input
                    readOnly
                    variant="bordered"
                    label="Gender"
                    value={customerData.cust_gender}
                  />
                </div>

                <div className="col-span-12 md:col-span-6 mb-2">
                  <Input
                    readOnly
                    variant="bordered"
                    label="Religion"
                    value={customerData.cust_agama}
                  />
                </div>

                <div className="col-span-12 md:col-span-6 mb-2">
                  <Input
                    readOnly
                    variant="bordered"
                    label="Phone Number"
                    value={customerData.cust_hp}
                  />
                </div>

                <div className="col-span-12 md:col-span-6 mb-2">
                  <Input
                    readOnly
                    variant="bordered"
                    label="Email"
                    value={customerData.cust_email}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MemberPage;
