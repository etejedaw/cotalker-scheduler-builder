import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const PBChangeStatev200Schema = z.object({
	tid: z.string(),
	smState: z.string(),
	taskGroup: z.string()
});
type PBChangeStatev200Data = z.infer<typeof PBChangeStatev200Schema>;

interface NextStage {
	SUCCESS: string;
	ERROR: string;
}

export class PBChangeStatev200Builder extends StageBuilder<
	PBChangeStatev200Data,
	NextStage
> {
	constructor(key: string) {
		super(key, "PBChangeState", "2.0.0", PBChangeStatev200Schema);
		this.next.SUCCESS = "";
		this.next.ERROR = "";
	}

	setTid(tid: string): this {
		this.data.tid = tid;
		return this;
	}

	setSmState(smState: string): this {
		this.data.smState = smState;
		return this;
	}

	setTaskGroup(taskGroup: string): this {
		this.data.taskGroup = taskGroup;
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