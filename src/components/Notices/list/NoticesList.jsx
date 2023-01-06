import NoticesItems from '../items/NoticesItems';
import styles from './NoticesList.module.scss';



const NoticesList = ({notices}) => {
	return (
		<ul className={styles.wrapper}>
			{notices.map(
				({
					_id : id,
					category,
					name,
					title,
					birthday,
					breed,
					sex,
					location,
					price,
					imageURL,
					comments,
					owner,
					email,
					phone,
				}) => (
					<li key={id}>
						<NoticesItems
						category={category}
						title={title}
						name={name}
						birthday={birthday}
						breed={breed}
						sex={sex}
						location={location}
						price={price}
						imageURL={imageURL}
						comments={comments}
						owner={owner}
						email={email}
						phone={phone}
					/>
					</li>
				)
			)}
		</ul>
	);
};

export default NoticesList;
