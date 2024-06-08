import React from 'react'
import CatogeryHero from '../../components/CategoryHero/CatogeryHero'
import NewquizslidePopular from '../../components/NewquizslidePopular/NewquizslidePopular'

const PopularPage = () => {
  
  return (
    <>
    <CatogeryHero title="Popular" />
    <div style={{margin:"50px 0"}}>
      <div className='zh-final-popular-text' style={{display:"flex",
      flexDirection:"column",
      alignItems:"center"}}>
      <h4>اشهر الاختبارات</h4>
      <p>تحقق من الاختبارات الاكثر شعبية! اختبر معرفتك وتحدى نفسك</p>
      </div>
    <NewquizslidePopular/>
    </div>
    </>
  )
}

export default PopularPage