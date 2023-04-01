import { Param, ParamType } from '@discord-nestjs/core';

export class TVNightDto {
	@Param({
		name: 'tv_title',
		description: 'Name of the series',
		required: true,
	})
	tv_title: string;

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
		name: 'episode',
		description: 'Episode',
		required: true,
	})
	episode: string;

	@Param({
		name: 'item_number',
		description: 'Item index',
		required: false,
		type: ParamType.INTEGER,
	})
	item_number = 0;
}
