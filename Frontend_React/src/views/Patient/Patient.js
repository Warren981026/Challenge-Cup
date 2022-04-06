import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { message, Card, Space, Collapse, Button, Divider } from 'antd';

const { Panel } = Collapse;
function callback(key) {
  console.log(key);
}
class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: this.props.patientInfo
    };
  }

  handleChange = (event) => {
    this.props.handleChange(event)
  }

  handleSelectChange = (event) => {
    this.props.handleSelectChange(event)
  }

  handleSave = () => {
    this.props.handleSave()
  }

  render() {
    const formData = this.state.formData;

    return (
      <div>
        <Row>
          {/* 患者姓名 */}
          <Form.Group className='mb-3' as={Col}>
            <Form.Label>患者姓名</Form.Label>
            <Form.Control
              placeholder='请输入患者姓名'
              value={formData.name}
              name="name"
              onChange={this.handleChange} />
          </Form.Group>

          {/* 患者性别 */}
          <Form.Group className='mb-3' as={Col}>
            <Form.Label>患者性别</Form.Label>
            <Form.Select
              placeholder='请选择患者性别'
              value={formData.gender}
              name="gender"
              onChange={this.handleSelectChange}>
              <option>请选择</option>
              <option>男</option>
              <option>女</option>
            </Form.Select>
          </Form.Group>
        </Row>

        {/* 病历号 */}
        <Form.Group className='mb-3'>
          <Form.Label>病历号</Form.Label>
          <Form.Control
            placeholder='请输入病历号'
            value={formData.patientID}
            name="patientID"
            onChange={this.handleChange}>
          </Form.Control>
        </Form.Group>

        <Row >
          {/* 第一次就诊年龄 */}
          <Form.Group className='mb-3' as={Col}>
            <Form.Label>首诊年龄</Form.Label>
            <Form.Control
              placeholder='首诊年龄（岁）'
              value={formData.firstVisitAge}
              name="firstVisitAge"
              onChange={this.handleChange} />
          </Form.Group>

          {/* 治疗时间 */}
          <Form.Group className='mb-3' as={Col}>
            <Form.Label>治疗时间</Form.Label>
            <Form.Control
              placeholder='治疗时间（天）'
              value={formData.treatTime}
              name="treatTime"
              onChange={this.handleChange} />
          </Form.Group>
        </Row>

        {/* 一行两个选项 */}
        <Row className='mb-3'>
          <Form.Group className='mb-3' as={Col}>
            <Form.Label>是否规律复查</Form.Label>
            <Form.Select
              name="isRegular"
              onChange={this.handleSelectChange}>
              <option>请选择</option>
              <option>是</option>
              <option>否</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>是否老师治疗</Form.Label>
            <Form.Select
              name="isTeacher"
              onChange={this.handleSelectChange}>
              <option>请选择</option>
              <option>是</option>
              <option>否</option>
            </Form.Select>
          </Form.Group>
        </Row>

        {/* <Row className='mb-3'>
          <Col className='d-grid gap-2'>
            <Button
              type='default'
              size='large'
              onClick={this.handleSave}
            >
              保存
            </Button>
          </Col>
        </Row> */}
      </div>
    );
  }
}


class Tooth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: 47,
      formData: this.props.teethArray
    };
  }

  handleTeethChange = (event) => {
    const focus = this.state.focus;
    this.props.handleTeethChange(focus, event)
  }


  handleTeethSave = () => {
    const focus = this.state.focus;
    this.props.handleTeethSave(focus)
  }

  changeFocus = (event) => {
    let index = event.target.value;
    this.setState({
      focus: index
    });
  }

  showFocus = () => {
    alert(JSON.stringify(this.props.teethArray[this.state.focus]));
  }
  render() {
    const validIndex = [47, 46, 45, 44, 43, 42, 41, 37, 36, 35, 34, 33, 32, 31, 27, 26, 25, 24, 23, 22, 21, 17, 16, 15, 14, 13, 12, 11];
    const validIndexItems = validIndex.map((number) =>
      <option key={number}>{number}</option>
    );
    const formData = this.state.formData;
    const focus = this.state.focus;
    return (
      <Form>
        <Row>
          <Form.Group className='mb-3'>
            <Form.Label>
              请选择牙齿编号
            </Form.Label>
            <Form.Select
              name="focus"
              onChange={this.changeFocus}
            >
              {validIndexItems}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@PD@DB</Form.Label>
            <Form.Control
              value={formData[focus].PD_DB}
              name="PD_DB"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@PD@B</Form.Label>
            <Form.Control
              value={formData[focus].PD_B}
              name="PD_B"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@PD@MB</Form.Label>
            <Form.Control
              value={formData[focus].PD_MB}
              name="PD_MB"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@PD@DL</Form.Label>
            <Form.Control
              value={formData[focus].PD_DL}
              name="PD_DL"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@PD@L</Form.Label>
            <Form.Control
              value={formData[focus].PD_L}
              name="PD_L"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@PD@ML</Form.Label>
            <Form.Control
              value={formData[focus].PD_ML}
              name="PD_ML"
              onChange={this.handleTeethChange} />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@FI@B</Form.Label>
            <Form.Control
              value={formData[focus].FI_B}
              name="FI_B"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@FI@L</Form.Label>
            <Form.Control
              value={formData[focus].FI_L}
              name="FI_L"
              onChange={this.handleTeethChange} />
          </Form.Group>

          {/* 字符串可能 */}
          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@动度</Form.Label>
            <Form.Control
              value={formData[focus].动度}
              name="动度"
              onChange={this.handleTeethChange} />
          </Form.Group>
        </Row>


        <Row>
          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@BI@DB</Form.Label>
            <Form.Control
              value={formData[focus].BI_DB}
              name="BI_DB"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@BI@B</Form.Label>
            <Form.Control
              value={formData[focus].BI_B}
              name="BI_B"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@BI@MB</Form.Label>
            <Form.Control
              value={formData[focus].BI_MB}
              name="BI_MB"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@BI@DL</Form.Label>
            <Form.Control
              value={formData[focus].BI_DL}
              name="BI_DL"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@BI@L</Form.Label>
            <Form.Control
              value={formData[focus].BI_L}
              name="BI_L"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@BI@ML</Form.Label>
            <Form.Control
              value={formData[focus].BI_ML}
              name="BI_ML"
              onChange={this.handleTeethChange} />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@溢脓@DB</Form.Label>
            <Form.Control
              value={formData[focus].溢脓_DB}
              name="溢脓_DB"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@溢脓@B</Form.Label>
            <Form.Control
              value={formData[focus].溢脓_B}
              name="溢脓_B"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@溢脓@MB</Form.Label>
            <Form.Control
              value={formData[focus].溢脓_MB}
              name="溢脓_MB"
              onChange={this.handleTeethChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@溢脓@DL</Form.Label>
            <Form.Control
              value={formData[focus].溢脓_DL}
              name="溢脓_DL"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@溢脓@L</Form.Label>
            <Form.Control
              value={formData[focus].溢脓_L}
              name="溢脓_L"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@溢脓@ML</Form.Label>
            <Form.Control
              value={formData[focus].溢脓_ML}
              name="溢脓_ML"
              onChange={this.handleTeethChange} />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@龈退缩@DB</Form.Label>
            <Form.Control
              value={formData[focus].龈退缩_DB}
              name="龈退缩_DB"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@龈退缩@B</Form.Label>
            <Form.Control
              value={formData[focus].龈退缩_B}
              name="龈退缩_B"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@龈退缩@MB</Form.Label>
            <Form.Control
              value={formData[focus].龈退缩_MB}
              name="龈退缩_MB"
              onChange={this.handleTeethChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@龈退缩@DL</Form.Label>
            <Form.Control
              value={formData[focus].龈退缩_DL}
              name="龈退缩_DL"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@龈退缩@L</Form.Label>
            <Form.Control
              value={formData[focus].龈退缩_L}
              name="龈退缩_L"
              onChange={this.handleTeethChange} />
          </Form.Group>

          <Form.Group className='mb-3' as={Col}>
            <Form.Label>@龈退缩@ML</Form.Label>
            <Form.Control
              value={formData[focus].龈退缩_ML}
              name="龈退缩_ML"
              onChange={this.handleTeethChange} />
          </Form.Group>
        </Row>


        {/* <Row className='mb-3'>
          <Col className='d-grid gap-2'>
            <Button
              type='default'
              size='large'
              onClick={this.showFocus}
            >
              Show Focus
            </Button>
          </Col>
        </Row> */}

        {/* <Row className='mb-3'>
          <Col className='d-grid gap-2'>
            <Button
              type='default'
              size='large'
              onClick={this.handleTeethSave}
            >
              保存
            </Button>
          </Col>
        </Row> */}
      </Form>
    );
  }
}

class SuperForm extends Component {
  constructor(props) {
    super(props);
    // 最大的index是47
    let myTeethArray = Array(48);
    for (let i = 0; i < myTeethArray.length; i++) {
      myTeethArray[i] = {
        finished: false,
        teethID: i.toString(),
        PD_DB: '',
        PD_B: '',
        PD_MB: '',
        PD_DL: '',
        PD_L: '',
        PD_ML: '',
        FI_B: '',
        FI_L: '',
        BI_DB: '',
        BI_B: '',
        BI_MB: '',
        BI_DL: '',
        BI_L: '',
        BI_ML: '',
        动度: '',
        溢脓_DB: '',
        溢脓_B: '',
        溢脓_MB: '',
        溢脓_DL: '',
        溢脓_L: '',
        溢脓_ML: '',
        龈退缩_DB: '',
        龈退缩_B: '',
        龈退缩_MB: '',
        龈退缩_DL: '',
        龈退缩_L: '',
        龈退缩_ML: '',
      }
    }
    this.state = {
      isLoading: false,
      showPatient: true,
      patientInfo: {
        finished: false,
        name: '',
        gender: '',
        patientID: '',
        firstVisitAge: '',
        treatTime: '',
        isRegular: '',
        isTeacher: '',
      },
      teethArray: myTeethArray,
      result: {}
    };
  }

  handlePredictClick = (event) => {
    const upload = {
      patientInfo: this.state.patientInfo,
      teethArray: this.state.teethArray
    }
    fetch('http://127.0.0.1:5000/store/',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(upload)
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);

      });
  }

  handleShowClick = () => {
    // alert(JSON.stringify(this.state.patientInfo));
    alert(JSON.stringify(this.state.teethArray));
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var patientInfo = this.state.patientInfo;
    patientInfo[name] = value;
    this.setState({
      patientInfo: patientInfo
    });
  }

  handleSelectChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var patientInfo = this.state.patientInfo;
    patientInfo[name] = value === "请选择" ? '' : value;
    this.setState({
      patientInfo: patientInfo
    });
  }

  handleSave = (event) => {
    let patientInfo = this.state.patientInfo;
    patientInfo.finished = true;
    for (let key in patientInfo) {
      if (patientInfo[key] === '') {
        patientInfo.finished = false;
        alert("请输入" + key);
        break;
      }
    }
    this.setState({
      patientInfo: patientInfo
    })
    // if (this.state.patientInfo.finished) {
    //   console.log("............................................................")
    //   message.success('保存成功');
    // } else {
    //   console.log("............................................................")
    //   message.warning('保存失败，请补充未填信息后重试')
    // }
    alert("保存" + (this.state.patientInfo.finished ? "成功" : "失败"));
  }

  handleTeethChange = (focus, event) => {
    const value = event.target.value;
    const name = event.target.name;
    var teethArray = this.state.teethArray;
    teethArray[focus][name] = value;
    this.setState({
      teethArray: teethArray
    });
  }

  handleTeethSave = (focus, event) => {
    let teethArray = this.state.teethArray;
    teethArray[focus].finished = true;
    for (let key in teethArray[focus]) {
      if (teethArray[focus][key] === '') {
        teethArray[focus].finished = false;
        alert("请输入" + focus + ": " + key);
        break;
      }
    }
    this.setState({
      teethArray: teethArray
    })
    alert("保存" + (this.state.teethArray[focus].finished ? "成功" : "失败"));
  }

  render() {
    const showPatient = this.state.showPatient;

    return (
      <div>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <h1 className='title'>信息录入</h1>
          <Collapse defaultActiveKey={['1']} onChange={callback} expandIconPosition='right'>
            <Panel header="请录入患者信息" key="1">
              <Patient
                patientInfo={this.state.patientInfo}
                handleChange={this.handleChange}
                handleSelectChange={this.handleSelectChange}
                handleSave={this.handleSave}
              />
            </Panel>
            <Panel header="请录入治疗前牙齿信息" key="2">
              <Tooth
                teethArray={this.state.teethArray}
                handleTeethChange={this.handleTeethChange}
                // handleSelectChange={this.handleSelectChange}
                handleTeethSave={this.handleTeethSave}
              />
            </Panel>
          </Collapse>
          {/* <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>请录入患者信息</Accordion.Header>
                <Accordion.Body>
                  <Patient
                    patientInfo={this.state.patientInfo}
                    handleChange={this.handleChange}
                    handleSelectChange={this.handleSelectChange}
                    handleSave={this.handleSave}
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>请录入牙齿信息</Accordion.Header>
                <Accordion.Body>
                  <Tooth
                    teethArray={this.state.teethArray}
                    handleTeethChange={this.handleTeethChange}
                    // handleSelectChange={this.handleSelectChange}
                    handleTeethSave={this.handleTeethSave}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion> */}


          {/* <Row className='mb-3'>
            <Button
              className="btn btn-primary btn-lg"
              onClick={this.handleShowClick}
            >展示患者信息</Button>
          </Row> */}

          {/* <Button
            className="btn btn-primary btn-lg"
            onClick={this.handlePredictClick}
          >预测</Button> */}
          <Button block size="large" type="primary" onClick={this.handlePredictClick}>
            保存信息
          </Button>
        </Space>

      </div>
    );
  }
}

class PredictResult extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ display: this.props.displayState }}>
        <Divider />
        <h1>预测结果</h1>
      </div>
    )
  }
}


class PatientDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayState: 'none'
    }
  }

  ChangeDisplay = (event) => {
    this.setState({
      displayState: ''
    });
  }

  render() {
    return (
      <div>
        <SuperForm ChangeDisplay={this.ChangeDisplay} displayState={this.state.displayState} />
        <PredictResult ChangeDisplay={this.ChangeDisplay} displayState={this.state.displayState} />
      </div>
    )
  }
}

export default PatientDash
