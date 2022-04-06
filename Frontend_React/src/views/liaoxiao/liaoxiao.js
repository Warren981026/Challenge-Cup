import React, { Component } from 'react';
import { InputNumber, Input, Row, Col } from 'antd';
import { Descriptions, Card, Select, Table, Space, Collapse, Button, Divider } from 'antd';

const { Column } = Table;
const { Panel } = Collapse;
const { Option } = Select;

const gridStyle = {
    width: '25%',
    // textAlign: 'center',
};

const gridStyle2 = {
    width: '16%',
    // textAlign: 'center',
};

const gridStyle3 = {
    width: '32%',
    // textAlign: 'center',
};

// function callback(key) {
//   console.log(key);
// }
// class Patient extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formData: this.props.patientInfo
//     };
//   }

//   handleChange = (event) => {
//     this.props.handleChange(event)
//   }

//   handleSelectChange = (event) => {
//     this.props.handleSelectChange(event)
//   }

//   handleSave = () => {
//     this.props.handleSave()
//   }

//   render() {
//     const formData = this.state.formData;

//     return (
//       <div>
//         <Row>
//           {/* 患者姓名 */}
//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>患者姓名</Form.Label>
//             <Form.Control
//               placeholder='请输入患者姓名'
//               value={formData.name}
//               name="name"
//               onChange={this.handleChange} />
//           </Form.Group>

//           {/* 患者性别 */}
//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>患者性别</Form.Label>
//             <Form.Select
//               placeholder='请选择患者性别'
//               value={formData.gender}
//               name="gender"
//               onChange={this.handleSelectChange}>
//               <option>请选择</option>
//               <option>男</option>
//               <option>女</option>
//             </Form.Select>
//           </Form.Group>
//         </Row>

//         {/* 病历号 */}
//         <Form.Group className='mb-3'>
//           <Form.Label>病历号</Form.Label>
//           <Form.Control
//             placeholder='请输入病历号'
//             value={formData.patientID}
//             name="patientID"
//             onChange={this.handleChange}>
//           </Form.Control>
//         </Form.Group>

//         <Row >
//           {/* 第一次就诊年龄 */}
//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>首诊年龄</Form.Label>
//             <Form.Control
//               placeholder='首诊年龄（岁）'
//               value={formData.firstVisitAge}
//               name="firstVisitAge"
//               onChange={this.handleChange} />
//           </Form.Group>

//           {/* 治疗时间 */}
//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>治疗时间</Form.Label>
//             <Form.Control
//               placeholder='治疗时间（天）'
//               value={formData.treatTime}
//               name="treatTime"
//               onChange={this.handleChange} />
//           </Form.Group>
//         </Row>

//         {/* 一行两个选项 */}
//         <Row className='mb-3'>
//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>是否规律复查</Form.Label>
//             <Form.Select
//               name="isRegular"
//               onChange={this.handleSelectChange}>
//               <option>请选择</option>
//               <option>是</option>
//               <option>否</option>
//             </Form.Select>
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>是否老师治疗</Form.Label>
//             <Form.Select
//               name="isTeacher"
//               onChange={this.handleSelectChange}>
//               <option>请选择</option>
//               <option>是</option>
//               <option>否</option>
//             </Form.Select>
//           </Form.Group>
//         </Row>

//         <Row className='mb-3'>
//           <Col className='d-grid gap-2'>
//             <Button
//               type='default'
//               size='large'
//               onClick={this.handleSave}
//             >
//               保存
//             </Button>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }


// class Tooth extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       focus: 47,
//       formData: this.props.teethArray
//     };
//   }

//   handleTeethChange = (event) => {
//     const focus = this.state.focus;
//     this.props.handleTeethChange(focus, event)
//   }


//   handleTeethSave = () => {
//     const focus = this.state.focus;
//     this.props.handleTeethSave(focus)
//   }

//   changeFocus = (event) => {
//     let index = event.target.value;
//     this.setState({
//       focus: index
//     });
//   }

//   showFocus = () => {
//     alert(JSON.stringify(this.props.teethArray[this.state.focus]));
//   }
//   render() {
//     const validIndex = [47, 46, 45, 44, 43, 42, 41, 37, 36, 35, 34, 33, 32, 31, 27, 26, 25, 24, 23, 22, 21, 17, 16, 15, 14, 13, 12, 11];
//     const validIndexItems = validIndex.map((number) =>
//       <option key={number}>{number}</option>
//     );
//     const formData = this.state.formData;
//     const focus = this.state.focus;
//     return (
//       <Form>
//         <Row>
//           <Form.Group className='mb-3'>
//             <Form.Label>
//               请选择牙齿编号
//             </Form.Label>
//             <Form.Select
//               name="focus"
//               onChange={this.changeFocus}
//             >
//               {validIndexItems}
//             </Form.Select>
//           </Form.Group>
//         </Row>

//         <Row>
//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@PD@DB</Form.Label>
//             <Form.Control
//               value={formData[focus].PD_DB}
//               name="PD_DB"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@PD@B</Form.Label>
//             <Form.Control
//               value={formData[focus].PD_B}
//               name="PD_B"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@PD@MB</Form.Label>
//             <Form.Control
//               value={formData[focus].PD_MB}
//               name="PD_MB"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@PD@DL</Form.Label>
//             <Form.Control
//               value={formData[focus].PD_DL}
//               name="PD_DL"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@PD@L</Form.Label>
//             <Form.Control
//               value={formData[focus].PD_L}
//               name="PD_L"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@PD@ML</Form.Label>
//             <Form.Control
//               value={formData[focus].PD_ML}
//               name="PD_ML"
//               onChange={this.handleTeethChange} />
//           </Form.Group>
//         </Row>

//         <Row>
//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@FI@B</Form.Label>
//             <Form.Control
//               value={formData[focus].FI_B}
//               name="FI_B"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@FI@L</Form.Label>
//             <Form.Control
//               value={formData[focus].FI_L}
//               name="FI_L"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           {/* 字符串可能 */}
//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@动度</Form.Label>
//             <Form.Control
//               value={formData[focus].动度}
//               name="动度"
//               onChange={this.handleTeethChange} />
//           </Form.Group>
//         </Row>


//         <Row>
//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@BI@DB</Form.Label>
//             <Form.Control
//               value={formData[focus].BI_DB}
//               name="BI_DB"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@BI@B</Form.Label>
//             <Form.Control
//               value={formData[focus].BI_B}
//               name="BI_B"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@BI@MB</Form.Label>
//             <Form.Control
//               value={formData[focus].BI_MB}
//               name="BI_MB"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@BI@DL</Form.Label>
//             <Form.Control
//               value={formData[focus].BI_DL}
//               name="BI_DL"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@BI@L</Form.Label>
//             <Form.Control
//               value={formData[focus].BI_L}
//               name="BI_L"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@BI@ML</Form.Label>
//             <Form.Control
//               value={formData[focus].BI_ML}
//               name="BI_ML"
//               onChange={this.handleTeethChange} />
//           </Form.Group>
//         </Row>

//         <Row>
//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@溢脓@DB</Form.Label>
//             <Form.Control
//               value={formData[focus].溢脓_DB}
//               name="溢脓_DB"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@溢脓@B</Form.Label>
//             <Form.Control
//               value={formData[focus].溢脓_B}
//               name="溢脓_B"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@溢脓@MB</Form.Label>
//             <Form.Control
//               value={formData[focus].溢脓_MB}
//               name="溢脓_MB"
//               onChange={this.handleTeethChange}
//             />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@溢脓@DL</Form.Label>
//             <Form.Control
//               value={formData[focus].溢脓_DL}
//               name="溢脓_DL"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@溢脓@L</Form.Label>
//             <Form.Control
//               value={formData[focus].溢脓_L}
//               name="溢脓_L"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@溢脓@ML</Form.Label>
//             <Form.Control
//               value={formData[focus].溢脓_ML}
//               name="溢脓_ML"
//               onChange={this.handleTeethChange} />
//           </Form.Group>
//         </Row>

//         <Row>
//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@龈退缩@DB</Form.Label>
//             <Form.Control
//               value={formData[focus].龈退缩_DB}
//               name="龈退缩_DB"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@龈退缩@B</Form.Label>
//             <Form.Control
//               value={formData[focus].龈退缩_B}
//               name="龈退缩_B"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@龈退缩@MB</Form.Label>
//             <Form.Control
//               value={formData[focus].龈退缩_MB}
//               name="龈退缩_MB"
//               onChange={this.handleTeethChange}
//             />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@龈退缩@DL</Form.Label>
//             <Form.Control
//               value={formData[focus].龈退缩_DL}
//               name="龈退缩_DL"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@龈退缩@L</Form.Label>
//             <Form.Control
//               value={formData[focus].龈退缩_L}
//               name="龈退缩_L"
//               onChange={this.handleTeethChange} />
//           </Form.Group>

//           <Form.Group className='mb-3' as={Col}>
//             <Form.Label>@龈退缩@ML</Form.Label>
//             <Form.Control
//               value={formData[focus].龈退缩_ML}
//               name="龈退缩_ML"
//               onChange={this.handleTeethChange} />
//           </Form.Group>
//         </Row>


//         {/* <Row className='mb-3'>
//           <Col className='d-grid gap-2'>
//             <Button
//               type='default'
//               size='large'
//               onClick={this.showFocus}
//             >
//               Show Focus
//             </Button>
//           </Col>
//         </Row> */}

//         <Row className='mb-3'>
//           <Col className='d-grid gap-2'>
//             <Button
//               type='default'
//               size='large'
//               onClick={this.handleTeethSave}
//             >
//               保存
//             </Button>
//           </Col>
//         </Row>
//       </Form>
//     );
//   }
// }

// class SuperForm extends Component {
//   constructor(props) {
//     super(props);
//     // 最大的index是47
//     let myTeethArray = Array(48);
//     for (let i = 0; i < myTeethArray.length; i++) {
//       myTeethArray[i] = {
//         finished: false,
//         teethID: i.toString(),
//         PD_DB: '',
//         PD_B: '',
//         PD_MB: '',
//         PD_DL: '',
//         PD_L: '',
//         PD_ML: '',
//         FI_B: '',
//         FI_L: '',
//         BI_DB: '',
//         BI_B: '',
//         BI_MB: '',
//         BI_DL: '',
//         BI_L: '',
//         BI_ML: '',
//         动度: '',
//         溢脓_DB: '',
//         溢脓_B: '',
//         溢脓_MB: '',
//         溢脓_DL: '',
//         溢脓_L: '',
//         溢脓_ML: '',
//         龈退缩_DB: '',
//         龈退缩_B: '',
//         龈退缩_MB: '',
//         龈退缩_DL: '',
//         龈退缩_L: '',
//         龈退缩_ML: '',
//       }
//     }
//     this.state = {
//       isLoading: false,
//       showPatient: true,
//       patientInfo: {
//         finished: false,
//         name: '',
//         gender: '',
//         patientID: '',
//         firstVisitAge: '',
//         treatTime: '',
//         isRegular: '',
//         isTeacher: '',
//       },
//       teethArray: myTeethArray,
//       result: {}
//     };
//   }

//   handlePredictClick = (event) => {
//     const upload = {
//       patientInfo: this.state.patientInfo,
//       teethArray: this.state.teethArray
//     }
//     this.setState({ isLoading: true });
//     fetch('http://127.0.0.1:5000/prediction/',
//       {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         method: 'POST',
//         body: JSON.stringify(upload)
//       })
//       .then(response => response.json())
//       .then(response => {
//         console.log(response);
//         this.setState({
//           result: response.result,
//           isLoading: false
//         });
//         this.props.ChangeDisplay();
//       });
//   }

//   handleShowClick = () => {
//     // alert(JSON.stringify(this.state.patientInfo));
//     alert(JSON.stringify(this.state.teethArray));
//   }

//   handleChange = (event) => {
//     const value = event.target.value;
//     const name = event.target.name;
//     var patientInfo = this.state.patientInfo;
//     patientInfo[name] = value;
//     this.setState({
//       patientInfo: patientInfo
//     });
//   }

//   handleSelectChange = (event) => {
//     const value = event.target.value;
//     const name = event.target.name;
//     var patientInfo = this.state.patientInfo;
//     patientInfo[name] = value === "请选择" ? '' : value;
//     this.setState({
//       patientInfo: patientInfo
//     });
//   }

//   handleSave = (event) => {
//     let patientInfo = this.state.patientInfo;
//     patientInfo.finished = true;
//     for (let key in patientInfo) {
//       if (patientInfo[key] === '') {
//         patientInfo.finished = false;
//         alert("请输入" + key);
//         break;
//       }
//     }
//     this.setState({
//       patientInfo: patientInfo
//     })
//     // if (this.state.patientInfo.finished) {
//     //   console.log("............................................................")
//     //   message.success('保存成功');
//     // } else {
//     //   console.log("............................................................")
//     //   message.warning('保存失败，请补充未填信息后重试')
//     // }
//     alert("保存" + (this.state.patientInfo.finished ? "成功" : "失败"));
//   }

//   handleTeethChange = (focus, event) => {
//     const value = event.target.value;
//     const name = event.target.name;
//     var teethArray = this.state.teethArray;
//     teethArray[focus][name] = value;
//     this.setState({
//       teethArray: teethArray
//     });
//   }

//   handleTeethSave = (focus, event) => {
//     let teethArray = this.state.teethArray;
//     teethArray[focus].finished = true;
//     for (let key in teethArray[focus]) {
//       if (teethArray[focus][key] === '') {
//         teethArray[focus].finished = false;
//         alert("请输入" + focus + ": " + key);
//         break;
//       }
//     }
//     this.setState({
//       teethArray: teethArray
//     })
//     alert("保存" + (this.state.teethArray[focus].finished ? "成功" : "失败"));
//   }

//   render() {
//     const showPatient = this.state.showPatient;

//     return (
//       <div>
//         <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
//           <h1 className='title'>疗效预测</h1>
//           <Collapse defaultActiveKey={['1']} onChange={callback} expandIconPosition='right'>
//             <Panel header="请录入患者信息" key="1">
//               <Patient
//                 patientInfo={this.state.patientInfo}
//                 handleChange={this.handleChange}
//                 handleSelectChange={this.handleSelectChange}
//                 handleSave={this.handleSave}
//               />
//             </Panel>
//             <Panel header="请录入治疗前牙齿信息" key="2">
//               <Tooth
//                 teethArray={this.state.teethArray}
//                 handleTeethChange={this.handleTeethChange}
//                 // handleSelectChange={this.handleSelectChange}
//                 handleTeethSave={this.handleTeethSave}
//               />
//             </Panel>
//           </Collapse>
//           {/* <Accordion defaultActiveKey="0">
//               <Accordion.Item eventKey="0">
//                 <Accordion.Header>请录入患者信息</Accordion.Header>
//                 <Accordion.Body>
//                   <Patient
//                     patientInfo={this.state.patientInfo}
//                     handleChange={this.handleChange}
//                     handleSelectChange={this.handleSelectChange}
//                     handleSave={this.handleSave}
//                   />
//                 </Accordion.Body>
//               </Accordion.Item>
//               <Accordion.Item eventKey="1">
//                 <Accordion.Header>请录入牙齿信息</Accordion.Header>
//                 <Accordion.Body>
//                   <Tooth
//                     teethArray={this.state.teethArray}
//                     handleTeethChange={this.handleTeethChange}
//                     // handleSelectChange={this.handleSelectChange}
//                     handleTeethSave={this.handleTeethSave}
//                   />
//                 </Accordion.Body>
//               </Accordion.Item>
//             </Accordion> */}


//           {/* <Row className='mb-3'>
//             <Button
//               className="btn btn-primary btn-lg"
//               onClick={this.handleShowClick}
//             >展示患者信息</Button>
//           </Row> */}

//           {/* <Button
//             className="btn btn-primary btn-lg"
//             onClick={this.handlePredictClick}
//           >预测</Button> */}
//           <Button block size="large" type="primary" onClick={this.handlePredictClick}>
//             预测
//           </Button>
//         </Space>

//       </div>
//     );
//   }
// }


class PredictInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: null
        }
    }
    handleInput = (event) => {
        this.setState({
            ID: event.target.value
        });
    }

    handlePredictClick = () => {
        this.props.handlePredictClick(this.state.ID)
    }


    render() {
        return (
            <div>
                <h1>疗效预测</h1>
                {/* <h6>基于人工智能的牙周炎疗效预测系统</h6> */}
                <Row justify="space-between">
                    <Col span={14} >
                        <Input size="large" placeholder ="请输入患者病历号" autoFocus={true} onChange={this.handleInput} />
                    </Col>
                    <Col span={6} >
                        <Button size="large" type="primary" block
                            className="btn btn-primary btn-lg"
                            onClick={this.handlePredictClick}
                        >预测</Button>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}

class PredictDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focus: 47,
        }
    }

    handleChangeFocus = (event) => {
        console.log(event)
        this.setState({
            focus: event
        });
    }

    render() {
        // console.log("Detail", this.props.displayState)
        let ifDisplay = ''
        if (this.props.displayState == '') {
            ifDisplay = 'none';
        }
        else {
        }
        // console.log(ifDisplay)

        const validIndex = [47, 46, 45, 44, 43, 42, 41, 37, 36, 35, 34, 33, 32, 31, 27, 26, 25, 24, 23, 22, 21, 17, 16, 15, 14, 13, 12, 11];
        const validIndexItems = validIndex.map((number) =>
            <Option key={number} value={number}>{number}</Option>
        );
        const zhibiao = [
            "BI_B",
            "BI_DB",
            "BI_DL",
            "BI_L",
            "BI_MB",
            "BI_ML",

            "PD_B",
            "PD_DB",
            "PD_DL",
            "PD_L",
            "PD_MB",
            "PD_ML",

            "FI_B",
            "FI_L",
            "动度",

            "溢脓_B",
            "溢脓_DB",
            "溢脓_DL",
            "溢脓_L",
            "溢脓_MB",
            "溢脓_ML",
            "龈退缩_B",
            "龈退缩_DB",
            "龈退缩_DL",
            "龈退缩_L",
            "龈退缩_MB",
            "龈退缩_ML"
        ];
        const zhibiaoName = [
            "@BI@B      \t=\t",
            "@BI@DB     \t=\t",
            "@BI@DL     \t=\t",
            "@BI@L      \t=\t",
            "@BI@MB     \t=\t",
            "@BI@ML     \t=\t",
            "@PD@B      \t=\t",
            "@PD@DB     \t=\t",
            "@PD@DL     \t=\t",
            "@PD@L      \t=\t",
            "@PD@MB     \t=\t",
            "@PD@ML     \t=\t",
            "@FI@B      \t=\t",
            "@FI@L      \t=\t",
            "@动度      \t=\t",
            "@溢脓@B    \t=\t",
            "@溢脓@DB   \t=\t",
            "@溢脓@DL   \t=\t",
            "@溢脓@L    \t=\t",
            "@溢脓@MB   \t=\t",
            "@溢脓@ML   \t=\t",
            "@龈退缩@B  \t=\t",
            "@龈退缩@DB \t=\t",
            "@龈退缩@DL \t=\t",
            "@龈退缩@L  \t=\t",
            "@龈退缩@MB \t=\t",
            "@龈退缩@ML \t=\t"
        ];
        const teethGrid = zhibiao.map((myindex, index) => {
            if (index == 12 || index == 13 || index == 14) {
                return <Card.Grid style={gridStyle3} key={myindex}>{zhibiaoName[index]}<strong>{this.props.teethArray[this.state.focus][myindex]}→{this.props.newTeeth[this.state.focus][myindex]}</strong></Card.Grid>
            }
            else {
                return <Card.Grid style={gridStyle2} key={myindex}>{zhibiaoName[index]}<strong>{this.props.teethArray[this.state.focus][myindex]}→{this.props.newTeeth[this.state.focus][myindex]}</strong></Card.Grid>
            }
        }
        );

        const teethIndex = [0, 1, 2, 3, 4, 5]
        const newName = [
            "@PD@DB      \t=\t",
            "@PD@B     \t=\t",
            "@PD@MB     \t=\t",
            "@PD@DL     \t=\t",
            "@PD@L     \t=\t",
            "@PD@ML     \t=\t",
        ]
        const effectResult = teethIndex.map((number) => {
            return <Card.Grid style={gridStyle2} key={number}>{newName[number]}
                <strong>{this.props.effect[this.state.focus][number+6]}→{this.props.effect[this.state.focus][number]}</strong>
                </Card.Grid>
        });

        return (
            <div style={{ display: ifDisplay }}>
                <Divider />
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    
                    <h1>预测结果</h1>

                    <Card title="基本信息">
                        <Card.Grid style={gridStyle}><text>姓名：{this.props.patientInfo.name}</text></Card.Grid>
                        <Card.Grid style={gridStyle}><text>性别：{this.props.patientInfo.gender}</text></Card.Grid>
                        <Card.Grid style={gridStyle}><text>首诊年龄：{this.props.patientInfo.firstVisitAge}</text></Card.Grid>
                        <Card.Grid style={gridStyle}><text>治疗时间：{this.props.patientInfo.treatTime}天</text></Card.Grid>
                        <Card.Grid style={gridStyle}><text>病历号：{this.props.patientInfo.patientID}</text></Card.Grid>
                        <Card.Grid style={gridStyle}><text>是否规律治疗：{this.props.patientInfo.isRegular}</text></Card.Grid>
                        <Card.Grid style={gridStyle}><text>是否老师治疗：{this.props.patientInfo.isTeacher}</text></Card.Grid>
                    </Card>

                    <Select defaultValue="47" style={{ width: 520 }} onChange={this.handleChangeFocus}>
                        {validIndexItems}
                    </Select>
                    {/* <Card title="牙齿信息（请在上方选择牙齿编号）">
                        {teethGrid}
                    </Card> */}
                    <Card title="牙齿信息（请在上方选择牙齿编号）">
                        {effectResult}
                    </Card>
                </Space>
            </div>
        )
    }
}

class liaoxiao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayState: 'none',
            patientInfo: {
                finished: false,
                firstVisitAge: "0",
                gender: "未知",
                isRegular: "否",
                isTeacher: "否",
                name: "未知",
                patientID: "请在上方输入病历号",
                treatTime: "0"
            },
            teethArray: [
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "0",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "1",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "2",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "3",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "4",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "5",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "6",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "7",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "8",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "9",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "10",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "3",
                    "PD_DB": "2",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "4",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "11",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "12",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "13",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "14",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "15",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "16",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "17",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "18",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "19",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "20",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "21",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "22",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "23",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "24",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "25",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "26",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "27",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "28",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "29",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "30",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "31",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "32",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "33",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "34",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "35",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "36",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "37",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "38",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "39",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "40",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "41",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "42",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "43",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "44",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "45",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "46",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "5",
                    "BI_DB": "5",
                    "BI_DL": "5",
                    "BI_L": "5",
                    "BI_MB": "5",
                    "BI_ML": "5",
                    "FI_B": "5",
                    "FI_L": "5",
                    "PD_B": "5",
                    "PD_DB": "5",
                    "PD_DL": "5",
                    "PD_L": "5",
                    "PD_MB": "5",
                    "PD_ML": "5",
                    "finished": false,
                    "teethID": "47",
                    "动度": "5",
                    "溢脓_B": "5",
                    "溢脓_DB": "5",
                    "溢脓_DL": "5",
                    "溢脓_L": "5",
                    "溢脓_MB": "5",
                    "溢脓_ML": "5",
                    "龈退缩_B": "5",
                    "龈退缩_DB": "5",
                    "龈退缩_DL": "5",
                    "龈退缩_L": "5",
                    "龈退缩_MB": "5",
                    "龈退缩_ML": "5"
                }
            ],
            newTeeth: [
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "0",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "1",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "2",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "3",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "4",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "5",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "6",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "7",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "8",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "9",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "10",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "3",
                    "PD_DB": "2",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "4",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "11",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "12",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "13",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "14",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "15",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "16",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "17",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "18",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "19",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "20",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "21",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "22",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "23",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "24",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "25",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "26",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "27",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "28",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "29",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "30",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "31",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "32",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "33",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "34",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "35",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "36",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "37",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "38",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "39",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "40",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "41",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "42",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "43",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "44",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "45",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "",
                    "BI_DB": "",
                    "BI_DL": "",
                    "BI_L": "",
                    "BI_MB": "",
                    "BI_ML": "",
                    "FI_B": "",
                    "FI_L": "",
                    "PD_B": "",
                    "PD_DB": "",
                    "PD_DL": "",
                    "PD_L": "",
                    "PD_MB": "",
                    "PD_ML": "",
                    "finished": false,
                    "teethID": "46",
                    "动度": "",
                    "溢脓_B": "",
                    "溢脓_DB": "",
                    "溢脓_DL": "",
                    "溢脓_L": "",
                    "溢脓_MB": "",
                    "溢脓_ML": "",
                    "龈退缩_B": "",
                    "龈退缩_DB": "",
                    "龈退缩_DL": "",
                    "龈退缩_L": "",
                    "龈退缩_MB": "",
                    "龈退缩_ML": ""
                },
                {
                    "BI_B": "10",
                    "BI_DB": "10",
                    "BI_DL": "10",
                    "BI_L": "10",
                    "BI_MB": "10",
                    "BI_ML": "10",
                    "FI_B": "10",
                    "FI_L": "10",
                    "PD_B": "10",
                    "PD_DB": "10",
                    "PD_DL": "10",
                    "PD_L": "10",
                    "PD_MB": "10",
                    "PD_ML": "10",
                    "finished": false,
                    "teethID": "47",
                    "动度": "10",
                    "溢脓_B": "10",
                    "溢脓_DB": "10",
                    "溢脓_DL": "10",
                    "溢脓_L": "10",
                    "溢脓_MB": "10",
                    "溢脓_ML": "10",
                    "龈退缩_B": "10",
                    "龈退缩_DB": "10",
                    "龈退缩_DL": "10",
                    "龈退缩_L": "10",
                    "龈退缩_MB": "10",
                    "龈退缩_ML": "10"
                }
            ],
            effect: {
                "11": [
                    "12",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "12": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "13": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "14": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "15": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "16": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "17": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "21": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "22": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "23": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "24": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "25": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "26": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "27": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "31": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "32": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "33": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "34": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "35": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "36": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "37": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "41": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "42": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "43": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "44": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "45": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "46": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ],
                "47": [
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0",
                    "0.0"
                ]
            }
        }
    }

    ChangeDisplay = (event) => {
        this.setState({
            displayState: 'block'
        });
    }


    handlePredictClick = (event) => {
        if (parseInt(event, 10) != event) {
            alert("请输入合法的患者病历号")
            return;
        }
        console.log(event)
        const upload = {
            ID: event
        }
        fetch('http://127.0.0.1:5000/prediction/',
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
                console.log("返回值", response);
                if (response.status === "no user") {
                    alert("病历号不存在")
                    return;
                }
                this.setState({
                    patientInfo: response.patientInfo,
                    teethArray: response.teethArray,
                    effect: response.effect
                });
                this.ChangeDisplay();
            });
    }

    render() {
        return (
            <div>
                <PredictInput handlePredictClick={this.handlePredictClick} displayState={this.state.displayState} />
                <PredictDetail displayState={this.state.displayState} patientInfo={this.state.patientInfo} teethArray={this.state.teethArray} newTeeth={this.state.newTeeth} effect={this.state.effect} />
            </div>
        )
    }
}

export default liaoxiao
