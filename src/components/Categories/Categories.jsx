import './Categories.css'

import { Link ,useParams } from 'react-router-dom'

const Categories = (props) => {
  const { id } = useParams();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`https://api.robquiz.com/api/categories/${id}`);
  //       setCategories(response.data.data);
  //       console.log(response.data.data);
  //       console.log(categories[0].id);

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // },[] );
  
  return (
    <div className='zh-category'>
          <Link to={`/category/test/${props.id}`} className='ha-link'>
            <div className="ha-category-content">
            <img src={props.img} alt="" />
            <h3>{props.title}</h3>
            </div>
          </Link>
    </div>
  )
}

export default Categories