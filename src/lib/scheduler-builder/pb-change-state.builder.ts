import { z } from "zod";
import { StageBuilder } from "./stage.builder";

const PBChangeStateSchema = z.object({
	tid: z.string(),
	smState: z.string(),
	taskGroup: z.string()
});
type PBChangeStateData = z.infer<typeof PBChangeStateSchema>;

export class PBChangeStateBuilder extends StageBuilder<PBChangeStateData> {
	constructor(key: string) {
		super(key, "PBChangeState", "2.1.0", PBChangeStateSchema);
		this.next.ERROR = "";
		this.next.SUCCESS = "";
	}

	setTaskId(taskId: string): this {
		this.data.tid = taskId;
		return this;
	}

	setSmState(smStateId: string): this {
		this.data.smState = smStateId;
		return this;
	}

	setTaskGroup(taskGroupId: string): this {
		this.data.taskGroup = taskGroupId;
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
