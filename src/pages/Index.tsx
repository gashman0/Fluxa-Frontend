import React from 'react'
import { Navigate } from 'react-router-dom'
import Body from '../components/Body'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { useCheckAuth } from '../network/auth/queries'

const Index = () => {
  const {data, isError, isPending, isSuccess} = useCheckAuth();
  const isAuthenticated = data?.authenticated;

  if(isAuthenticated){
    return <Navigate to={'/home'}/>
  }
  return (
    <>
    {isAuthenticated ? "Yeah" : "No"}
        <Hero />
        <Body />
        <Section />
    </>
  )
}

export default Index