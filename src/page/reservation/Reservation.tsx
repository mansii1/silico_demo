import "./reservation.css";
import { useContext, useEffect, useState } from "react";
import { Seat } from "../../utils/interface";
import { seat_data } from "../../utils/common_data";
import FormDialog from "../../components/FormDialog";
import RenderSeat from "../../components/RenderSeat";
import BookSeatForm from "../../components/BookSeatForm";
import { MyContext } from "../../context/Context";

const obj = {
  seat_no: 0,
  passenger: { fname: "", lname: "", email: "" },
  date_booking: "",
  upper: true,
  single: false,
  window: false,
  last: true,
  reserve: false,
};
const Reservation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [seatObj, setSeatObj] = useState<Seat>({ ...obj });
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("Context not available");
  }
  const { seatData, setSeatData } = context;

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("data") as string);
    console.log(storeData, "storeData");
    if (storeData?.length) {
      setSeatData(storeData);
    } else {
      setSeatData(seat_data);
    }
  }, []);

  useEffect(() => {
    if (seatData.length) {
      localStorage.setItem("data", JSON.stringify(seatData));
    }
  }, [seatData]);

  const handleOnSeatClick = (seat_no: number) => {
    const selected_obj: any = seatData.find((e: any) => e.seat_no == seat_no);
    setSeatObj(selected_obj);
    setOpen(true);
  };

  const TicketConfirm = () => {
    const index = seatData.findIndex((e) => e.seat_no === seatObj.seat_no);
    const data = [...seatData];
    seatObj.reserve = true;
    data.splice(index, 1, seatObj);
    setSeatData(data);
  };

  return (
    <>
      <div className="main_container">
        <div className="bus">
          <div className="lower_deck">
            <div className="title">Lower Deck</div>
            <RenderSeat
              handleOnSeatClick={handleOnSeatClick}
              seatData={seatData.filter((e) => !e.upper)}
              upper={false}
            />
          </div>
          <div className="upper_deck">
            <div className="title">Upper Deck</div>
            <RenderSeat
              handleOnSeatClick={handleOnSeatClick}
              seatData={seatData.filter((e) => e.upper)}
              upper={true}
            />
          </div>
        </div>
      </div>
      <FormDialog
        setOpen={setOpen}
        isEdit={false}
        UpdateData={() => {}}
        TicketConfirm={TicketConfirm}
        open={open}
        content={<BookSeatForm seatObj={seatObj} setSeatObj={setSeatObj} />}
      />
    </>
  );
};

export default Reservation;
