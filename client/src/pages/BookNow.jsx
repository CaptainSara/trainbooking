import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { ShowLoading, HideLoading } from '../redux/alertsSlice'
import { axiosInstance } from '../axiosInstance'
import { message, Row, Col } from 'antd'
import {useParams} from "react-router-dom"
import SeatSelection from '../components/SeatSelection'



function BookNow() {
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

   useEffect(() => {
    getTrain()
  }, [])
  return (
    <div>
      { train && (
        <Row className="mt-3">
          <Col lg={ 12 } xs={ 24 } sm={ 24 }>
            <h1 className="text-2xl text-secondary">
              <b>{ train.name }</b>
            </h1>
            <h1 className="text-md text-secondary">
              {train.from} - {train.to}
            </h1>
            <hr />
            
            <div>
              <h1 className="text-lg"><b>Datum</b> : { train.journeyDate.slice(0, 10) }</h1>
              <h1 className="text-lg"><b>Pris</b> : { train.price } SEK</h1>
              <h1 className="text-lg"><b>Avgångstid</b> : { train.departure } </h1>
              <h1 className="text-lg"><b>Ankomst tid</b> : { train.arrival } </h1>
            </div>
          </Col>
          <Col lg={ 12 } xs={ 24 } sm={ 24 }>
            <SeatSelection/>
        </Col>
      </Row>
      )}
    </div>
  )
}

export default BookNow
