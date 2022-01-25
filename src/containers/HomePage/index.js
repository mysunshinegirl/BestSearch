import React, { useEffect } from 'react'
import styled from 'styled-components'
import SearchInput from '../../components/SearchInput'
import history from '../../utils/history'

const StyleMain = styled.div`
  min-height: 100vh;
  background: #FCF7ED;
  .nav-title {
    padding: 20px;
    font-size: 34px;
  }
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 4vw 0;
  font-size: 44px;
`

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
    <StyleMain>
      <nav>
        <div className='nav-title' dangerouslySetInnerHTML={{__html: richText}}></div>
      </nav>
      <Title>
        Search Trends
      </Title>
      <SearchInput searchAction={(value) => {
        // 判断是否输入
        if (value) {
          history.push(`/search/${value}`)
        }
      }} />
    </StyleMain>
  );
}

export default HomePage;
