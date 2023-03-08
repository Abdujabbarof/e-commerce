import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'
import { Select } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../components/Button'
import { useGetData } from '../../utils/getDatas'
import css from './detailed.module.scss'

const Detailed = () => {
    const { id } = useParams()

    const query = useGetData(['detailed', id], `products/${id}`) 

    console.log(query?.data?.data);

  return (
    <section className={css.detailed}>
        <Button href='/' text='Ortga' type='secondary' />
        <div className={`container ${css.container}`}>
            <div className={css.left}>
                <img src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" alt="" />
            </div>
            <div className={css.right}>
                <h1>{query?.data?.data?.name_Uz}</h1>
                <div className={css.price}>
                    <h3>{query?.data?.data?.discount == 0 ? `${query?.data?.data?.price} so'm` : `${Math.floor(query?.data?.data?.price - (query?.data?.data?.price * query?.data?.data?.discount / 100))} so'm`}</h3>
                    <p>{query?.data?.data?.discount == 0 ? "" : `${query?.data?.data?.price} so'm`}</p>
                </div>

                <h2>Sotuvda mavjudmi: {query?.data?.data?.active ? <CheckCircleTwoTone /> : <CloseCircleTwoTone />}</h2>

                <h2>O'lchami: <span>{query?.data?.data?.size !== "" ? query?.data?.data?.size : "Ma'lumot yoq"}</span></h2>

                <h2>Mahsulot haqida:</h2>
                <p>{query?.data?.data?.description_Uz}</p>
            </div>
        </div>
    </section>
  )
}

export default Detailed