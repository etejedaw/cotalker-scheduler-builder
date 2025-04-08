import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const FCEachSchema = z.object({
	control: z.array(z.any()),
	target: z.string()
});
type FCEachData = z.infer<typeof FCEachSchema>;

interface NextStage {
	STEP: string;
	DONE: string;
}

export class FCEachBuilder extends StageBuilder<FCEachData, NextStage> {
	constructor(key: string) {
		super(key, "FCEach", null, FCEachSchema);
		this.next.STEP = "";
		this.next.DONE = "";
	}

	setControl(control: any[]): this {
		this.data.control = control;
		return this;
	}

	setTarget(target: string): this {
		this.data.target = target;
		return this;
	}

	setStep(key: string): this {
		this.next.STEP = key;
		return this;
	}

	setDone(key: string): this {
		this.next.DONE = key;
		return this;
	}
} 