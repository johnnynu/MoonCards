import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SetCard from './SetCard'

// Temporary mock data for the sets
const mockSets = [
  {
    id: 1,
    name: 'Paradox Rift',
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/7/7e/SV4_Logo_EN.png',
  },
  {
    id: 2,
    name: 'Neo Destiny',
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/1/18/Neo_Destiny_Logo_EN.png',
  },
  {
    id: 3,
    name: 'Neo Genesis',
    imageUrl:
      'https://archives.bulbagarden.net/media/upload/5/55/Neo_Genesis_Logo_EN.png',
  },
  // Add more sets as needed
]

const Main = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <h1 className="text-3xl font-bold text-center my-6">
        Scarlet & Violet Series
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {mockSets.map((set) => (
          <SetCard key={set.id} setName={set.name} imageUrl={set.imageUrl} />
        ))}
      </div>
    </div>
  )
}

export default Main
