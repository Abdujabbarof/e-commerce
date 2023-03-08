import s from './footer.module.scss'
import {Container} from "../../components/container"
import {useGetData} from "../../utils/getDatas"
import { Row,Col,Spin } from 'antd'
import { Link } from 'react-router-dom'

export const Footer = () => {
      const {isLoading,isSuccess,data} =useGetData(["info"],"/information") 
  return (
    <div className={s.footer}>
      <Container>
            {isLoading?<div style={{textAlign:"center"}}><Spin/></div>:null}
            {data?
                  <Row justify={"space-between"}>
                        <Col xs={24} sm={12} md={8} lg={6}>
                              <ul>
                                    <li>Address</li>
                                    <li>
                                          <Link>{data.data.data[0].address}</Link>
                                    </li>      
                              </ul>
                        </Col>
                        
                        <Col xs={24} sm={12} md={8} lg={6}>
                              <ul>
                                    <li>Email</li>
                                    <li>
                                          <Link>{data.data.data[0].email}</Link>
                                    </li>      
                              </ul>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                              <ul>
                                    <li>Phone</li>
                                    <li>
                                          <Link>{data.data.data[0].phone[0]}</Link>
                                    </li>      
                              </ul>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                              <ul>
                                    <li>Social medias</li>
                                    <li className={s.medias}>
                                          <a href={`${data.data.data[0].telegram}`}><i className='fa-brands fa-telegram'></i></a> <a href={`${data.data.data[0].instagram}`}><i className='fa-brands fa-instagram'></i></a>
                                    </li>      
                              </ul>
                        </Col>
                  </Row>
                  :null
            }
      </Container>
    </div>
  )
}
