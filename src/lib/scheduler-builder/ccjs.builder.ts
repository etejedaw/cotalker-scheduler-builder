import { z } from "zod";
import { StageBuilder } from "./stage.builder";

const CCJSSchema = z.object({
	src: z.string()
});
type CCJSData = z.infer<typeof CCJSSchema>;

export class CCJSBuilder extends StageBuilder<CCJSData> {
	constructor(key: string) {
		super(key, "CCJS", "2.0.3", CCJSSchema);
		this.next.SUCCESS = "";
		this.next.ERROR = "";
	}

	setSrc(src: string): this {
		this.data.src = src;
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
