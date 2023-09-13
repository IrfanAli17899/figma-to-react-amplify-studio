import React from 'react'
import { MyComponentsFooter, MyComponentsNavigation } from '../ui-components'

function Page() {
  return (
    <div className='flex h-full bg-red-600 flex-col'>
      <MyComponentsNavigation />
      <div className='flex-1' />
      <MyComponentsFooter />
    </div>
  )
}

export default Page