import React, { useEffect } from 'react'
import SearchInput from '../../components/SearchInput'
function HomePage () {
  
  useEffect (() => {
    console.log('页面初始化11')
    return () => {
      console.log('页面结束')
    }
  }, [])
  // 富文本
  const richText = "<div><span style='font-weight: bold'>Best</span>Search</div>"
  return (
    <div>
      <nav>
        <div className='nav-title' dangerouslySetInnerHTML={{__html: richText}}></div>
        <SearchInput searchAction={(value) => {
            console.log(value)
      }} />
      </nav>
      
    </div>
  );
}

export default HomePage;
