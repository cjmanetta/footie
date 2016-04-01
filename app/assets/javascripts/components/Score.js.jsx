import React from 'react';


const imagePath = (player) => {
	return `/assets/profile_${player.toLowerCase()}.png`
}

const Score = ({
	score
}) => {
	return (
		<tr>
			<td className="single line center aligned">
				<img className="ui mini circular centered image" src={score.photo} alt="profile photo"/>
				<p className="extra">{score.player}</p>
			</td>
			<td className="single line center aligned">
				<h1>{score.value}</h1>
			</td>
		</tr>
)};

export default Score;