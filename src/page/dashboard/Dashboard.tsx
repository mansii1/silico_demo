import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Icon,
} from "semantic-ui-react";
import "./dashboard.css";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/Context";
import BookSeatForm from "../../components/BookSeatForm";
import FormDialog from "../../components/FormDialog";
import { Seat } from "../../utils/interface";
import DeleteDilaloge from "../../components/DeleteDilaloge";

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
const Dashboard = () => {
  const context = useContext(MyContext);
  const [open, setOpen] = useState<boolean>(false);
  const [dOpen, setDOpen] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number>(0);

  const [seatObj, setSeatObj] = useState<Seat>({ ...obj });

  if (!context) {
    throw new Error("Context not available");
  }
  const { seatData, setSeatData } = context;

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("data") as string);
    if (storeData?.length) {
      setSeatData(storeData);
    }
  }, []);

  const deleteData = (seat_no: number) => {
    const data = seatData.map((e) => {
      if (e.seat_no == seat_no) {
        return {
          ...e,
          reserve: false,
          date_booking: "",
          passenger: { fname: "", lname: "", email: "" },
        };
      }
      return e;
    });
    setSeatData(data);
  };

  useEffect(() => {
    if (seatData.length) {
      localStorage.setItem("data", JSON.stringify(seatData));
    }
  }, [seatData]);

  const UpdateData = () => {
    const index = seatData.findIndex((e) => e.seat_no === seatObj.seat_no);
    const data = [...seatData];
    seatObj.reserve = true;
    data.splice(index, 1, seatObj);
    setSeatData(data);
  };

  console.log(seatObj, "seatobj");
  return (
    <div className="dashboard_contain">
      <div className="grid-container">
        {seatData.map((e: any) => {
          const d: Date = new Date(e.date_booking);
          if (e.reserve) {
            return (
              <>
                <Card>
                  <CardContent>
                    <CardHeader>
                      {e.passenger.fname} {e.passenger.lname}
                    </CardHeader>
                    <CardMeta>
                      <span className="date">{e.date_booking}</span>
                    </CardMeta>
                    <CardDescription>Seat Number : {e.seat_no}</CardDescription>
                  </CardContent>
                  <CardContent className="card_content">
                    <Button
                      color="facebook"
                      onClick={() => {
                        setSeatObj(e);
                        setOpen(true);
                      }}
                    >
                      <Icon name="edit" /> Edit
                    </Button>
                    <Button
                      color="red"
                      onClick={() => {
                        setDOpen(true);
                        setDeleteId(e.seat_no);
                      }}
                    >
                      <Icon name="trash" /> Delete
                    </Button>
                  </CardContent>
                </Card>
              </>
            );
          }
        })}
      </div>

      <FormDialog
        setOpen={setOpen}
        isEdit={true}
        UpdateData={UpdateData}
        TicketConfirm={() => {}}
        open={open}
        content={<BookSeatForm seatObj={seatObj} setSeatObj={setSeatObj} />}
      />

      <DeleteDilaloge
        setOpen={setDOpen}
        open={dOpen}
        deleteData={deleteData}
        deleteId={deleteId}
      />
    </div>
  );
};

export default Dashboard;
