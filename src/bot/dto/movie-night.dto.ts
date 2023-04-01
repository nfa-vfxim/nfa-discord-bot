import { Param, ParamType } from '@discord-nestjs/core';

export class MovieNightDto {
	@Param({
		name: 'movie_title',
		description: 'Name of the movie',
		required: true,
	})
	movie_title: string;

	@Param({
		name: 'date',
		description: 'Date of the event',
		required: true,
	})
	date: string;

	@Param({
		name: 'location',
		description: 'Location of the viewing',
		required: true,
	})
	location: string;

	@Param({
		name: 'format',
		description: 'Format',
		required: false,
	})
	format?: string;

	@Param({
		name: 'item_number',
		description: 'Item index',
		required: false,
		type: ParamType.INTEGER,
	})
	item_number = 0;
}
