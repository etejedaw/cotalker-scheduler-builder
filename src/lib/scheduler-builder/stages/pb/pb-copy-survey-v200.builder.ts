import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const PBCopySurveyv200Schema = z.object({
	formId: z.string(),
	formChannel: z.string(),
	targetChannel: z.string(),
	sentBy: z.string().optional(),
	createNewAnswer: z.boolean(),
	editMode: z.boolean().optional()
});
type PBCopySurveyv200Data = z.infer<typeof PBCopySurveyv200Schema>;

interface NextStage {
	SUCCESS: string;
	ERROR: string;
}

export class PBCopySurveyv200Builder extends StageBuilder<
	PBCopySurveyv200Data,
	NextStage
> {
	constructor(key: string) {
		super(key, "PBCopySurvey", "2.0.0", PBCopySurveyv200Schema);
		this.next.SUCCESS = "";
		this.next.ERROR = "";
	}

	setFormId(formId: string): this {
		this.data.formId = formId;
		return this;
	}

	setFormChannel(formChannel: string): this {
		this.data.formChannel = formChannel;
		return this;
	}

	setTargetChannel(targetChannel: string): this {
		this.data.targetChannel = targetChannel;
		return this;
	}

	setSentBy(sentBy: string): this {
		this.data.sentBy = sentBy;
		return this;
	}

	setCreateNewAnswer(createNewAnswer: boolean): this {
		this.data.createNewAnswer = createNewAnswer;
		return this;
	}

	setEditMode(editMode: boolean): this {
		this.data.editMode = editMode;
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