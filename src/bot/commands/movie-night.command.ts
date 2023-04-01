import { SlashCommandPipe } from '@discord-nestjs/common';
import {
	Command,
	EventParams,
	Handler,
	InteractionEvent,
} from '@discord-nestjs/core';
import { ClientEvents } from 'discord.js';

import { MovieNightDto } from '../dto/movie-night.dto';

@Command({
	name: 'movie-night',
	description: 'Create a movie night event',
})
export class MovieNightCommand {
	@Handler()
	onMovieNightCommand(
		@InteractionEvent(SlashCommandPipe) dto: MovieNightDto,
		@EventParams() args: ClientEvents['interactionCreate'],
	): string {
		return `Create event for ${dto.movie_title}.`;
		//TODO
	}
}
