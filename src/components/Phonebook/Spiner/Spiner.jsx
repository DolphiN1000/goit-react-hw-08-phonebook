import { FidgetSpinner } from 'react-loader-spinner';
import styles from './spiner.module.scss';

const Spiner = () => {
  return (
    <div className={styles.container}>
      <FidgetSpinner
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={['#fffd53', '#0003ab', '#ff0000']}
        backgroundColor="#a6a6a6"
      />
    </div>
  );
};

export default Spiner;
