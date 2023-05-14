import React from 'react'
import { Row, Col } from "antd"
import "../style/train.css"

function SeatSelection({
  selectedSeats,
  setSelectedSeats,
  train
}) {

  const capacity = train.capacity
  const selectOrUnselectSeats = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber))
    } else {
      setSelectedSeats([...selectedSeats, seatNumber])
    }
  }
  
  return (
    <div>
      <div className="train-container">
        <Row gutter={[10,10]}>
          { Array.from(Array(capacity).keys()).map((seat) => {
            let seatClass = ""
            if (selectedSeats.includes(seat + 1)) {
              seatClass = "selected-seat"
            } else if (train.seatsBooked.includes(seat + 1))  {

            }
              return <Col span={ 6 }>
              <div className={`seat ${seatClass}`} onClick={() => selectOrUnselectSeats(seat+1)}>
                {seat + 1}
              </div>
            </Col>
            }
          )}
        </Row>
      </div>
    </div>
  )
}

export default SeatSelection
