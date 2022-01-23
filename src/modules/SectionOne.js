import React from 'react';
import { Select, DatePicker, Radio, Button } from 'antd';
import { Sections } from '../component';
import { Col, Form, Row } from 'react-bootstrap';
import { PlusOutlined, MinusOutlined, SearchOutlined } from '@ant-design/icons';

const SectionOne = () => {
  const { Option } = Select;
  const onChange = (value) => console.log(`selected ${value}`);
  const onSearch = (val) => console.log('search:', val);

  return (
    <Sections className="section-one">
      <div className="content">
        <Row>
          <Col sm={6} lg={3}>
            <Form.Group className="form-group">
              <Form.Label>City</Form.Label>
              <Select
                showSearch
                placeholder="Select a city"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="lucy">Banglore</Option>
                <Option value="tom">Chennai</Option>
                <Option value="tom">Cochin</Option>
                <Option value="tom">Delhi</Option>
                <Option value="jack">Dubai</Option>
                <Option value="tom">Hydrabad</Option>
              </Select>
            </Form.Group>
          </Col>
          <Col sm={6} lg={4}>
            <div className="date-box">
              <Form.Group className="form-group">
                <Form.Label>Check in</Form.Label>
                <DatePicker placeholder="Add dates" />
              </Form.Group>

              <Form.Group className="form-group">
                <Form.Label>Check out</Form.Label>
                <DatePicker placeholder="Add dates" />
              </Form.Group>
            </div>
          </Col>
          <Col lg={5}>
            <Row>
              <Col sm={6}>
                <Form.Group className="form-group">
                  <Form.Label>Guests</Form.Label>
                  <div className="btn-group">
                    <p>Add guests</p>
                    <Radio.Group>
                      <Radio.Button>
                        <MinusOutlined />
                      </Radio.Button>
                      <Radio.Button>
                        <PlusOutlined />
                      </Radio.Button>
                    </Radio.Group>
                  </div>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="form-group">
                  <Button className="btn-search">
                    <SearchOutlined />
                    Search
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Sections>
  );
};

export default SectionOne;
