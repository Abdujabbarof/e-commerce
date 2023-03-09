import React, { useState, useMemo, useEffect } from 'react'
import Button from '../../components/Button'
import styles from './home.module.scss'
import Card from '../../components/Card'
import { useGetData } from '../../utils/getDatas'
import { Form, Input, message } from 'antd'
import { Link } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { useSearchParams } from 'react-router-dom'
import { instance } from '../../utils/AxiosInstance'
import Loading from '../Loading'
import { useMutation } from 'react-query'
import parse from 'html-react-parser';

const {TextArea} = Input

const Home = () => {
  const [searchParams, setSearchParam] = useSearchParams({})
  const query1 = useGetData(['lists'], 'category')?.data?.data?.data
  const query2 = useGetData(['infos'], 'information')
  const params = searchParams.get("category")

  const [data, setData] = useState([])
  const [isloading, setIsloading] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();  const [ form ] = Form.useForm()
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState([])

  const setParam = (e) => {
    setSearchParam({category: e.target.getAttribute('value').toLowerCase()});
  }

  useEffect(() => {
    instance.get(params ? `products/category/${params}` : 'products')
    .then(data => {
      setIsloading(false)
      setData(data.data.data)
    })
  }, [params])

  useEffect(() => {
    setFiltered(data?.filter(item => item.name_Uz.toLowerCase().includes(search.toLowerCase())))
  }, [search, data])
  
  const mutation = useMutation((data) => instance.post('message', data))

  function submitted() {
    messageApi.open({
      type: 'success',
      content: "Muvaffaqiyatli jo'natildi!",
    });

    form.resetFields()
  }

  const handleSubmit = (data) => {
    mutation.mutate({...data, status: 'PENDING'}, {
      onSuccess: () => submitted()
    })
  }

  if(isloading || !query2.isFetched) {
    return <Loading />
  }

  return (
    <>
      {contextHolder}

      <section className={styles.categories} id='mahsulotlarimiz'>
        <div className={`container ${styles.container}`}>
          <Input placeholder='Qidiruv...' value={search} onChange={(e) => setSearch(e.target.value)} size='large' className={styles.search} allowClear prefix={<SearchOutlined />} />
          
          <h1 className={styles.title}>Kategoriyalar</h1>
          <div className={styles.wrap}>
            <div className={styles.link}>
              <Button border='silver' text='Barchasi' onClick={() => setSearchParam({})} className={`${styles.btn}`}>Barchasi</Button>
              {
                query1?.map(item => <Button text={item.name_Uz} value={item.id} key={item.id} onClick={setParam} className={styles.links} border='silver' />)
              }
            </div>
          </div>

          <div className={styles.cards}>
            {
              filtered?.map(data => (
                <Card id={data.id} key={data.id} name={data.name_Uz} price={data.price} discount={data.discount} img={data.photoId} />
              ))
            }
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={`container ${styles.container}`}>

          <div className={styles.left}>
            <div>
              <h1>Biz bilan bog'lanish</h1>
              <p>Bizga so'rovingizni yuboring va biz imkon qadar tezroq siz bilan bog'lanamiz</p>
            </div>

            <div className={styles.info}>
              <Link><i class="fa-solid fa-location-dot"></i> {query2.isFetched && query2?.data?.data?.data[0].address}</Link>
              <Link to={`tel:${query2.isFetched && query2?.data?.data?.data[0].phone[0]}`}><i class="fa-solid fa-phone"></i> {query2.isFetched && query2?.data?.data?.data[0].phone[0]}</Link>
              <Link to={`mailto:${query2.isFetched && query2?.data?.data?.data[0].email}`}><i class="fa-solid fa-envelope"></i>{query2.isFetched && query2?.data?.data?.data[0].email}</Link>
            </div>

          </div>

          <Form form={form} className={styles.form} onFinish={handleSubmit}>
            <Form.Item label='RAQAMINGIZ' name='phone' labelCol={{span: 24}} wrapperCol={{span: 24}} 
            rules={[
              {
                required: true,
                message: 'Iltimos raqamingizni kiriting!'
              },
              {
                min: 7,
                message: "Iltimos to'gri raqam kiriting!"
              }
            ]} hasFeedback>
              <Input className={styles.input} placeholder='Raqamingiz...' />
            </Form.Item>

            <Form.Item label='MAVZU:' name='subject' labelCol={{span: 24}} wrapperCol={{span: 24}} 
            rules={[
              {
                required: true,
                message: 'Iltimos mavuni kiriting!'
              },
              {
                whitespace: true,
                message: "Iltimos to'gri mavzu kiriting!"
              }
            ]} 
            hasFeedback>
              <Input className={styles.input} placeholder='Mavzu...' />
            </Form.Item>

            <Form.Item label='XABAR:' name='message' labelCol={{span: 24}} wrapperCol={{span: 24}} 
            rules={[
              {
                required: true,
                message: 'Iltimos xabar kiriting!'
              },
              {
                whitespace: true,
                message: "Iltimos to'gri xabar kiriting!"
              }
            ]} 
            hasFeedback>
              <TextArea className={styles.input} placeholder='Xabar...' />
            </Form.Item>
 
            <Button text="Jo'natish" type='secondary' radius event='submit' />
          </Form>

          {parse(query2.isFetched && query2?.data?.data?.data[0].addressMap)}
        </div>
      </section>

      <section className={styles.about}>
        <div className={`container ${styles.container}`}>
          <h1>Biz haqimizda</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque sequi doloribus suscipit minus consequuntur explicabo sint consequatur a rem, perspiciatis soluta iusto placeat asperiores laborum dolor modi id similique dolore quaerat, quam eligendi vel!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque sequi doloribus suscipit minus consequuntur explicabo sint consequatur a rem, perspiciatis soluta iusto placeat asperiores laborum dolor modi id similique!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque sequi doloribus suscipit minus consequuntur explicabo sint consequatur a rem, perspiciatis soluta iusto placeat asperiores laborum dolor!</p>
        </div>
      </section>
    </>
  )
}

export default Home