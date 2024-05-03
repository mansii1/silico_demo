import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Button, Form, FormField } from "semantic-ui-react";
import "./form.css";
import { Seat } from "../utils/interface";
import { DateTimeInput } from "semantic-ui-calendar-react";

interface BookSeatFormProps {
  seatObj: Seat;
  setSeatObj: Dispatch<SetStateAction<Seat>>;
}

const BookSeatForm: React.FC<BookSeatFormProps> = ({ setSeatObj, seatObj }) => {
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSeatObj({
      ...seatObj,
      passenger: { ...seatObj.passenger, [name]: value },
    });
  };

  const handleChangeDate = (e: any, { name, value }: any) => {
    setSeatObj({
      ...seatObj,
      [name]: value,
    });
  };

  return (
    <>
      <Form className="form">
        <FormField>
          <label>First Name</label>
          <input
            placeholder="First Name"
            name="fname"
            value={seatObj.passenger.fname}
            onChange={(e) => handleChange(e)}
          />
        </FormField>
        <FormField>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            name="lname"
            value={seatObj.passenger.lname}
            onChange={(e) => handleChange(e)}
          />
        </FormField>
        <FormField>
          <label>Email</label>
          <input
            placeholder="Email"
            value={seatObj.passenger.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </FormField>
        <FormField>
          <label>Date of booking</label>
          <DateTimeInput
            name="date_booking"
            placeholder="Date Time"
            value={seatObj.date_booking}
            iconPosition="left"
            onChange={(e, { name, value }) =>
              handleChangeDate(e, { name, value })
            }
          />
        </FormField>
      </Form>
    </>
  );
};

export default BookSeatForm;
