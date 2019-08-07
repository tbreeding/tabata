import Head from 'next/head'

export default ({ props = { title, description } }) => (
	<div>
		<Head>
			<title>{props.title || 'Next.js Test Title'}</title>
			<meta
				name="description"
				content={props.description || 'Tabata-Timer.com for Tabata Workouts'}
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link
				href="https://fonts.googleapis.com/css?family=Righteous&display=swap"
				rel="stylesheet"
			/>
			<meta charSet="utf-8" />
		</Head>
	</div>
)
