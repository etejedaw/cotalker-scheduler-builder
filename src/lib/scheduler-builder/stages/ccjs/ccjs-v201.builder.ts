import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const CCJSv201Schema = z.object({
	useDefaultCotalkerAuth: z.boolean().optional(),
	data: z.object({}).passthrough().optional(),
	src: z.string(),
	hideOutput: z.boolean().optional()
});
type CCJSv201Data = z.infer<typeof CCJSv201Schema>;

interface NextStage {
	SUCCESS: string;
	ERROR: string;
}

export class CCJSv201Builder extends StageBuilder<CCJSv201Data, NextStage> {
	constructor(key: string) {
		super(key, "CCJS", "2.0.1", CCJSv201Schema);
		this.next.SUCCESS = "";
		this.next.ERROR = "";
	}

	setUseDefaultCotalkerAuth(useDefaultCotalkerAuth: boolean): this {
		this.data.useDefaultCotalkerAuth = useDefaultCotalkerAuth;
		return this;
	}

	setData(data: Record<string, unknown>): this {
		this.data.data = data;
		return this;
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