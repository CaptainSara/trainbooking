import { Col, Form, Row, message } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { axiosInstance } from '../axiosInstance'
import { HideLoading, ShowLoading } from '../redux/alertsSlice'

function AddTrains({ type = "add" }) {

  const dispatch = useDispatch()
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading())
      let response = null
      if (type === "add") {
        response = await axiosInstance.post("/api/trains/add-train", values)
      } else {

      }
      if (response.data.success) {
        message.success(response.data.message)
      } else {
        message.error(response.data.message)
      }
      dispatch(HideLoading())
    } catch (error) {
      message.error(error.message)
      dispatch(HideLoading())
      
    }
  }
  return (
    <div>
      <h1>Add Buss Form</h1>
      <Form layout='vertical' onFinish={ onFinish}>
        <Row gutter={[10,10]}>
          <Col lg={24} xs={24}>
            <Form.Item label="Train Name" name="name">
              <input type="text"/>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Train Number" name="number">
              <input type="text"/>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Capacity" name="capacity">
              <input type="text"/>
            </Form.Item>
          </Col>

          <Col lg={12} xs={24}>
            <Form.Item label="From" name="from">
              <input type="text"/>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="To" name="to">
              <input type="text"/>
            </Form.Item>
          </Col>

          <Col lg={8} xs={24}>
            <Form.Item label="Journey Date" name="journeyDate">
              <input type="date"/>
            </Form.Item>
          </Col>
          <Col lg={8} xs={24}>
            <Form.Item label="Departure" name="departure">
              <input type="text"/>
            </Form.Item>
          </Col>
          <Col lg={ 8 } xs={ 24 }>
            <Form.Item label="Arrival" name="arrival">
              <input type="text"/>
            </Form.Item>
          </Col>

          <Col lg={12} xs={24}>
            <Form.Item label="Type" name="type">
              <input type="text"/>
            </Form.Item>
          </Col>
          <Col lg={12} xs={24}>
            <Form.Item label="Price" name="price">
              <input type="text"/>
            </Form.Item>
          </Col>
        
        </Row>
        <div className="d-flex justify-content-end">
          <button type="submit">
            Save
          </button>
        </div>
      </Form>
    </div>
  )
}

export default AddTrains
