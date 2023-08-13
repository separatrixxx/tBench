import styles from './ProfileOptions.module.css';
import { useState } from 'react';
import { useResizeW } from 'hooks/useResize';
import { useScrollY } from 'hooks/useScrollY';
import { ExitButton } from 'components/Buttons/ExitButton/ExitButton';
import { ChangeTheme } from 'components/Buttons/ChangeTheme/ChangeTheme';
import Settings from './settings.svg';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { AppState } from '@/pages/store';
import cn from 'classnames';


export const ProfileOptions = (): JSX.Element => {
    const theme = useSelector((state: AppState) => state.theme.theme);
    
    const [hiddenOptions, setHiddenOptions] = useState<boolean>(true);

    const scrollPosition = useScrollY();
    const width = useResizeW();

    let opacity = 1;

    if (width < 1024 && opacity > 0) {
        opacity -= scrollPosition / 100;
    } else if (width >= 1024 && opacity > 0) {
        opacity -= scrollPosition / 150;
    }

    if (opacity <= 0 && !hiddenOptions) {
        setHiddenOptions(true);
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
            height: '85px',
            marginTop: '5px',
            gap: '5px',
        },
        hidden: {
            height: '0px',
            marginTop: '0',
            gap: '0',
        }
    };

    return (
        <div className={cn(styles.profileOptions, {
            [styles.darkThemeProfileOptions]: theme === 'dark',
            [styles.hidden]: opacity <= 0,
        })} style={{ opacity: opacity }} onMouseOver={() => {
            if (width >= 1024) {
                setHiddenOptions(false);
            }
        }} onMouseOut={() => {
            if (width >= 1024) {
                setHiddenOptions(true);
            }
        }}>
            <motion.span className={cn(styles.optionsButton, {
                [styles.darkThemeOptionsButton]: theme === 'dark',
            })} onClick={() => {
                if (width < 1024) {
                    setHiddenOptions(!hiddenOptions);
                }
            }}
                variants={variants}
                initial={!hiddenOptions ? 'active' : 'passive'}
                transition={{ duration: 0.3 }}
                animate={!hiddenOptions ? 'active' : 'passive'}>
                <Settings />
            </motion.span>
            <motion.div className={styles.blockProfileOptions}
                variants={variantsBlock}
                initial={!hiddenOptions ? 'visible' : 'hidden'}
                transition={{ duration: 0.3 }}
                animate={!hiddenOptions ? 'visible' : 'hidden'}>
                <ChangeTheme hiddenOptions={hiddenOptions} />
                <ExitButton hiddenOptions={hiddenOptions} />
            </motion.div>
        </div>
    );
};