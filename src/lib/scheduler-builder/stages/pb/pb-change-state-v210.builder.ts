import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const PBChangeStatev210Schema = z.object({
	tid: z.string(),
	smState: z.string(),
	taskGroup: z.string(),
	quiet: z.boolean().optional()
});
type PBChangeStatev210Data = z.infer<typeof PBChangeStatev210Schema>;

interface NextStage {
	SUCCESS: string;
	ERROR: string;
}

export class PBChangeStatev210Builder extends StageBuilder<
	PBChangeStatev210Data,
	NextStage
> {
	constructor(key: string) {
		super(key, "PBChangeState", "2.1.0", PBChangeStatev210Schema);
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

	setQuiet(quiet: boolean): this {
		this.data.quiet = quiet;
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