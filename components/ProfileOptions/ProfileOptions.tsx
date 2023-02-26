import { ProfileOptionsProps } from './ProfileOptions.props';
import styles from './ProfileOptions.module.css';
import { IoSettingsOutline } from "react-icons/io5";
import { useContext, useState } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';
import { useResizeW } from 'hooks/useResize';
import { useScrollY } from 'hooks/useScrollY';
import { ExitButton } from 'components/ExitButton/ExitButton';
import { ChangeTheme } from 'components/ChangeTheme/ChangeTheme';
import { motion } from 'framer-motion';

export const ProfileOptions = ({ setTheme }: ProfileOptionsProps): JSX.Element => {
    const context = useContext(AppContext);

    const [hiddenOptions, setHiddenOptions] = useState<boolean>(true);

    const scrollPosition = useScrollY();
    const width = useResizeW();

    let opacity = 1;

    if (width < 1024 && opacity > 0) {
        opacity -= scrollPosition / 100;
    } else {
        opacity -= scrollPosition / 150;
        console.log(scrollPosition)
    }

    const variants = {
		active: {
			transform: 'rotate(90deg)',
		},
		passive: {
            transform: 'rotate(0deg)',
        }
	};

    const variantsBlock = {
		visible: {
            height: '92px',
            marginTop: '10px',
            gap: '10px',
		},
		hidden: {
            height: '0px',
            marginTop: '0',
            gap: '0',
        }
	};

    return (
        <div className={cn(styles.profileOptions, {
            [styles.darkThemeProfileOptions]: context.theme === 'dark',
        })} style={{opacity: opacity}} onMouseOver={() => {
            if (width >= 1024) {
                setHiddenOptions(false);
            }
        }} onMouseOut={() => {
            if (width >= 1024) {
                setHiddenOptions(true);
            }
        }}>
            <motion.span className={cn(styles.optionsButton, {
                [styles.darkThemeOptionsButton]: context.theme === 'dark',
            })} onClick={() => {
                if (width < 1024) {
                    setHiddenOptions(!hiddenOptions);
                }
            }} 
                variants={variants}
                initial={!hiddenOptions ? 'active' : 'passive'}
                transition={{ duration: 0.3 }}
                animate={!hiddenOptions ? 'active' : 'passive'}>
                <IoSettingsOutline />
            </motion.span>
            <motion.div className={styles.blockProfileOptions}
                variants={variantsBlock}
                initial={!hiddenOptions ? 'visible' : 'hidden'}
                transition={{ duration: 0.3 }}
                animate={!hiddenOptions ? 'visible' : 'hidden'}>
                <ChangeTheme setTheme={setTheme} hiddenOptions={hiddenOptions} />
                <ExitButton hiddenOptions={hiddenOptions} />
            </motion.div>
        </div>
    );
};