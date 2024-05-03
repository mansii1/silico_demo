import React from "react";
import { RenderSeatProps } from "../utils/interface";

const RenderSeat: React.FC<RenderSeatProps> = ({
  seatData,
  handleOnSeatClick,
  upper,
}) => {
  return (
    <>
      <div className="seats">
        <div className="first_contain">
          {!upper ? (
            <img
              src={
                "https://t4.ftcdn.net/jpg/06/28/44/49/360_F_628444934_ipJ8zype0JyXuytfi0Szxv14P85EpWyJ.jpg"
              }
              className="image"
            />
          ) : (
            <div className="first"></div>
          )}
        </div>
        <div className="second_contain">
          <div className="seat">
            {seatData?.map((e: any) => {
              if (e.window === true && e.single === false && e.last === false) {
                return (
                  <>
                    <div
                      className={e.reserve ? "bus_seat_disabled" : "bus_seat"}
                      onClick={() => handleOnSeatClick(e.seat_no)}
                    ></div>
                  </>
                );
              }
            })}
          </div>

          <div className="seat">
            {seatData?.map((e) => {
              if (
                e.window === false &&
                e.single === false &&
                e.last === false
              ) {
                return (
                  <>
                    <div
                      className={e.reserve ? "bus_seat_disabled" : "bus_seat"}
                      onClick={() => handleOnSeatClick(e.seat_no)}
                    ></div>
                  </>
                );
              }
            })}
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="seat">
            {seatData?.map((e) => {
              if (e.window === true && e.single === true && e.last === false) {
                return (
                  <>
                    <div
                      className={e.reserve ? "bus_seat_disabled" : "bus_seat"}
                      onClick={() => handleOnSeatClick(e.seat_no)}
                    ></div>
                  </>
                );
              }
            })}
          </div>
        </div>
        <div className="third_conatain">
          {seatData?.map((e) => {
            if (e.window === false && e.single === false && e.last === true) {
              return (
                <>
                  <div
                    className={e.reserve ? "last_seat_disabled" : "last_seat"}
                    onClick={() => handleOnSeatClick(e.seat_no)}
                  ></div>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default RenderSeat;
