import React from 'react'
import { useGetData } from '../../utils/getDatas'
import styles from './products.module.scss'
import Btn  from '../../components/Button'
import { Button, Form, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import Card from '../../components/Card'

const Products = () => {
  const query1 = useGetData(['lists'], 'category')
  const query2 = useGetData(['cards'], 'products')

  return (
    <>
      <section className={styles.categories} id='mahsulotlarimiz'>
        <div className={`container ${styles.container}`}>
          <Input placeholder='Qidiruv...' size='large' className={styles.search} allowClear prefix={<SearchOutlined />} />
          <h1 className={styles.title}>Kategorialar</h1>
          <div className={styles.wrap}>
            <div className={styles.link}>
              {
                query1?.data?.data?.data.map(data => (
                  <Btn text={data.name_Uz} border='silver' />
                ))
              }
            </div>
          </div>
          <h1 className={styles.title}>Filter</h1>


          <div className={styles.cards}>
            {
              query2.data?.data?.data.map(data => (
                <Card key={data.id} name={data.name_Uz} price={data.price} discount={data.discount} img={data.photoId} />
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Products