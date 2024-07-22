import React, { Component, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const {Component} =props;

    const navigator = useNavigate()
    const login =sessionStorage.getItem('token')
    useEffect(() => {
      if(!login){
        navigator('/')
      }
    }, [])
    
  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protected