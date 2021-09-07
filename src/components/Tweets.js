import React from "react"
//Import Components
import Tweet from "./Tweet"

const Tweets = (props) => {
	const tweets = [
		{ name: "Seyifunmi", tweet: "A very random tweet" },
		{ name: "Traversy Media", tweet: "whats up guys, I'm Out" },
		{ name: "Webdevsimplified ", tweet: "hey guyys im simplified the web ?" },
	]

	return (
		<section>
			{tweets.map(
				(
					tweet // we map over the array
				) => (
					<Tweet name={tweet.name} tweet={tweet.tweet} />
				)
			)}
		</section>
	)
}
export default Tweets
