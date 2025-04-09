import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const PBCopySurveySchema = z.object({
	messages: z.array(z.object({})),
	channel: z.string(),
	sentBy: z.string().optional()
});
type PBCopySurveyData = z.infer<typeof PBCopySurveySchema>;

interface NextStage {
	DEFAULT: string;
}

export class PBCopySurveyBuilder extends StageBuilder<PBCopySurveyData, NextStage> {
	constructor(key: string) {
		super(key, "PBCopySurvey", null, PBCopySurveySchema);
		this.next.DEFAULT = "";
	}

	setMessages(messages: object[]): this {
		this.data.messages = messages;
		return this;
	}

	setChannel(channel: string): this {
		this.data.channel = channel;
		return this;
	}

	setSentBy(sentBy: string): this {
		this.data.sentBy = sentBy;
		return this;
	}

	setDefault(key: string): this {
		this.next.DEFAULT = key;
		return this;
	}
} 