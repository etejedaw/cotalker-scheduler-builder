import { z } from "zod";
import { StageBuilder } from "../stage.builder";

const FCIfElseSchema = z.object({
	left: z.string(),
	right: z.string()
});
type FCIfElseData = z.infer<typeof FCIfElseSchema>;

interface NextConditionalStage {
	IF: string;
	ELSE: string;
}

export class FCIfElseBuilder extends StageBuilder<
	FCIfElseData,
	NextConditionalStage
> {
	constructor(key: string) {
		super(key, "FCIfElse", null, FCIfElseSchema);
		this.next.IF = "";
		this.next.ELSE = "";
	}

	setRightCondition(condition: string): this {
		this.data.right = condition;
		return this;
	}

	setLeftCondition(condition: string): this {
		this.data.left = condition;
		return this;
	}

	setIf(key: string): this {
		this.next.IF = key;
		return this;
	}

	setElse(key: string): this {
		this.next.ELSE = key;
		return this;
	}
}
