import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const FCEachv200Schema = z.object({
	control: z.array(z.any()),
	target: z.string()
});
type FCEachv200Data = z.infer<typeof FCEachv200Schema>;

interface NextStage {
	STEP: string;
	DONE: string;
}

export class FCEachv200Builder extends StageBuilder<FCEachv200Data, NextStage> {
	constructor(key: string) {
		super(key, "FCEach", "2.0.0", FCEachv200Schema);
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