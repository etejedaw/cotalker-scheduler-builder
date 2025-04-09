import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const PBChannelToTaskSEv200Schema = z.object({
	channelId: z.string() // Assuming CotChannelId is string
});
type PBChannelToTaskSEv200Data = z.infer<typeof PBChannelToTaskSEv200Schema>;

interface NextStage {
	SUCCESS: string;
	ERROR: string;
}

export class PBChannelToTaskSEv200Builder extends StageBuilder<
	PBChannelToTaskSEv200Data,
	NextStage
> {
	constructor(key: string) {
		super(key, "PBChannelToTaskSE", "2.0.0", PBChannelToTaskSEv200Schema);
		this.next.SUCCESS = "";
		this.next.ERROR = "";
	}

	setChannelId(channelId: string): this {
		this.data.channelId = channelId;
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