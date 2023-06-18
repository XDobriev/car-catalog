import styles from './Home.module.css'
import {cars} from './cars.data.js'

function App() {

  return (
    <div>
      <h1>Cars Catalog</h1>
      {cars.map(car =>(
        <div key={car.id} className={styles.item}>
        <div className={styles.image} style={{
            backgroundImage: `url(${car.image})`,
        }}
        />
        <div className={styles.info}>
            <h2>{car.name}</h2>
            <p>{new Intl.NumberFormat('ru-Ru', {
                style: 'currency',
                currency: 'USD'
            }).format
            (car.price)}</p>
            <button>Read more</button>  
        </div>
        
      </div>
      ))}
      
    </div>
  )
}

export default App