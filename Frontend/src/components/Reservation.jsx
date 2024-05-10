import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://restaurant-bckend.onrender.com/api/v1/reservation/send",
        { firstName, lastName, email, phone, time, date },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensure credentials are sent with the request
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone(0);
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      // If there's an error, display it properly
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        toast.error(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("Network error. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an error
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}> {/* Use onSubmit event */}
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit"> {/* Remove onClick and add type="submit" */}
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;















// import React from "react";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import axios from "axios";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Reservation = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState(0);
//   const [time, setTime] = useState("");
//   const [date, setDate] = useState("");
//   const navigate = useNavigate();

//   const handleReservation = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/api/v1/reservation/send",
//         { firstName, lastName, email, phone, time,date },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       toast.success(data.message);
//       setFirstName("");
//       setLastName("");
//       setEmail("");
//       setPhone(0);
//       setTime("");
//       setDate("");
//       navigate("/success");
//     } catch (error) {
//       toast.error(error);
//     }
//   };

//   return (
//     <section className="reservation" id="reservation">
//       <div className="container">
//         <div className="banner">
//           <img src="/reservation.png" alt="res" />
//         </div>
//         <div className="banner">
//           <div className="reservation_form_box">
//             <h1>MAKE A RESERVATION</h1>
//             <p>For Further Questions, Please Call</p>
//             <form>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="date"
//                   placeholder="Date"
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                 />
//                 <input
//                   type="time"
//                   placeholder="Time"
//                   value={time}
//                   onChange={(e) => setTime(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="email_tag"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                   type="number"
//                   placeholder="Phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </div>
//               <button type="submit" onClick={handleReservation}>
//                 RESERVE NOW{" "}
//                 <span>
//                   <HiOutlineArrowNarrowRight />
//                 </span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reservation;
