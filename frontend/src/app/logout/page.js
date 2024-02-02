"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
} from "@nextui-org/react";

import { FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    handleLogout();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");

    router.push("/login");
  };

  return (
    <>
      <p>Sign Out</p>
    </>
  );
}
