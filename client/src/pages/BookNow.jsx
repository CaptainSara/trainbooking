import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { ShowLoading, HideLoading } from '../redux/alertsSlice'
import { axiosInstance } from '../axiosInstance'
import { message, Row, Col, Button } from 'antd'
import {useParams} from "react-router-dom"
import SeatSelection from '../components/SeatSelection'



function BookNow() {
  const [selectedSeats, setSelectedSeats] = useState([])
  const params = useParams()
  const dispatch = useDispatch()
  const [train, setTrain] = useState(null)

  const getTrain = async () => {
    try {
      dispatch(ShowLoading())
      const response = await axiosInstance.post("/api/trains/get-train-by-id", {
        _id: params.id,
      })
      dispatch(HideLoading())
      if (response.data.success) {
        setTrain(response.data.data)
      } else {
        message.error(response.data.message)
      }
    } catch (error) {
      dispatch(HideLoading())
      message.error(error.message)
    }
  }

  const bookNow = async () => {
    try {
      dispatch(ShowLoading())
      const response = await axiosInstance.post("/api/bookings/book-seat", {
        train: train._id,
        seats: selectedSeats,
      })
      dispatch(HideLoading())
      if (response.data.success) {
        message.success(response.data.message)
      } else {
        message.error(response.data.message)
      }
    } catch (error) {
      dispatch(HideLoading())
      message.error(error.message)
    }
  }

   useEffect(() => {
    getTrain()
  }, [])
  return (
    <div>
      { train && (
        <Row className="mt-3" gutter={20}>
          <Col lg={ 12 } xs={ 24 } sm={ 24 }>
            <h1 className="text-2xl text-secondary">
              <b>{ train.name }</b>
            </h1>
            <h1 className="text-md text-secondary">
              {train.from} - {train.to}
            </h1>
            <hr />
            
            <div className="flex flex-col gap-1">
              <h1 className="text-lg"><b>Datum</b> : { train.journeyDate.slice(0, 10) }</h1>
              <h1 className="text-lg"><b>Pris</b> : { train.price } SEK</h1>
              <h1 className="text-lg"><b>Avgångstid</b> : { train.departure } </h1>
              <h1 className="text-lg"><b>Ankomst tid</b> : { train.arrival } </h1>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">
                <b>Selected seat</b> : {selectedSeats.join(", ")}
              </h1>
              <h1 className="text-xl mt-2">Total kostnad: <b>{ train.price * selectedSeats.length } kr</b></h1>
              <Button className='mt-3' onClick={bookNow} >Boka</Button>
          </div>
          </Col>
          <Col lg={ 12 } xs={ 24 } sm={ 24 }>
            <SeatSelection
              selectedSeats={ selectedSeats }
              setSelectedSeats={ setSelectedSeats }
              train={train}
            />
        </Col>
      </Row>
      )}
    </div>
  )
}

export default BookNow
