import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CatogeryHero from '../../components/CategoryHero/CatogeryHero.jsx';
import Featuredcard from '../../components/Featuredcard/Featuredcard.jsx';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './QuizesStyle.css';

const Quizes = () => {
  const [isLoading, setIsLoading] = useState(true); // حالة لمؤشر التحميل
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // حالة البحث
  // تعريف المتغير currentPage
  const itemsPerPage = 2000; // عدد العناصر لكل صفحة
  const url = 'https://robert-api.lavetro-agency.com/storage/';
  const { id } = useParams();
  const [first, setfirst] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(first){
        const response = await axios.get(`https://robert-api.lavetro-agency.com/api/quizzes?q=${searchQuery}`);
        setCategories(response.data.data);
        console.log(response.data.data);
      }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
        setfirst(false) // إخفاء مكون التحميل بعد الانتهاء
      }
    };

    fetchData();
  }, [id,first]);

  // حساب الصفحة الحالية من البيجنيشن
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = categories.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  // تغيير الصفحة عند الضغط على البيجنيشن
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleSearch = (e) => {
    e.preventDefault();
    setfirst(true)
    
  };
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div style={{minHeight:'80vh'}}>
      
      <div style={{margin:"50px 0"}}>
      <div className='zh-final-popular-text' style={{display:"flex",
      flexDirection:"column",
      alignItems:"center"}}>
      <h4>جميع الاختبارات</h4>
      <p>تحقق من الاختبارات الاكثر شعبية! اختبر معرفتك وتحدى نفسك</p>
      </div>
      </div>
      <div className="ha-serch">
      <Form onSubmit={handleSearch}>
      <Form.Group className="mt-5 mb-5 d-flex" controlId="formGroupEmail">
        <Form.Control
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange}
        />
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
          type='quizz'
            id={category.id}
            smcardimg1={url + category.image} 
            smcardimg1sm={url + category.image}
            style={{display:'none'}}
            title1={category.ar_name}

            title1sm={category.ar_name}
            // desc1={'Question: '+ category.questions_count }
            // desc1sm='Hello world sm'
          />
        ))}
      </div>

      {/* <div className="ha-pagination">
        <Pagination>
          <Pagination.First onClick={() => paginate(1)} />
          {currentPage !== 1 && (
  <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
)}          {[...Array(Math.ceil(categories.length / itemsPerPage)).keys()].map((number) => (
            <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
              {number + 1}
            </Pagination.Item>
          ))}
          {currentPage !== totalPages && (
            <Pagination.Next onClick={() => paginate(currentPage + 1)} />
          )}
          {currentPage !== 1 && (
          <Pagination.Last onClick={() => paginate(Math.ceil(categories.length / itemsPerPage))} />)}
        </Pagination>
      </div> */}
    </div>
  );
}

export default Quizes;
