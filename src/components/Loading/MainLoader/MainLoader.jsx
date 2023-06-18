import { ProgressBar } from 'react-loader-spinner';
import { Loadbox, Overlay } from './MainLoader.styled';

const MainLoader = () => {
  return (
    <Overlay>
      <Loadbox>
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#ee5c23"
          barColor="#04d9ff"
        />
      </Loadbox>
    </Overlay>
  );
};

export default MainLoader;
