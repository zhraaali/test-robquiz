import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CatogeryHero from '../../components/CategoryHero/CatogeryHero.jsx';
import Featuredcard from '../../components/Featuredcard/Featuredcard.jsx';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './CategoryStyle.css';
import Slider from 'react-slick';
import Newquiz from '../../components/Newquiz/Newquiz.jsx';

const Category = () => {
  const [isLoading, setIsLoading] = useState(true); // حالة لمؤشر التحميل
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // تعريف المتغير currentPage
  const itemsPerPage = 2000; // عدد العناصر لكل صفحة
  const url = 'https://robert-api.lavetro-agency.com/storage/';
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://robert-api.lavetro-agency.com/api/categories`);
        setCategories(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // إخفاء مكون التحميل بعد الانتهاء
      }
    };

    fetchData();
  }, [id]);

  // حساب الصفحة الحالية من البيجنيشن
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = categories.slice(indexOfFirstItem, indexOfLastItem);

  // تغيير الصفحة عند الضغط على البيجنيشن
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <CatogeryHero title='Category' />
      <h5 style={{textAlign:'center',marginTop:'5px'}} className='zh-h5-category'>اختباراتنا مقسمة الى فئات.اختر الفئة التي تحبها واختبر معلوماتك</h5>
      <div className="ha-serch">
        <Form>
          <Form.Group className="mt-5 mb-5 d-flex" controlId="formGroupEmail">
            <Form.Control type="text" placeholder="Search" />
            <Button variant="primary" className="ms-5 me-5" type="submit">
              البحث
            </Button>
          </Form.Group>
        </Form>
        
      </div>
      <div className="ha-category-card">
        {/* استخدام الفئات الحالية بدلاً من القائمة الكاملة */}
        {currentCategories.map((category) => (
          <Featuredcard
            id={category.id}
            smcardimg1={url + category.image}
            smcardimg1sm={url + category.image}
            title1={category.name}
            title1sm={category.name}
            // desc1={'Question: '+ category.questions_count }
            // desc1sm='Hello world sm'
          />
        ))}
      </div>

      {/* <div className="ha-pagination">
        <Pagination>
          <Pagination.First onClick={() => paginate(1)} />
          <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
          {[...Array(Math.ceil(categories.length / itemsPerPage)).keys()].map((number) => (
            <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
              {number + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => paginate(currentPage + 1)} />
          <Pagination.Last onClick={() => paginate(Math.ceil(categories.length / itemsPerPage))} />
        </Pagination>
      </div> */}
    </>
  );
}

export default Category;
