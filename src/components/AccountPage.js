import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { CaretRight, TrashSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/accountPage.scss";
const addresses = [
  {
    city: "Bucharest",
    a1: "Sector 2",
    a2: "Popa Soare 64",
  },
  {
    city: "Bucharest",
    a1: "Sector 2",
    a2: "Popa Soare 64",
  },
];

const orders = [
  {
    s1: true,
    s2: true,
    date: "24/07/22",
    id: 213,
  },
  {
    s1: true,
    s2: true,
    date: "24/07/22",
    id: 213,
  },
  {
    s1: true,
    s2: true,
    date: "24/07/22",
    id: 213,
  },
];

export default function AccountPage() {
  const [orders, setOrders] = useState(null);
  const [visible, setVisible] = useState(null);
  let navigate = useNavigate();

  function logout() {
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("user_id");
    navigate("/login");
  }

  useEffect(() => {
    axios
      .post("http://localhost:3001/postsession", null, {
        params: {
          user_id: localStorage.getItem("user_id"),
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("sent new session");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getuserorders", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt_token"),
        },
        params: {
          user_id: localStorage.getItem("user_id"),
        },
      })
      .then((response) => {
        // console.log(response.data[0]);
        setOrders(response.data[0]);
        setVisible(true);
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
    return () => {
      setVisible(null);
    };
  }, []);

  return (
    <div className="account page">
      <Navbar />
      {visible ? (
        <>
          {" "}
          <div className="accountBar">
            <div>
              <p>
                Welcome
                {localStorage.getItem("user_name")
                  ? ", " + localStorage.getItem("user_name")
                  : ""}
              </p>
            </div>
            <div
              className="accountLogout"
              onClick={() => {
                logout();
              }}
            >
              <p>Log out</p>
            </div>
          </div>
          <div className="accountContent">
            <div className="accountData">
              <p className="title">Change your account data</p>
              <div className="form">
                <input
                  type="email"
                  className="email"
                  placeholder={`Email: email@gmail.com`}
                />
                <input
                  type="text"
                  className="name"
                  placeholder={`Name: name`}
                />
                <input
                  type="text"
                  className="surname"
                  placeholder={`Surname: surname`}
                />
                <button className="change">
                  <p>Change</p>
                  <CaretRight size={20} />
                </button>
                <Link to="/">
                  <div className="changePass">
                    <p>I want to change my password</p>
                    <CaretRight size={18} />
                  </div>
                </Link>
              </div>
            </div>

            <div className="accountAddresses">
              <p className="title">Your addresses</p>
              <div className="grid">
                {addresses.map((address, id) => (
                  <div className="address" key={id}>
                    <div>
                      <p>{address.city}</p>
                    </div>

                    <div>
                      <p>{address.a1}</p>
                    </div>

                    <div>
                      <p>{address.a2}</p>
                    </div>

                    <button>
                      <TrashSimple size={27} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="accountOrders">
              <p className="title">Your orders</p>
              <div className="grid">
                {orders &&
                  orders.map((order, id) => (
                    <div className="order" key={id}>
                      <div className="payment">
                        <p className="tag">Payment status:</p>
                        <p>{order.s1 ? "Received" : "Pending"}</p>
                      </div>
                      <div className="delivery">
                        <p className="tag">Delivery status:</p>
                        <p>{order.s2 ? "Delivered" : "On its way"}</p>
                      </div>
                      <div className="date">{order.date}</div>
                      <div className="id">#{order.order_id}</div>
                      <div className="line" />
                      <div className="showProducts">
                        <p>See ordered products</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
