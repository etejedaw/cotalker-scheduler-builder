import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const PBAnswerCheckerSchema = z.object({
	query: z.record(z.string(), z.any()),
	check: z.array(
		z.object({
			comparison: z.string(),
			identifier: z.string(),
			value: z.any().optional()
		})
	)
});
type PBAnswerCheckerData = z.infer<typeof PBAnswerCheckerSchema>;

interface NextStage {
	FOUND: string;
	"NOT-FOUND": string;
}

export class PBAnswerCheckerBuilder extends StageBuilder<
	PBAnswerCheckerData,
	NextStage
> {
	constructor(key: string) {
		super(key, "PBAnswerChecker", null, PBAnswerCheckerSchema);
		this.next.FOUND = "";
		this.next["NOT-FOUND"] = "";
	}

	setQuery(query: Record<string, any>): this {
		this.data.query = query;
		return this;
	}

	setCheck(
		check: {
			comparison: string;
			identifier: string;
			value?: any;
		}[]
	): this {
		this.data.check = check;
		return this;
	}

	setFound(key: string): this {
		this.next.FOUND = key;
		return this;
	}

	setNotFound(key: string): this {
		this.next["NOT-FOUND"] = key;
		return this;
	}
} 