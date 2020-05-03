import React, {useState} from 'react'
import CustomerInfoCard from 'components/Sales/CustomerInfoCard/CustomerInfoCard'
import classNames from 'classnames/bind'
function CustomerInfoCardList() {
  const [customerCount, setCustomerCount] = useState(3)
  let customers = [1,2,3]
  const listClassName = classNames({
    'customerInfoCardList':true,
    'hideScroll':customerCount<3
  })
  return (
    <div className={listClassName}>
      {
        customers.map((customer)=>{
          return <CustomerInfoCard />
        })
      }
    </div>
  )
}

export default CustomerInfoCardList
