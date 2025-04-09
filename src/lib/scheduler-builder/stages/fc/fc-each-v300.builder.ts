import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const FCEachv300Schema = z.object({
	control: z.array(z.any()),
	target: z.string()
});
type FCEachv300Data = z.infer<typeof FCEachv300Schema>;

interface NextStage {
	STEP: string;
	DONE: string;
}

export class FCEachv300Builder extends StageBuilder<FCEachv300Data, NextStage> {
	constructor(key: string) {
		super(key, "FCEach", "3.0.0", FCEachv300Schema);
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