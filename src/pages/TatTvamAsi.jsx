import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const TYPES= ['soul-pickings', 'bubbles-&-balloons', 'parables-zone']

const TypesList = {
    'soul-pickings': {
        image: '/assets/tattvamasi/SoulPickingLogo.png',
        desc: 'A single drop of nectar is sufficient for immortality. The Shabd(Word) is Brahman. If we find right words, we can realize Brahman. When powerful words drenched in the effulgence of the soul emerge, the whole macrocosm is full of ebullience. We will gift you such drops of nectar every day !',
        quote: 'We must watch our thoughts, words and actions because they create our universe'
    }, 
    'bubbles-&-balloons': {
        image: '/assets/tattvamasi/BubblesAndBallonsLogo.png',
        desc: 'Mind is easily enticed by stories, legends, folktales because they have the unique power of attraction that leads to attention. Attention comes effortlessly after we have developed a meditative state of mind. Which is why through these tales, adepts, elders and scriptures have deeply sown the seeds of values (Sanskars) in our hearts. In Parables Zone we are offering you small stories with mammoth life lessons.',
        quote: 'The moment you realize your infinite nature you are awakened'
    },
    'parables-zone': {
        image: '/assets/tattvamasi/ParablesZoneLogo.png',
        desc: 'The stream kisses every wave like every moment drives our Life. With each wave fly bubbles, with their absolute existence. Light beams turn them aureate. For some, they are floating balloons and for some, moments of fleeting buoyancy. Divine thought- currents are like bubbles, if left unheeded, they vanish quickly. Let us treasure them....',
        quote: `One a disciple sat in front of his master and asked curiously, "Dear Master, please tell me the secret of getting a thing that one loves the most." The master looked at his disciple's face and said in his deep voice, "First learn patience with what you hate, if it happens smoothly. You will get what you love the most"`
    }
}

const TatTvamAsi = () => {

    // use Navigate Hook
    const navigate = useNavigate()
    // use Params Hook
    const { type } = useParams()

    if (!TYPES.includes(type)) {
        // go back to previous page
        navigate(-1)
        return null
    }


  return (
    <div className='min-h-screen bg-white py-4'>
        <div className='max-w-7xl w-full mx-4 mt-8 xl:mx-auto'>
            {/* <img className='max-w-lg pt-6' src='/assets/Quote.png' /> */}
            <div className='flex space-x-4 justify-between'>
                <div className='w-3/6 space-y-4'>
                    <img className='max-w-xs' src={TypesList[type]?.image} alt="" />
                    <p className='text-[#2E6295] text-lg font-semibold'>
                        {TypesList[type]?.desc}
                    </p>
                </div>
                <div className='w-3/6'>
                    <div className='max-w-sm ml-16 relative'>
                        <img className='w-full' src="/assets/tattvamasi/Quotes.png" alt="" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='text-[#552018] max-w-[200px] italic text-center ml-10 text-xl font-semibold  w-full'>
                                {TypesList[type]?.quote}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TatTvamAsi