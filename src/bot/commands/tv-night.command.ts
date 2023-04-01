import { SlashCommandPipe } from '@discord-nestjs/common';
import {
	Command,
	EventParams,
	Handler,
	InteractionEvent,
} from '@discord-nestjs/core';
import { ClientEvents } from 'discord.js';

import { TVNightDto } from '../dto/tv-night.dto';

@Command({
	name: 'tv-night',
	description: 'Create a tv night event',
})
export class TVNightCommand {
	@Handler()
	onTVNightCommand(
		@InteractionEvent(SlashCommandPipe) dto: TVNightDto,
		@EventParams() args: ClientEvents['interactionCreate'],
	): string {
		return `Create event for ${dto.tv_title}.`;
		//TODO
	}
}
