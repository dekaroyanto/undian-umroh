import { Card, CardBody } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const CardSatu = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

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

        // Assuming the API response structure includes user's name and additionalInfo
        setUserData(result);
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

  return (
    <div>
      <Card className="bg-red-500 rounded-xl shadow-md px-3 w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto">
        <CardBody className="py-5">
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center gap-2.5">
            <div className="flex flex-col">
              <h1 className="text-white text-3xl">
                Selamat Datang, {userData ? userData.cust_name : "Loading..."}
              </h1>
            </div>
          </div>
          <div className="flex gap-2.5 py-2 items-center">
            <span className="text-white text-sm">
              Selamat datang di Aplikasi "Umroh Bisikan Hati Ibu" oleh
              Transmart. Aplikasi ini dirancang khusus untuk memudahkan Anda
              dalam melihat total transaksi selama Program Undian Umroh. Dengan
              Aplikasi ini, kami berkomitmen memberikan pengalaman yang nyaman
              dan transparan dalam memantau selama program berlangsung.
            </span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
