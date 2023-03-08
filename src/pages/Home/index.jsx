import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import styles from './home.module.scss'
import Card from '../../components/Card'
import { useGetData } from '../../utils/getDatas'
import { Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
const {TextArea} = Input

const Home = () => {
  const query2 = useGetData(['cards'], 'products')

  const handleSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <section className={styles.categories} id='mahsulotlarimiz'>
        <div className={`container ${styles.container}`}>
          <Input placeholder='Qidiruv...' size='large' className={styles.search} allowClear prefix={<SearchOutlined />} />
          <div className={styles.cards}>
            {
              query2.data?.data?.data.map(data => (
                <Card key={data.id} name={data.name_Uz} price={data.price} discount={data.discount} img={data.photoId} />
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
              <Link to='tel:+998946616172'><i class="fa-solid fa-phone"></i> +998946616172</Link>
              <Link to='mailto:abdujabborov6172@gmail.com'><i class="fa-solid fa-envelope"></i> abdujabborov6172@gmail.com</Link>
            </div>
          </div>

          <Form className={styles.form} onFinish={handleSubmit}>
            <Form.Item label='RAQAMINGIZ' name='number' labelCol={{span: 24}} wrapperCol={{span: 24}} 
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

            <Form.Item label='Mavzu:' name='subject' labelCol={{span: 24}} wrapperCol={{span: 24}} 
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

            <Form.Item label='Xabar:' name='message' labelCol={{span: 24}} wrapperCol={{span: 24}} 
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
        </div>
      </section>

      <section className={styles.about}>
        <div className={`container ${styles.container}`}>
          <h1>Biz haqimizda</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque sequi doloribus suscipit minus consequuntur explicabo sint consequatur a rem, perspiciatis soluta iusto placeat asperiores laborum dolor modi id similique dolore quaerat, quam eligendi vel! Distinctio vero debitis earum et!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque sequi doloribus suscipit minus consequuntur explicabo sint consequatur a rem, perspiciatis soluta iusto placeat asperiores laborum dolor modi id similique dolore quaerat, quam eligendi vel! Distinctio vero debitis earum et!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque sequi doloribus suscipit minus consequuntur explicabo sint consequatur a rem, perspiciatis soluta iusto placeat asperiores laborum dolor modi id similique dolore quaerat, quam eligendi vel! Distinctio vero debitis earum et!</p>
        </div>
      </section>
    </>
  )
}

export default Home