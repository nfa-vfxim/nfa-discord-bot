import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';

import { MovieNightCommand } from './commands/movie-night.command';
import { TVNightCommand } from './commands/tv-night.command';

@Module({
	imports: [DiscordModule.forFeature()],
	providers: [MovieNightCommand, TVNightCommand],
})
export class BotModule {}
