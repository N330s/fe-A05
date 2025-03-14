import Image from "next/image";
import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={{margin: '20px', display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around', alignContent:'space-around'}}>
        <Card venueName = 'The Bloom Pavilion' imgSrc = '/img/bloom.jpg'/>
        <Card venueName = 'Spark Space' imgSrc = '/img/grandtable.jpg'/>
        <Card venueName = 'The Grand Table' imgSrc = '/img/sparkspace.jpg'/>
      </div>
    </main>
  );
}
