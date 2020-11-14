import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { DropContainer, UploadMessage } from './styles'

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if(!isDragActive){
      return <UploadMessage>arraste e solte arquivos aqui</UploadMessage>
    }
    if(isDragReject){
      return <UploadMessage type="error">arquivo não suportado</UploadMessage>
    }
    return <UploadMessage type="success">solte os arquivos</UploadMessage>
  }

  render() {
    return (
      <Dropzone accept="image/*" onDropAccepted={() => {}}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    )
  }
}