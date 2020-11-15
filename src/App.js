import React, { Component } from 'react'

import GlobalStyle from './styles/global'
import { Container, Content } from './styles'

import Upload from './components/upload'
import FileList from './components/FileList'

class App extends Component {
  render() {
    return (
        <Container>
          <Content>
            <Upload />
            <FileList />
          </Content>
          <GlobalStyle />
        </Container>
      )
  }
}

export default App