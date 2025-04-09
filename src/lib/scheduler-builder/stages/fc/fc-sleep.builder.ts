import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const FCSleepSchema = z.object({
	milliseconds: z.number()
});
type FCSleepData = z.infer<typeof FCSleepSchema>;

interface NextStage {
	DEFAULT: string;
}

export class FCSleepBuilder extends StageBuilder<FCSleepData, NextStage> {
	constructor(key: string) {
		super(key, "FCSleep", null, FCSleepSchema);
		this.next.DEFAULT = "";
	}

	setMilliseconds(milliseconds: number): this {
		this.data.milliseconds = milliseconds;
		return this;
	}

	setDefault(key: string): this {
		this.next.DEFAULT = key;
		return this;
	}
} 