import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const NWBotV2V3Schema = z.object({
	uri: z.string(),
	channel: z.string(), // Assuming CotChannelId is string
	messages: z.array(z.object({})), // Assuming object array
	process: z.string()
});
type NWBotV2V3Data = z.infer<typeof NWBotV2V3Schema>;

interface NextStage {
	SUCCESS: string;
	ERROR: string;
}

export class NWBotV2V3Builder extends StageBuilder<NWBotV2V3Data, NextStage> {
	constructor(key: string) {
		super(key, "NWBotV2V3", null, NWBotV2V3Schema);
		this.next.SUCCESS = "";
		this.next.ERROR = "";
	}

	setUri(uri: string): this {
		this.data.uri = uri;
		return this;
	}

	setChannel(channel: string): this {
		this.data.channel = channel;
		return this;
	}

	setMessages(messages: object[]): this {
		this.data.messages = messages;
		return this;
	}

	setProcess(process: string): this {
		this.data.process = process;
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