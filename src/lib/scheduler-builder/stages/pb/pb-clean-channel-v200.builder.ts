import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const PBCleanChannelv200Schema = z.object({
	channelIds: z.array(z.string())
});
type PBCleanChannelv200Data = z.infer<typeof PBCleanChannelv200Schema>;

interface NextStage {
	SUCCESS: string;
	ERROR: string;
}

export class PBCleanChannelv200Builder extends StageBuilder<
	PBCleanChannelv200Data,
	NextStage
> {
	constructor(key: string) {
		super(key, "PBCleanChannel", "2.0.0", PBCleanChannelv200Schema);
		this.next.SUCCESS = "";
		this.next.ERROR = "";
	}

	setChannelIds(channelIds: string[]): this {
		this.data.channelIds = channelIds;
		return this;
	}

	setSuccess(key: string): this {
		this.next.SUCCESS = key;
		return this;
	}

	setError(key: string): this {
		this.next.ERROR = key;
		return this;
	}
} 