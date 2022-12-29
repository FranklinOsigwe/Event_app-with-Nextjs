import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function EventsCatPages({data,pageName}) {
  return (
      <div>
      <h2>Events in {pageName}</h2> 
      
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
          <a >
             <Image width={300} height={'300'} src={ev.image} alt={ev.title}  />
            <img /> <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>  
          
          </Link>

        ))}
       
      </div>
      
      </div>
  )
}

export default EventsCatPages;


export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');
  const allPaths = events_categories.map((ev) => {
    return {
    params: {
      cat: ev.id.toString(),
    },
  } 
});
  return {
    paths: allPaths,
    fallback : false,
  }
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat
  const { allEvents } = await import('/data/data.json');
  const data = allEvents.filter(ev => ev.city === id)

  return {props: {data,pageName : id}}
}