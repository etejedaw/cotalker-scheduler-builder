import { z } from "zod";
import { StageBuilder } from "../../stage.builder";

const PBAnswerCheckerv200Schema = z.object({
	query: z.record(z.string(), z.any()),
	check: z.array(
		z.object({
			comparison: z.string(),
			identifier: z.string(),
			value: z.any().optional()
		})
	)
});
type PBAnswerCheckerv200Data = z.infer<typeof PBAnswerCheckerv200Schema>;

interface NextStage {
	FOUND: string;
	"NOT-FOUND": string;
	ERROR: string;
}

export class PBAnswerCheckerv200Builder extends StageBuilder<
	PBAnswerCheckerv200Data,
	NextStage
> {
	constructor(key: string) {
		super(key, "PBAnswerChecker", "2.0.0", PBAnswerCheckerv200Schema);
		this.next.FOUND = "";
		this.next["NOT-FOUND"] = "";
		this.next.ERROR = "";
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

	setError(key: string): this {
		this.next.ERROR = key;
		return this;
	}
} 