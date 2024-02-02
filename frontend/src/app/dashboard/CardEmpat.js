import { Card, CardBody } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const CardEmpat = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [totalPoint, setTotalPoint] = useState(0);
  const [totalUndian, setTotalUndian] = useState(0);
  const [refresh, setRefresh] = useState(0);
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
          "http://10.21.9.213:1501/umroh/hist/getHistory",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setTransactionData(response.data.result);

        const sum = response.data.result.reduce((acc, transaction) => {
          return acc + parseInt(transaction.point);
        }, 0);

        setTotalPoint(sum);

        const additionalUndian = Math.floor(sum / 25);
        setTotalUndian(additionalUndian);
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
  return (
    <Card className="xl:max-w-slg bg-gray-400 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          {/* <Community /> */}
          <div className="flex flex-col">
            <span className="text-white">Total Undian</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">
            {totalUndian} Undian
          </span>
        </div>
      </CardBody>
    </Card>
  );
};
