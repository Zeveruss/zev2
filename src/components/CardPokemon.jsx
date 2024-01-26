import React from 'react';
import { Link } from 'react-router-dom';

export const CardPokemon = ({ pokemon }) => {
	return (
		<Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>

			<div className='card-img'>
				<img
					src={pokemon.sprites.other.dream_world.front_default}
					alt={`Pokemon ${pokemon.name}`}
				/>	<div className='card-info'>
					<h4>{pokemon.name}<span className='pokemon-id'>N° {pokemon.id}</span></h4>
					<div className='card-types'>
						{pokemon.types.map(type => (
							<span key={type.type.name} className={type.type.name}>
								{type.type.name}
							</span>
						))}
					</div>
				</div>
			</div>
		</Link>
	);
};
