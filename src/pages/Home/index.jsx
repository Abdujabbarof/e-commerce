import React, { useState, useMemo, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import styles from './home.module.scss'
import Card from '../../components/Card'
import { useGetData } from '../../utils/getDatas'
import { Form, Input, message, Modal } from 'antd'
import { Link } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { useSearchParams } from 'react-router-dom'
import { instance } from '../../utils/AxiosInstance'
import Loading from '../Loading'
import { useMutation } from 'react-query'
import parse from 'html-react-parser';
import { useModal } from '../../utils/useModal'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next'
const {TextArea} = Input

const Home = () => {
  const {visible, setVisible, langRu} = useModal()
  const darkMode = JSON.parse(localStorage.getItem('darkMode'))
  const [searchParams, setSearchParam] = useSearchParams()
  const [data, setData] = useState([])
  const [isloading, setIsloading] = useState(true)
  const [messageApi, contextHolder] = message.useMessage();  const [ form ] = Form.useForm()
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [single, setSingle] = useState({})

  const query1 = useGetData(['lists'], 'category')?.data?.data?.data
  const query2 = useGetData(['infos'], 'information')
  const params = searchParams.get("category")

  const {t} = useTranslation()

  const setParam = (e) => {
    setSearchParam({ ...searchParams, category: e.target.getAttribute('value').toLowerCase() });
  }

  useEffect(() => {
    // setIsloading(true)
    instance.get(params ? `products/category/${params}` : 'products')
    .then(data => {
      setIsloading(false)
      setData(data.data.data)
    })
  }, [params])

  useEffect(() => {
    setFiltered(data?.filter(item => item.name_Uz.toLowerCase().includes(search.toLowerCase())))
  }, [search, data])

  const fetch = (id) => {
    instance.get(`products/${id}`)
    .then(res => {
      setSingle(res?.data) 
      console.log(res?.data)})
  }
  
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

  const showAllProduct = () => {
    setShowAll(!showAll)
  }

  return (
    <>
      <Navbar tg={query2?.data?.data?.data[0].telegram} ig={query2?.data?.data?.data[0].instagram} />

      {contextHolder}

      <section className={`${styles.showcase} ${darkMode && styles.darkMode2} ${darkMode && styles.darkBg}`}>
        <div className={styles.text}>
          <h1 className={`${styles.heroTitle} ${darkMode && styles.white}`}>{t('hero1')}</h1>
          <h1 className={`${styles.heroTitle} ${darkMode && styles.white}`}>{t('hero2')}</h1>
          <a className={`${darkMode && styles.button}`} href="#mahsulotlarimiz">{t('heroBtn')}</a>
        </div>

        <div className={`${styles.animate}`}>
          <a className={`${darkMode && styles.silver}`} href="#mahsulotlarimiz">
            <i class="fa-solid fa-chevron-down"></i>
          </a>
        </div>
      </section>

      <section className={`${styles.categories} ${darkMode && styles.darkMode}`} id='mahsulotlarimiz'>
        <div className={`container ${styles.container}`}>
          <Input placeholder={t('search')} value={search} onChange={(e) => setSearch(e.target.value)} size='large' className={`${styles.search} ${darkMode && styles.darkMode2}`} allowClear prefix={<SearchOutlined className={`${darkMode && styles.gray}`} />} />
          
          <h1 className={styles.title}>{t('categories')}</h1>
          <div className={styles.wrap}>
            <div className={styles.link}>
              <Button border='silver' text={t('categBtn')} onClick={() => setSearchParam({})} className={`${styles.btn}`}></Button>
              {
                query1?.map(item => <Button text={langRu == "uz" ? item.name_Uz : item.name_Ru} value={item.id} key={item.id} onClick={setParam} className={styles.links} border='silver' />)
              }
            </div>
          </div>

          <div className={styles.cards}>
            {
               showAll ? filtered?.slice(0, 8).map((data) => (
                <Card id={data.id} key={data.id} name={langRu == "uz" ? data.name_Uz : data.name_Ru} price={data.price} discount={data.discount} img={`http://3.138.204.20/upload/${data?.photo?.path}`}><Button text={`${t('cardBtn')}`} onClick={() => [setVisible(true), fetch(data.id)]} broder type='secondary'  /></Card>)) : filtered?.map((data) => (
                  <Card id={data.id} key={data.id} name={langRu == "uz" ? data.name_Uz : data.name_Ru} price={data.price} discount={data.discount} img={`http://3.138.204.20/upload/${data?.photo?.path}`}><Button text={`${t('cardBtn')}`} onClick={() => [setVisible(true), fetch(data.id)]} broder type='secondary'/></Card>
                ))
            }
          </div>

          <div className={styles.btns}>
            {filtered.length !== 0 ? filtered.length > 8  && <Button onClick={showAllProduct} text={`${showAll ? `${t('categBtn2')}` : `${t('categBtn')}`}`} border='silver' /> : <h1 className={`${darkMode && styles.white}`}>{t('noItem')}</h1>}
          </div>
        </div>
      </section>

      <section className={`${styles.contact} ${darkMode && styles.darkMode}`} id='kontakt' >
        <div className={`container ${styles.container} ${darkMode && styles.darkMode2}`}>

          <div className={styles.left}>
            <div>
              <h1 className={`${darkMode && styles.white}`}>{t('contactUs')}</h1>
              <p className={`${darkMode && styles.silver}`}>{t('info')}</p>
            </div>

            <div className={styles.info}>
              <Link className={`${darkMode && styles.white}`}><i class="fa-solid fa-location-dot"></i>{query2.isFetched && query2?.data?.data?.data[0]?.address}</Link>

              {
                query2.isFetched && query2?.data?.data?.data[0]?.phone?.slice(0, 3).map(num => (
                  <Link key={num} className={`${darkMode && styles.white}`} to={`tel:${num}`}><i class="fa-solid fa-phone"></i> {num}</Link>
                ))
              }
              {/* <Link className={`${darkMode && styles.white}`} to={`tel:${query2.isFetched && query2?.data?.data?.data[0]?.phone[0]}`}><i class="fa-solid fa-phone"></i> {query2.isFetched && query2?.data?.data?.data[0].phone[0]}</Link> */}
              <Link className={`${darkMode && styles.white}`} to={`mailto:${query2.isFetched && query2?.data?.data?.data[0]?.email}`}><i class="fa-solid fa-envelope"></i>{query2.isFetched && query2?.data?.data?.data[0]?.email}</Link>
            </div>
          </div>

          <Form form={form} className={styles.form} onFinish={handleSubmit}>
            <Form.Item className={styles.label} label={`${t('number')}`} name='phone' labelCol={{span: 24}} wrapperCol={{span: 24}} 
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
              <Input className={styles.input} placeholder={`${t('number')}...`} />
            </Form.Item>

            <Form.Item label={`${t('theme')}`} name='subject' labelCol={{span: 24}} wrapperCol={{span: 24}} 
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
              <Input className={styles.input} placeholder={`${t('theme')}...`} />
            </Form.Item>

            <Form.Item label={`${t('message')}`} name='message' labelCol={{span: 24}} wrapperCol={{span: 24}} 
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
              <TextArea className={styles.input} placeholder={`${t('message')}...`} />
            </Form.Item>
 
            <Button text={`${t('sent')}`} type='secondary' radius event='submit' />
          </Form>

          {parse(query2.isFetched && query2?.data?.data?.data[0]?.addressMap)}
        </div>
      </section>

      <section className={`${styles.about} ${darkMode && styles.darkMode2}`} id='biz' >
        <div className={`container ${styles.container}`}>
          <h1 className={`${darkMode && styles.white}`}>{t('aboutUs')}</h1>
          <p className={`${darkMode && styles.silver}`}>{t('info1')}</p>
          <p className={`${darkMode && styles.silver}`}>{t('info2')}</p>
          <p className={`${darkMode && styles.silver}`}>{t('info3')}</p>
        </div>
      </section>

      <Modal open={visible} width={1024} onCancel={() => setVisible(false)} centered style={{marginTop: '-6%'}} className={styles.modal} footer={false}>
        <div className={`${styles.wrapper}`}>
          <div className={styles.modal}>
            <div className={styles.left}>
              <img src={`http://3.138.204.20/upload/${single?.photo?.path}`}/>
            </div>

            <div className={styles.right}>
              <h1>{langRu == "uz" ? single.name_Uz : single.name_Ru}</h1>
              <ul>
                <li>{single.gender}</li>
                <li>{t('modalColor')}: <span>{single.color}</span></li>
                <li>{t('modalSale')}: <span>{single.active ? `${t('bor')}` : `${t('yoq')}`}</span></li>
                <li>{t('modalPrice')}: <span><h5>{single.discount == 0 ? `${single.price} so'm` : `${Math.floor(single.price - (single.price * single.discount / 100))} so'm`}</h5>
                  <p>{single.discount == 0 ? "" : `${single.price} so'm`}</p></span></li>
                <li>{t('modalSize')}: <span>{single.size}</span></li>
                <li>{t('modalType')}: <span>{single.type}</span></li>
                <li>{langRu == "uz" ? single.description_Uz : single.description_Ru}</li>
              </ul>
            </div>
          </div>
        </div>
      </Modal>

      <Footer />
    </>
  )
}

export default Home