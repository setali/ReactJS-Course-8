import dynamic from 'next/dynamic'

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

function Random () {
  return <div>Random: {random(1, 10)}</div>
}

export default dynamic(() => Promise.resolve(Random), { ssr: false })
