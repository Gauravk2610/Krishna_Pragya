import React from 'react'

const SubscriptionModel = [
  {
    id: 1,
    name: "Krishn Pragya 'Hindi'",
    priceModel: [
      {
        id: 1,
        desc: '1 Month for INR 400',
        price: 400,
        duration: 1,
        currency: 'INR'
      },
      {
        id: 2,
        desc: '12 Month for INR 4,500',
        price: 4500,
        duration: 12,
        currency: 'INR'
      }
    ]
  },
  {
    id: 2,
    name: "Krishn Pragya 'English'",
    priceModel: [
      {
        id: 1,
        desc: '1 Month for INR 400',
        price: 400,
        duration: 1,
        currency: 'INR'
      },
      {
        id: 2,
        desc: '12 Month for INR 4,500',
        price: 4500,
        duration: 12,
        currency: 'INR'
      }
    ]
  },
  {
    id: 3,
    name: "Krishn Pragya 'Hindi' Gift Box with 2 issues",
    priceModel: [
      {
        id: 1,
        desc: 'INR 2,500',
        price: 2500,
        duration: null,
        currency: 'INR'
      }
    ]
  },
  {
    id: 4,
    name: "Krishn Pragya 'English' Gift Box with 2 issues",
    priceModel: [
      {
        id: 1,
        desc: 'INR 2,500',
        price: 2500,
        duration: null,
        currency: 'INR'
      }
    ]
  },
  {
    id: 5,
    name: "Combo - Print + Digital Subscription",
    priceModel: [
      {
        id: 1,
        desc: '12 Months for INR 6,000',
        price: 6000,
        duration: 12,
        currency: 'INR'
      }
    ]
  },
  {
    id: 6,
    name: "Digital Subscription Only",
    priceModel: [
      {
        id: 1,
        desc: '12 Month for INR 2,000',
        price: 2000,
        duration: 12,
        currency: 'INR'
      }
    ]
  },
]

const InternationalSubscriptionModel = [
  {
    id: 1,
    name: "Krishn Pragya 'Hindi' per issue per copy",
    priceModel: [
      {
        id: 1,
        desc: '1 Month for $12',
        price: 12,
        duration: 1,
        currency: 'USD'
      },
      {
        id: 2,
        desc: '12 Month for $100',
        price: 100,
        duration: 12,
        currency: 'USD'
      }
    ]
  },
  {
    id: 2,
    name: "Krishn Pragya 'English' per issue per copy",
    priceModel: [
      {
        id: 1,
        desc: '1 Month for $20',
        price: 20,
        duration: 1,
        currency: 'USD'
      },
      {
        id: 2,
        desc: '12 Month for $200',
        price: 200,
        duration: 12,
        currency: 'USD'
      }
    ]
  },
  {
    id: 3,
    name: "Digital Subscription Only",
    priceModel: [
      {
        id: 1,
        desc: '12 Month for $100',
        price: 100,
        duration: 12,
        currency: 'USD'
      }
    ]
  },
]


const Subscription = () => {
  return (
    <div className='min-h-screen bg-white py-4'>
        <div className='max-w-6xl w-full mx-4 xl:mx-auto'>
          {/* Indian Subscription model */}
          <div className='mt-6 space-y-4'>
            <h1 className='text-3xl text-center font-bold'>SUBSCRIPTION FOR INDIAN KRISHN'S LOVERS</h1>
            <div className='border-2 border-black border-b-0'>
              {
                SubscriptionModel.map((item) => (
                  <div className='flex justify-between items-center py-2 px-6 border-b-2 border-black'>
                    <div className='max-w-lg w-full'>
                      {item.name}
                    </div>
                    <div className='flex items-center w-full'>
                      {
                        item.priceModel.map((price) => (
                          <div className='flex max-w-lg w-full items-center space-x-2'>
                            <input
                              className='w-4 h-4'
                              type="checkbox" name="" id="" />
                            <span>{price.desc}</span>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          {/* International Subscription model */}
          <div className='mt-6 space-y-4'>
            <h1 className='text-3xl text-center font-bold'>SUBSCRIPTION FOR INTERNATIONAL KRISHN'S LOVERS</h1>
            <div className='border-2 border-black border-collapse border-b-0'>
              {
                InternationalSubscriptionModel.map((item) => (
                  <div className='flex justify-between items-center py-2 px-6 border-b-2 border-black'>
                    <div className='max-w-lg w-full'>
                      {item.name}
                    </div>
                    <div className='flex items-center w-full'>
                      {
                        item.priceModel.map((price) => (
                          <div className='flex max-w-lg w-full items-center space-x-2'>
                            <input
                              className='w-4 h-4'
                              type="checkbox" name="" id="" />
                            <span>{price.desc}</span>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Subscription