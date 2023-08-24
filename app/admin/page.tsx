"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/home/SectionTitle";
import { NextPage } from "next";
import { CustomerType } from "@/types";
import { formatDate } from "@/lib/formatData";

interface Props {}

const AdminPage: NextPage<Props> = () => {
  const [customers, setCustomers] = useState<CustomerType[]>([]);

  const fetchCustomers = () => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/customer`)
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      });
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="container py-9">
      <SectionTitle text="Thông tin người gửi form" />
      <div className="tableContent">
        <table className="w-3/4 my-8 mx-auto text-center">
          <tr className="uppercase font-bold">
            <td>STT</td>
            <td>Họ tên</td>
            <td>Số điện thoại</td>
            <td>Loại xe</td>
            <td>Thời gian</td>
          </tr>

          {customers.map((customer, index) => (
            <tr key={customer._id.toString()}>
              <td>{index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.carType}</td>
              <td>{formatDate(customer.createdAt)}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
