import './feature.css';
import Button from '../common/button/Button';
import { useEffect, useState } from 'react';

interface IShortenUrl {
	id: number;
	originalUrl: string;
	shortenUrl: string;
	isCopied: boolean;
}

let id = 0;

const getUrlsFromLocalStorage = () => {
	let urlsFromLocalStorage = localStorage.getItem('urlObj');

	if (urlsFromLocalStorage) {
		return JSON.parse(urlsFromLocalStorage);
	} else {
		return [];
	}
}

const Feature = () => {
	const [url, setUrl] = useState('');
	const [isEmpty, setEmpty] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [urlObj, setUrlObj] = useState<IShortenUrl[]>(getUrlsFromLocalStorage());
	const [isError, setError] = useState(false);
	const [isCopied, setIsCopied] = useState(true);

	useEffect(() => {
		localStorage.setItem('urlObj', JSON.stringify(urlObj));
	}, [urlObj])
	
	const callShortenAPI = async () => {
		if (!url) {
			setEmpty(true);
		} else {
			setEmpty(false);
			try {
				setIsLoading(true);
				const resultFromAPI = 	await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
				const dataJSON = await resultFromAPI.json();
				const dataToBeSeted = [
					...urlObj,
					{
						id: id++,
						originalUrl: dataJSON.result.original_link, 
						shortenUrl: dataJSON.result.full_short_link,
						isCopied: false
					}
				];
				
				setUrlObj(dataToBeSeted);
				
				setUrl('');
			} catch(err) {
				setError(true);
			} finally {
				setIsLoading(false);
			}
		}
	}

	const copyToClipBoard = (id: number) => (event: any) => {
		try {
			const currentIndex = urlObj.findIndex((url: IShortenUrl) => url.id === id);
			const textToCopy = urlObj[currentIndex]['shortenUrl'];
			
			navigator.clipboard.writeText(textToCopy);
			
			const urlCleanedCopied: IShortenUrl[] = urlObj.map( (obj: IShortenUrl) => {
				return {...obj, isCopied: false};
			});

			const updatedUrl = {...urlObj[currentIndex], isCopied: true};

			const newUrlArray = [
				...urlCleanedCopied.slice(0, currentIndex),
				updatedUrl,
				...urlCleanedCopied.slice(currentIndex + 1)
			]

			setUrlObj(newUrlArray);

			setIsCopied(true);
		} catch (err) {
			setIsCopied(false);
		}
	};

	return (
		<div className='sep__feature'>
			<div className="sep__boxed">
				<div className='sep__feature-search_background'>
					<div className='sep__feature-search_row'>
						<input 
							name='url' 
							placeholder='Shorten a link here...'
							value={url}
							onChange={(e) => setUrl(e.target.value)}
							className={isEmpty ? 'sep__feature-search_input-error' : ''}
						/>
						{isEmpty && <p className='sep__feature-search_error-message'>Please add a link</p>}
					</div>
					<div className='sep__feature-search_button'>
						<Button 
							text='Shorten it!' 
							width='100%' 
							height='38px' 
							radius='6px'
							action={callShortenAPI}
						/>
					</div>
				</div>
				<div className="sep__feature-results">
					{isError && <p className='sep__feature-results_error'>Error trying to make your request, please try again.</p>}
					{!isCopied && <p className='sep__feature-results_error'>Link not copied, please try again.</p>}
					{isLoading && <p className='sep__feature-results_loading'>We are working on your request...</p>}
					{urlObj.map( (urls: IShortenUrl) => (
						<div key={urls.id} className='sep__feature-results_url'>
							<p>{urls.originalUrl}</p>
							<p>{urls.shortenUrl}</p>
							<div className='sep__feature-results_url-button'>
								<Button 
									text={urls.isCopied ? 'Copied!' : 'Copy'}
									width='100%'
									height='38px' 
									radius='6px'
									action={copyToClipBoard(urls.id)}
									isClicked={urls.isCopied}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='sep__feature-background'></div>
		</div>
	)
}

export default Feature;