import { ContentModalProps } from './ContentModal.props';
import styles from './ContentModal.module.css';
import { Modal } from 'components/Common/Modal/Modal';
import Image from 'next/image';
import { useResizeH, useResizeW } from 'hooks/useResize';
import { CommentItem } from 'components/Comments/CommentItem/CommentItem';
import { CommentInput } from 'components/Comments/CommentInput/CommentInput';
import cn from 'classnames';


export const ContentModal = ({ type, active, setActive, image, postId }: ContentModalProps): JSX.Element => {
	const width = useResizeW();
	const height = useResizeH();

	const comment1 = {
		id: 1,
		type: 'both' as 'text' | 'image' | 'both',
		image: 'https://c.dns-shop.ru/thumb/st4/fit/760/600/01953b2a8ee70c7e62717184dfa78618/q93_6b65d4a9475fe4f2a153e2fd652f35b3ac33f365c74b735f34b29fd62647a7d8.jpg',
		text: 'Прохожу киберпанк, очень нравится. Надеюсь, такие игры будут выходить почаще. Сюжет вообще огонь...',
		username: 'separatrix',
		userImage: 'https://www.blast.hk/attachments/68493/',
		date: '2023-05-05T13:36:28',
	};

	const comment2 = {
		id: 2,
		type: 'text' as 'text' | 'image' | 'both',
		image: '',
		text: 'Парни, ситуация - живу в Крыму, пользовался Яндекс инвестициям, потом все перешло в ВТБ, продать акции не могу ибо санкции.' +
			'Вопрос - можете посоветовать брокеров с онлайн открытием счета(ну или крымских). Заранее спасибо!\n' +
			'P.S. По мосту ехать 10+ часов в одну сторону пока не особо хочу',
		username: 'coolboy',
		userImage: 'https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg',
		date: '2023-03-17T19:04:45',
	};

	const comment3 = {
		id: 3,
		type: 'image' as 'text' | 'image' | 'both',
		image: 'https://games.mail.ru/hotbox/content_files/game/2020/06/16/aed1e04647ec4b64ad63215ef6f57898.jpg',
		text: '',
		username: 'iloshka',
		userImage: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png',
		date: '2023-04-01T20:16:07',
	};

	const comments = [comment1, comment2, comment3];

	if (type == 'post' && image) {
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
	} else {
		return (
			<Modal active={active} setActive={setActive}>
				<div className={styles.commentsList}>
					<div className={styles.commentsBlock}>
						{comments.map(c => (
							<CommentItem key={c.id} type={c.type} image={c.image} text={c.text}
								username={c.username} userImage={c.userImage} date={c.date} />
						))}
					</div>
					<CommentInput />
				</div>
			</Modal >
		);
	}
};