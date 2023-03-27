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
        ballColors={['#f5e663', '#48233c', '#f25f5c']}
        backgroundColor="#1b4965"
      />
    </div>
  );
};

export default Spiner;
