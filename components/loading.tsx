import styles from '../styles/load.module.css'
import { MutatingDots } from  'react-loader-spinner'

function App() {
  return (
    <div className={ styles['failed-to-load'] }>
      <MutatingDots 
        height="100"
        width="100"
        color="#219ebc"
        secondaryColor="#219ebc"
        radius='9.5'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default App;