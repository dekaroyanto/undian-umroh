import { useState, useEffect } from "react";

import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import axios from "axios";

import * as Yup from "yup";

import Image from "next/image";
import DeleteIcon from "@/assets/icons/trash-icon.svg";

import { SetColorStatus } from "@/utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { genderList } from "./optionList";

const initialValues = {
  cust_nik: "",
  cust_name: "",
  cust_gender: "",
  cust_agama: "",
  cust_birth_place: "",
  cust_birth_date: "",
  cust_hp: "",
  password: "",
  cust_email: "",
  cust_address: "",
};

export default function Personal() {
  const genderOption = [
    { value: "L", label: "Laki-laki" },
    { value: "P", label: "Perempuan" },
  ];

  const agamaOption = [
    { value: "Islam", label: "Islam" },
    { value: "Kristen Protestan", label: "Kristen Protestan" },
    { value: "Kristen Katholik", label: "Kristen Katholik" },
    { value: "Buddha", label: "Buddha" },
    { value: "Hindu", label: "Hindu" },
    { value: "Konghucu", label: "Konghucu" },
  ];

  const [agree, setAgree] = useState(false);

  const router = useRouter();
  const [options, setOptions] = useState([]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "http://10.21.9.213:1501/umroh/user/register",
        values
      );

      resetForm();
      toast.success("Account Success Created");
      router.push("/signup");
      console.log("Data berhasil dikirim:", response.data);
      router.push("/login");
    } catch (error) {
      if (error.response && error.response.data) {
        const { code, message, type } = error.response.data;

        if (code === 2 && type === "error") {
          // Group name already exists error
          const groupName = message.split("'")[1];
          toast.error(`Phone Number already exists`);
        } else {
          // Handle other errors
          toast.error(`Error: ${message}`);
        }
      } else {
        console.error("Error saat mengirim data:", error);
        toast.error("Gagal menambahkan data.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
              cust_nik: Yup.string()
                .min(16, "NIK must be at least 16 characters")
                .max(16, "NIK must be at most 16 characters")
                .required("NIK is required"),
              cust_name: Yup.string().required("Full Name is required"),
              cust_gender: Yup.string().required("Gender is required"),
              cust_address: Yup.string().required("Address is required"),
              cust_agama: Yup.string().required("Agama is required"),
              cust_birth_place: Yup.string().required(
                "Birth Place is required"
              ),
              cust_birth_date: Yup.string().required("Birth Date is required"),
              cust_hp: Yup.string().required("Phone Number is required"),
              cust_email: Yup.string()
                .required("Email is required")
                .email("Invalid email format"),
              password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Password is required"),
              agree: Yup.boolean().oneOf([true], "You must agree to continue"),
            })}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <Form className="py-10">
                <div className="grid grid-cols-12">
                  <div className="grid grid-cols-12 gap-2 col-span-12">
                    <div className="col-span-12 md:col-span-6 mb-2">
                      <Input
                        isRequired
                        size="sm"
                        label="Full Name"
                        variant="bordered"
                        name="cust_name"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.cust_name}
                        isInvalid={
                          (props.touched.cust_name &&
                            !!props.errors.cust_name) ||
                          (!props.values.cust_name && props.touched.cust_name)
                        }
                      />
                      <ErrorMessage
                        name="cust_name"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div className="col-span-12 md:col-span-6 mb-2">
                      <Input
                        isRequired
                        type="number"
                        size="sm"
                        label="NIK"
                        variant="bordered"
                        name="cust_nik"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.cust_nik}
                        isInvalid={
                          (props.touched.cust_nik && !!props.errors.cust_nik) ||
                          (!props.values.cust_nik && props.touched.cust_nik)
                        }
                      />
                      <ErrorMessage
                        name="cust_nik"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div className="col-span-12 md:col-span-6 mb-2 ">
                      <Select
                        isRequired
                        size="sm"
                        label="Gender"
                        variant="bordered"
                        name="cust_gender"
                        onChange={props.handleChange}
                        value={props.values.cust_gender}
                        isInvalid={
                          (props.touched.cust_gender &&
                            !!props.errors.cust_gender) ||
                          (!props.values.cust_gender &&
                            props.touched.cust_gender)
                        }
                      >
                        {genderOption.map((gender) => (
                          <SelectItem key={gender.value} value={gender.value}>
                            {gender.label}
                          </SelectItem>
                        ))}
                      </Select>
                      <ErrorMessage
                        name="cust_gender"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div className="col-span-12 md:col-span-6 mb-2">
                      <Select
                        isRequired
                        size="sm"
                        label="Agama"
                        variant="bordered"
                        name="cust_agama"
                        onChange={props.handleChange}
                        value={props.values.cust_agama}
                        isInvalid={
                          (props.touched.cust_agama &&
                            !!props.errors.cust_agama) ||
                          (!props.values.cust_agama && props.touched.cust_agama)
                        }
                      >
                        {agamaOption.map((agama) => (
                          <SelectItem key={agama.value} value={agama.value}>
                            {agama.label}
                          </SelectItem>
                        ))}
                      </Select>
                      <ErrorMessage
                        name="cust_agama"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div className="col-span-12 md:col-span-6 mb-2 ">
                      <Input
                        isRequired
                        size="sm"
                        label="Birth Place"
                        variant="bordered"
                        name="cust_birth_place"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.cust_birth_place}
                        isInvalid={
                          (props.touched.cust_birth_place &&
                            !!props.errors.cust_birth_place) ||
                          (!props.values.cust_birth_place &&
                            props.touched.cust_birth_place)
                        }
                      />
                      <ErrorMessage
                        name="cust_birth_place"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div className="col-span-12 md:col-span-6 mb-2">
                      <Input
                        isRequired
                        type="date"
                        size="sm"
                        label="Birth Date"
                        variant="bordered"
                        placeholder="Enter your birth date"
                        name="cust_birth_date"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.cust_birth_date}
                        isInvalid={
                          (props.touched.cust_birth_date &&
                            !!props.errors.cust_birth_date) ||
                          (!props.values.cust_birth_date &&
                            props.touched.cust_birth_date)
                        }
                      />
                      <ErrorMessage
                        name="cust_birth_date"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div className="col-span-12 md:col-span-6 mb-2">
                      <Input
                        isRequired
                        type="number"
                        size="sm"
                        label="Phone Number"
                        variant="bordered"
                        onBlur={props.handleBlur}
                        name="cust_hp"
                        onChange={(e) => {
                          const stringValue = e.target.value.toString();
                          props.handleChange({
                            target: {
                              name: "cust_hp",
                              value: stringValue,
                            },
                          });
                        }}
                        value={props.values.cust_hp}
                        isInvalid={
                          (props.touched.cust_hp && !!props.errors.cust_hp) ||
                          (!props.values.cust_hp && props.touched.cust_hp)
                        }
                      />
                      <ErrorMessage
                        name="cust_hp"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div className="col-span-12 md:col-span-6 mb-2">
                      <Input
                        isRequired
                        type="email"
                        size="sm"
                        label="Email"
                        variant="bordered"
                        name="cust_email"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.cust_email}
                        isInvalid={
                          (props.touched.cust_email &&
                            !!props.errors.cust_email) ||
                          (!props.values.cust_email && props.touched.cust_email)
                        }
                      />
                      <ErrorMessage
                        name="cust_email"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div className="col-span-12 md:col-span-6 mb-2">
                      <Input
                        isRequired
                        type="password"
                        size="sm"
                        label="Password"
                        variant="bordered"
                        name="password"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.password}
                        isInvalid={
                          (props.touched.password && !!props.errors.password) ||
                          (!props.values.password && props.touched.password)
                        }
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div className="col-span-12 md:col-span-6 mb-2">
                      <Input
                        isRequired
                        size="sm"
                        label="Address"
                        variant="bordered"
                        name="cust_address"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.cust_address}
                        isInvalid={
                          (props.touched.cust_address &&
                            !!props.errors.cust_address) ||
                          (!props.values.cust_address &&
                            props.touched.cust_address)
                        }
                      />
                      <ErrorMessage
                        name="cust_address"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <Checkbox checked={agree} onChange={() => setAgree(!agree)}>
                    <p className="text-center text-sm text-gray-500">
                      I agree to the terms and conditions
                    </p>
                  </Checkbox>

                  <ErrorMessage
                    name="agree"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <Button
                  color="primary"
                  radius="sm"
                  className={`w-full mt-4 font-semibold hover:bg-secondary ${
                    !agree ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  onPress={props.handleSubmit}
                  isDisabled={!agree}
                >
                  Register
                </Button>
                <p className="mt-5 text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <span
                    className="font-semibold leading-6 text-black-500 hover:text-red-500 cursor-pointer"
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    Login Now!
                  </span>
                </p>
              </Form>
            )}
          </Formik>
        </motion.div>
      </>
    </div>
  );
}
