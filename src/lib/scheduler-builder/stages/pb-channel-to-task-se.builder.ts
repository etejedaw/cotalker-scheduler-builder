import { z } from "zod";
import { StageBuilder } from "../stage.builder";

const PBChannelToTaskSESchema = z.object({
	channelId: z.string()
});
type PBChannelToTaskSEData = z.infer<typeof PBChannelToTaskSESchema>;

export class PBChannelToTaskSEBuilder extends StageBuilder<PBChannelToTaskSEData> {
	constructor(key: string) {
		super(key, "PBChannelToTaskSE", "2.0.0", PBChannelToTaskSESchema);
		this.next.ERROR = "";
		this.next.SUCCESS = "";
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
