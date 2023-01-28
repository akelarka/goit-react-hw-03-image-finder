import { TailSpin } from 'react-loader-spinner';
import style from './Loader.module.css';

export const Loader = () => {
    return (
        <TailSpin
            height="80"
            width="80"
            color="#2196f3"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass={style.loader}
            visible={true}
        />
    );
};

export default Loader;
