import React from 'react';

const Score = ({
	score
}) => {
	return (
		<tr>
			<td className="single line center aligned">
				<img className="ui mini circular centered image" src={score.photo} alt="profile photo"/>
				<p className="extra">{score.player.toUpperCase()}</p>
			</td>
			<td className="single line center aligned">
				<h1>{score.value}</h1>
			</td>
		</tr>
)};

export default Score;