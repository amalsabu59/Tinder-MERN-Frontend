import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:"Jeff Bezos",
            url:"https://images.theconversation.com/files/441756/original/file-20220120-9047-19fj1zf.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
        },
        {
            name:"Mohanlal",
            url:"https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Mohanlal_fitness_video_050121_1200.jpg?itok=S9EWcbeA"
        }
    ]);

    const swiped = (direction,nameToDelete) => {
        console.log("removing:"+ nameToDelete)
       // setLastDirection(direction);
    };


    const outOfFrame = (name) =>{
        console.log(name + "left the screen");
    }
  return (
    <div className='tindercards'>
        <div className="tintercards_container">
        {people.map((person)=> (
            <TinderCard 
            className='swipe'
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir)=> swiped(dir,person.name)}
            onCardLeftScreen={()=> outOfFrame(person.name)}
            >
                <div style={{backgroundImage: `url(${person.url})`}} className="card">

                  <h3>{person.name}</h3>  
                </div>

            </TinderCard>
        ))}
        </div>
       
    </div>
  )
}

export default TinderCards