import { ContentModalProps } from './ContentModal.props';
import styles from './ContentModal.module.css';
import { Modal } from 'components/Modal/Modal';
import Image from 'next/image';
import { useResizeH, useResizeW } from 'hooks/useResize';
import cn from 'classnames';


export const ContentModal = ({ active, setActive, image }: ContentModalProps): JSX.Element => {
	const width = useResizeW();
	const height = useResizeH();

	return (
		<Modal active={active} setActive={setActive}>
			<Image className={cn(styles.userContentImageFull, {
				[styles.widthFull]: width > height,
				[styles.heightFull]: width < height,
			})} draggable='false'
				loader={() => image ? image : ''}
				src={image ? image : ''}
				alt='image'
				width={1}
				height={1}
				unoptimized={true}
				priority={true}
				onClick={() => setActive(!active)}
			/>
		</Modal>
	);
};