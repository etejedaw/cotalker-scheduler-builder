import { z } from "zod";
import { StageBuilder } from "./stage.builder";

const PBMessageSchema = z.object({
	content: z.string(),
	contentType: z.enum(["text/system", "text/message", "text/html"]),
	sentBy: z.string(),
	channelIds: z.array(z.string())
});
type PBMessageData = z.infer<typeof PBMessageSchema>;

export class PBMessageBuilder extends StageBuilder<PBMessageData> {
	constructor(key: string) {
		super(key, "PBMessage", "2.1.0", PBMessageSchema);
		this.next.ERROR = "";
		this.next.SUCCESS = "";
	}

	setContent(content: string): this {
		this.data.content = content;
		return this;
	}

	setContentType(contentType: PBMessageData["contentType"]): this {
		this.data.contentType = contentType;
		return this;
	}

	setSentBy(userId: string): this {
		this.data.sentBy = userId;
		return this;
	}

	setChannels(channelsId: string[]): this {
		this.data.channelIds = channelsId;
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
