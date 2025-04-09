import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const PBCleanChannelSchema = z.object({
	channelIds: z.array(z.string())
});
type PBCleanChannelData = z.infer<typeof PBCleanChannelSchema>;

interface NextStage {
	DEFAULT: string;
}

export class PBCleanChannelBuilder extends StageBuilder<
	PBCleanChannelData,
	NextStage
> {
	constructor(key: string) {
		super(key, "PBCleanChannel", null, PBCleanChannelSchema);
		this.next.DEFAULT = "";
	}

	setChannelIds(channelIds: string[]): this {
		this.data.channelIds = channelIds;
		return this;
	}

	setDefault(key: string): this {
		this.next.DEFAULT = key;
		return this;
	}
} 