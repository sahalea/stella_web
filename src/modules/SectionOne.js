import React, { useState } from 'react';
import { Select } from 'antd';
import { Sections } from '../component';
import {
  Col,
  Form,
  Row,
  ButtonGroup,
  Button,
  Tabs,
  Tab,
  Nav,
} from 'react-bootstrap';
import { PlusOutlined, MinusOutlined, SearchOutlined } from '@ant-design/icons';
import Calendar from 'react-calendar';

const SectionOne = () => {
  const [guest, setGuest] = useState(0);
  const [isCalandar, setCalandar] = useState(false);
  const { Option } = Select;
  const [value, handleCalandar] = useState(new Date());
  const [month, setMonth] = useState(0);
  const [activeTab, setActiveTab] = useState('');

  const openClander = () => setCalandar(isCalandar === true ? false : true);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Decemnber',
  ];

  const handleActiveTab = (name) => {
    if (activeTab === name) setActiveTab('');
    else setActiveTab(name);
  };

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
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="dubai">Dubai</Option>
                <Option value="montreal">Montreal</Option>
                <Option value="manama">Manama</Option>
              </Select>
            </Form.Group>
          </Col>
          <Col sm={6} lg={4}>
            <Form.Group
              className={`form-group date-box ${isCalandar && ' open'}`}
            >
              <div className="lable-wrap" onClick={openClander}>
                <Row>
                  <Col sm={12}>
                    <Form.Label>Dates</Form.Label>
                    <span className="calder-click">Select dates.</span>
                  </Col>
                </Row>
              </div>
            </Form.Group>
          </Col>
          <Col lg={5}>
            <Row>
              <Col sm={6}>
                <Form.Group className="form-group">
                  <Form.Label>Guests</Form.Label>
                  <div className="btn-group-wrap">
                    <p>{guest > 0 ? `${guest} guest` : 'Add guests'}</p>
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        onClick={(e) => {
                          if (guest > 1) {
                            setGuest(guest - 1);
                          }
                        }}
                      >
                        <MinusOutlined />
                      </Button>
                      <Button onClick={(e) => setGuest(guest + 1)}>
                        <PlusOutlined />
                      </Button>
                    </ButtonGroup>
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
        {isCalandar && (
          <div className="tab-wrap">
            <Tabs defaultActiveKey="calandar" id="main-tab">
              <Tab eventKey="calandar" title="Calandar">
                <div className="calendar-wrap">
                  <Calendar
                    allowPartialRange={true}
                    onChange={handleCalandar}
                    value={value}
                    showDoubleView={true}
                  />
                </div>
              </Tab>
              <Tab eventKey="flexible" title="Flexible">
                <div className="sub-tab-wrap">
                  <Tab.Container
                    id="subtable"
                    defaultActiveKey="first"
                    className="sub-tab"
                  >
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <p>
                          {' '}
                          Stay for a <b>weekend</b>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          {' '}
                          Stay for a <b>week</b>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          {' '}
                          Stay for a <b>month</b>
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                    <Nav variant="pills" className="flex-row">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Weekend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Week</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Month</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Tab.Container>
                  <h3>
                    Go in <b>January</b>
                  </h3>
                  <div className="details">
                    <span>
                      <em>2022</em>
                    </span>
                    <ul>
                      {months.map((items, i) => {
                        const isActive = month === i ? 'active' : '';
                        return (
                          <li
                            className={isActive}
                            key={i}
                            onClick={() => setMonth(i)}
                          >
                            {items}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </Tab>
            </Tabs>
            <ButtonGroup>
              <Button variant="clear">Clear</Button>
              <Button variant="apply" onClick={openClander}>
                Apply dates
              </Button>
            </ButtonGroup>
          </div>
        )}
      </div>
    </Sections>
  );
};

export default SectionOne;
