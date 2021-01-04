import './index.css';
import Card from './Cards';
import Sdata from './Sdata';

//array.map(function(currentvalue,index,array), this value)
//but we need only 1 variable value
function ncard(value) {
  return(
    <Card
      key={value.id}
      imgsrc={value.imgsrc}
      tagline={value.tagline}
      title={value.title}
      link={value.link}
    />
  )
}

// fat arrow function syntax
// const ncard = (value) => {
//   return and so on
// }

function App() {
  return (
    <>

    <h1 className="heading">List of top 5 Netflix Series in 2020</h1>
    {Sdata.map(ncard)};

    </>
  );
}

export default App;
