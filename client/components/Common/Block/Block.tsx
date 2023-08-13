import { BlockProps } from './Block.props';
import styles from './Block.module.css';
import Image from 'next/image';

export const Block = ({ type, color, image, children }: BlockProps): JSX.Element => {    
	if (type === 'text' && color) {
        return (
            <div className={styles.textBlock} style={{ background: color }}>
                {children}
            </div>
        );
    } else if (type === 'image' && image) {
        return (
            <Image className={styles.imageBlock} draggable='false'
                loader={() => image}
                src={image}
                alt='image'
                width={1}
                height={1}
                unoptimized={true}
                priority={true}
            />
        );
    } else {
        return (
            <div className={styles.duoBlock}>
                {children}
            </div>
        );
    }
};