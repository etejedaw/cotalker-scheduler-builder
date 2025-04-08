import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const CCJSv200Schema = z.object({
	src: z.string(),
	hideOutput: z.boolean().optional()
});
type CCJSv200Data = z.infer<typeof CCJSv200Schema>;

interface NextStage {
	SUCCESS: string;
	ERROR: string;
}

export class CCJSv200Builder extends StageBuilder<CCJSv200Data, NextStage> {
	constructor(key: string) {
		super(key, "CCJS", "2.0.0", CCJSv200Schema);
		this.next.SUCCESS = "";
		this.next.ERROR = "";
	}

	setSrc(src: string): this {
		this.data.src = src;
		return this;
	}

	setHideOutput(hideOutput: boolean): this {
		this.data.hideOutput = hideOutput;
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