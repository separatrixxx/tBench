import { HeaderButtonProps } from './HeaderButton.props';
import styles from './HeaderButton.module.css';
import Burger from './burger.svg';
import Close from './close.svg';

export const HeaderButton = ({ open, setOpen }: HeaderButtonProps): JSX.Element => {
	if (open) {
        return (
            <span className={styles.close} onClick={() => setOpen(!open)}>
              <Close />
            </span>
        );
    } else {
        return (
            <span className={styles.burger} onClick={() => setOpen(!open)}>
              <Burger />
            </span>
        );
    }
};